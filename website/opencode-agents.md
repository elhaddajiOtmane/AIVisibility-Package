# OpenCode Agents & Orchestration: Advanced Cheat Sheet

This guide covers everything you need to know about creating, managing, and orchestrating agents in OpenCode, with a focus on best practices for delegation.

## 1. Core Concepts

OpenCode supports multiple modes for agents:
- **Primary**: The main agent handling the interaction. Uses tools and delegates tasks.
- **Subagent**: A specialized tool/agent invoked either manually or programmatically.
- **Both**: Can run independently or as a subagent.

### Where Agents Live
- **Global**: `~/.config/opencode/agents/`
- **Project-Specific**: `.opencode/agents/` (checked into your repo)

### Hidden vs Disabled
- `disable: true` — completely turns off the agent.
- `hidden: true` — removes it from the `@` autocomplete menu but keeps it available for programmatic invocation (e.g., as a background subagent).

---

## 2. The Orchestrator Setup (Best Practices)

The most robust setup is having an **Orchestrator** that *does not write code or perform tasks itself*. Instead, it plans the workflow and delegates strictly to specialized subagents.

### Example: `.opencode/agents/orchestrator.md`

```markdown
---
name: orchestrator
description: High-level planner and project manager. Delegates work to specialized subagents and enforces best practices.
mode: primary
model: claude-3-7-sonnet-20250219
permission.task:
  - builder
  - tester
  - docs
---

# Identity
You are the Orchestrator. **Do not execute tasks or write code directly.**

# Workflow
1. **Analyze**: Understand the user's request.
2. **Plan**: Break the request down into distinct steps.
3. **Delegate**: Use your `Task` tool to invoke the appropriate subagents (`builder`, `tester`, `docs`).
4. **Verify**: Ensure the subagents followed best practices and verified their work before returning to the user.
```

### Example Subagents

You can create specific workers to sit behind the orchestrator. For instance:

**`.opencode/agents/builder.md`**
```markdown
---
name: builder
description: Specialized in writing and refactoring code.
mode: subagent
hidden: true
permission.fs.read: true
permission.fs.write: true
---
You are the Builder. Focus entirely on clean, efficient code implementation based on the orchestrator's requirements.
```

**`.opencode/agents/tester.md`**
```markdown
---
name: tester
description: Generates and runs test cases.
mode: subagent
hidden: true
---
You are the Tester. Write edge-case tests, run test commands, and report passes/failures back to the orchestrator.
```

*(Note: The `review`, `market technical`, `market strategy`, and `market conversion` agents have been removed as requested.)*

---

## 3. Creating and Managing Agents

### File-Based Creation
Simply create a markdown file (e.g., `agent-name.md`) in your agents directory and add YAML frontmatter for the configuration (as shown above). The filename determines the agent's ID.

### CLI Creation
You can use the built-in command:
```bash
opencode agent create
```
This interactive prompt will ask you for details, let you choose tools, and generate the markdown file for you.

### Eliminating Agents
To permanently remove an agent:
1. **Delete** its `.md` file from `.opencode/agents/` or `~/.config/opencode/agents/`.
2. OR, simply add `disable: true` to its frontmatter if you want to keep the file around for reference without loading it.

---

## 4. Advanced Configuration & Overrides

### Routing Rules in `opencode.json`
You can define hard rules for agent capabilities inside your project's `opencode.json`:

```json
{
  "agents": {
    "builder": {
      "temperature": 0.2,
      "model": "claude-3-7-sonnet-20250219"
    }
  }
}
```

### Overriding Built-in Agents
If you want to modify how built-in OpenCode agents (like the default general agent) behave, you can create a file with the same name in your project's agents directory. The project-specific file always takes precedence, allowing you to lock down tools per repository.

---

## 5. Async Background Farm (Advanced Pipelines)

Because subagents can be invoked via the Task tool, your Orchestrator can trigger a pipeline where multiple subtasks happen iteratively. 

For instance:
1. Orchestrator triggers `builder`.
2. `builder` returns with updated source code.
3. Orchestrator triggers `tester`.
4. If testing fails, Orchestrator routes the failure log back to `builder` (Self-Healing).
5. Orchestrator triggers `docs` to update README.md on success.

By hiding (`hidden: true`) these subagents, the user's interface remains clean, but the Orchestrator has an entire team of specialist tools it can wield behind the scenes.
