# Global rules for this repo

## Coding style
- Use TypeScript where possible.
- Follow existing ESLint/Prettier configuration.

## Safety
- Never remove tests without explicit user approval.
- Prefer adding tests for every bug fix.

## Orchestration
- Orchestrator must always:
  - Ensure plan steps are traceable back to user requirements.
  - Tag risky tasks and ask user to confirm before execution.
  - Summarize each batch of work with: changed files, tests run, remaining risks.
