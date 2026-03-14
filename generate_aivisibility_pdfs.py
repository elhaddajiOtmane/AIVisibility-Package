#!/usr/bin/env python3
"""
AI Visibility Business Package - PDF Generator
Converts markdown files to professional PDFs
"""

import os
import re
from datetime import datetime

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                 TableStyle, PageBreak, ListFlowable, ListItem)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# Color palette - AI Visibility brand colors
COLORS = {
    "primary": HexColor("#0F172A"),      # Dark navy
    "accent": HexColor("#3B82F6"),       # Blue
    "highlight": HexColor("#10B981"),    # Green
    "warning": HexColor("#F59E0B"),      # Amber
    "danger": HexColor("#EF4444"),       # Red
    "light_bg": HexColor("#F1F5F9"),     # Light gray
    "text": HexColor("#334155"),         # Slate
    "text_light": HexColor("#64748B"),   # Light slate
    "border": HexColor("#E2E8F0"),       # Border gray
    "white": white,
    "black": black,
}


def create_styles():
    """Create custom paragraph styles."""
    styles = getSampleStyleSheet()
    
    custom_styles = {
        "doc_title": ParagraphStyle(
            "DocTitle",
            parent=styles["Title"],
            fontSize=32,
            textColor=COLORS["primary"],
            spaceAfter=12,
            fontName="Helvetica-Bold",
            alignment=TA_CENTER
        ),
        "doc_subtitle": ParagraphStyle(
            "DocSubtitle",
            parent=styles["Normal"],
            fontSize=14,
            textColor=COLORS["text_light"],
            spaceAfter=30,
            fontName="Helvetica",
            alignment=TA_CENTER
        ),
        "h1": ParagraphStyle(
            "H1",
            parent=styles["Heading1"],
            fontSize=22,
            textColor=COLORS["primary"],
            spaceBefore=24,
            spaceAfter=12,
            fontName="Helvetica-Bold"
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=styles["Heading2"],
            fontSize=16,
            textColor=COLORS["accent"],
            spaceBefore=18,
            spaceAfter=8,
            fontName="Helvetica-Bold"
        ),
        "h3": ParagraphStyle(
            "H3",
            parent=styles["Heading3"],
            fontSize=13,
            textColor=COLORS["primary"],
            spaceBefore=12,
            spaceAfter=6,
            fontName="Helvetica-Bold"
        ),
        "body": ParagraphStyle(
            "Body",
            parent=styles["Normal"],
            fontSize=10,
            textColor=COLORS["text"],
            spaceAfter=8,
            fontName="Helvetica",
            leading=14
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=styles["Normal"],
            fontSize=10,
            textColor=COLORS["text"],
            spaceAfter=4,
            fontName="Helvetica",
            leading=14,
            leftIndent=20
        ),
        "code": ParagraphStyle(
            "Code",
            parent=styles["Normal"],
            fontSize=9,
            textColor=COLORS["primary"],
            spaceAfter=8,
            fontName="Courier",
            backColor=COLORS["light_bg"],
            leading=12
        ),
        "quote": ParagraphStyle(
            "Quote",
            parent=styles["Normal"],
            fontSize=11,
            textColor=COLORS["text_light"],
            spaceAfter=12,
            fontName="Helvetica-Oblique",
            leftIndent=30,
            rightIndent=30,
            leading=16
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=styles["Normal"],
            fontSize=8,
            textColor=COLORS["text_light"],
            alignment=TA_CENTER
        )
    }
    
    return custom_styles


def parse_markdown(content):
    """Parse markdown content into structured elements."""
    lines = content.split('\n')
    elements = []
    current_list = []
    in_code_block = False
    code_content = []
    
    for line in lines:
        # Code blocks
        if line.strip().startswith('```'):
            if in_code_block:
                elements.append(('code', '\n'.join(code_content)))
                code_content = []
                in_code_block = False
            else:
                if current_list:
                    elements.append(('list', current_list))
                    current_list = []
                in_code_block = True
            continue
        
        if in_code_block:
            code_content.append(line)
            continue
        
        # Skip empty lines
        if not line.strip():
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            continue
        
        # Headers
        if line.startswith('# '):
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('h1', line[2:].strip()))
        elif line.startswith('## '):
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('h2', line[3:].strip()))
        elif line.startswith('### '):
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('h3', line[4:].strip()))
        elif line.startswith('#### '):
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('h3', line[5:].strip()))
        # Blockquotes
        elif line.startswith('>'):
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('quote', line[1:].strip()))
        # Lists
        elif line.strip().startswith('- ') or line.strip().startswith('* '):
            current_list.append(line.strip()[2:])
        elif re.match(r'^\d+\.\s', line.strip()):
            current_list.append(re.sub(r'^\d+\.\s', '', line.strip()))
        # Horizontal rule
        elif line.strip() in ['---', '***', '___']:
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('hr', None))
        # Regular paragraph
        else:
            if current_list:
                elements.append(('list', current_list))
                current_list = []
            elements.append(('body', line.strip()))
    
    if current_list:
        elements.append(('list', current_list))
    
    return elements


def clean_text(text):
    """Clean markdown formatting from text."""
    # Bold
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    text = re.sub(r'__(.+?)__', r'<b>\1</b>', text)
    # Italic
    text = re.sub(r'\*(.+?)\*', r'<i>\1</i>', text)
    text = re.sub(r'_(.+?)_', r'<i>\1</i>', text)
    # Inline code
    text = re.sub(r'`(.+?)`', r'<font face="Courier">\1</font>', text)
    # Links - keep text only
    text = re.sub(r'\[(.+?)\]\(.+?\)', r'\1', text)
    # Escape special chars
    text = text.replace('&', '&amp;')
    # Fix common issues
    text = text.replace('<b>', '<b>').replace('</b>', '</b>')
    return text


def markdown_to_pdf(md_path, pdf_path, title=None):
    """Convert a markdown file to PDF."""
    
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title from first H1 if not provided
    if not title:
        match = re.search(r'^# (.+)$', content, re.MULTILINE)
        title = match.group(1) if match else os.path.basename(md_path).replace('.md', '')
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=50,
        leftMargin=50,
        topMargin=50,
        bottomMargin=50
    )
    
    styles = create_styles()
    elements_list = []
    
    # Cover page
    elements_list.append(Spacer(1, 2 * inch))
    elements_list.append(Paragraph(clean_text(title), styles["doc_title"]))
    elements_list.append(Paragraph("AI Visibility Agency", styles["doc_subtitle"]))
    elements_list.append(Paragraph(f"Generated: {datetime.now().strftime('%B %d, %Y')}", styles["doc_subtitle"]))
    elements_list.append(Spacer(1, 1 * inch))
    
    # Brand box
    brand_data = [["aivisibility.com"]]
    brand_table = Table(brand_data, colWidths=[200])
    brand_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), COLORS["accent"]),
        ("TEXTCOLOR", (0, 0), (-1, -1), COLORS["white"]),
        ("FONTNAME", (0, 0), (-1, -1), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 14),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 20),
        ("RIGHTPADDING", (0, 0), (-1, -1), 20),
    ]))
    elements_list.append(brand_table)
    
    elements_list.append(PageBreak())
    
    # Parse and render content
    parsed = parse_markdown(content)
    
    for elem_type, elem_content in parsed:
        try:
            if elem_type == 'h1':
                elements_list.append(Paragraph(clean_text(elem_content), styles["h1"]))
            elif elem_type == 'h2':
                elements_list.append(Paragraph(clean_text(elem_content), styles["h2"]))
            elif elem_type == 'h3':
                elements_list.append(Paragraph(clean_text(elem_content), styles["h3"]))
            elif elem_type == 'body':
                elements_list.append(Paragraph(clean_text(elem_content), styles["body"]))
            elif elem_type == 'quote':
                elements_list.append(Paragraph(clean_text(elem_content), styles["quote"]))
            elif elem_type == 'code':
                # Split long code blocks
                code_lines = elem_content.split('\n')
                for code_line in code_lines:
                    if code_line.strip():
                        elements_list.append(Paragraph(code_line[:100], styles["code"]))
            elif elem_type == 'list':
                for item in elem_content:
                    bullet_text = f"• {clean_text(item)}"
                    elements_list.append(Paragraph(bullet_text, styles["bullet"]))
                elements_list.append(Spacer(1, 6))
            elif elem_type == 'hr':
                elements_list.append(Spacer(1, 12))
        except Exception as e:
            # Skip problematic elements
            print(f"  Warning: Skipped element due to: {e}")
            continue
    
    # Footer
    elements_list.append(Spacer(1, 0.5 * inch))
    elements_list.append(Paragraph("AI Visibility Agency | aivisibility.com", styles["footer"]))
    
    # Build PDF
    doc.build(elements_list)
    return pdf_path


def main():
    """Generate PDFs for all AI Visibility documents."""
    
    base_dir = r"C:\laragon\www\ZyntaFlow_Brand_Package\AIVisibility-Package"
    pdf_dir = os.path.join(base_dir, "pdf")
    os.makedirs(pdf_dir, exist_ok=True)
    
    # Files to convert
    files = [
        (os.path.join(base_dir, "docs", "AIVISIBILITY-VALIDATION.md"), "Business Validation"),
        (os.path.join(base_dir, "docs", "AIVISIBILITY_COMPLETE_BUSINESS.md"), "Complete Business Strategy"),
        (os.path.join(base_dir, "docs", "AIVISIBILITY-IMPLEMENTATION.md"), "Implementation Guide"),
        (os.path.join(base_dir, "marketing", "AIVISIBILITY-LAUNCH-PLAYBOOK.md"), "8-Week Launch Playbook"),
        (os.path.join(base_dir, "marketing", "AIVISIBILITY-EMAIL-SEQUENCES.md"), "Email Sequences"),
        (os.path.join(base_dir, "marketing", "AIVISIBILITY-SOCIAL-CALENDAR.md"), "Social Media Calendar"),
    ]
    
    print("=" * 60)
    print("AI VISIBILITY - PDF GENERATOR")
    print("=" * 60)
    print()
    
    generated = []
    
    for md_path, title in files:
        if os.path.exists(md_path):
            filename = os.path.basename(md_path).replace('.md', '.pdf')
            pdf_path = os.path.join(pdf_dir, filename)
            
            print(f"Converting: {title}")
            print(f"  From: {md_path}")
            print(f"  To:   {pdf_path}")
            
            try:
                markdown_to_pdf(md_path, pdf_path, title)
                generated.append(pdf_path)
                print(f"  Status: SUCCESS")
            except Exception as e:
                print(f"  Status: FAILED - {e}")
            print()
        else:
            print(f"Skipping: {md_path} (not found)")
            print()
    
    print("=" * 60)
    print(f"COMPLETE: {len(generated)} PDFs generated")
    print("=" * 60)
    print()
    print("Output folder:", pdf_dir)
    print()
    for pdf in generated:
        print(f"  - {os.path.basename(pdf)}")


if __name__ == "__main__":
    main()
