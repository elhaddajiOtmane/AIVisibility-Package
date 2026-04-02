# Global rules for this repo

## Coding style
- Use TypeScript where possible. Follow the project's strict mode settings (functional, declarative style).
- Keep comments concise, explaining "why" not "how".

## Safety
- Never remove tests without explicit user approval.
- Prefer adding tests for every bug fix.
- Ensure animations are smooth and optimize for rendering speed where possible (Remotion style).

## Orchestration
- Orchestrator must always:
  - Ensure plan steps are traceable back to user requirements.
  - Tag risky tasks and ask user to confirm before execution.
  - Summarize each batch of work with: changed files, tests run, remaining risks.
  - Always check `task.md` and keep it updated.
