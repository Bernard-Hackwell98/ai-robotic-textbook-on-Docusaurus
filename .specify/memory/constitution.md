<!-- Sync Impact Report:
Version change: 0.0.0 (initial) → 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] → Library-First
- [PRINCIPLE_2_NAME] → CLI Interface
- [PRINCIPLE_3_NAME] → Test-First (NON-NEGOTIABLE)
- [PRINCIPLE_4_NAME] → Integration Testing
- [PRINCIPLE_5_NAME] → Observability & Simplicity
Added sections:
- Development Environment
- Code Review and Quality Gates
Removed sections:
- [PRINCIPLE_6_NAME]
- [PRINCIPLE__DESCRIPTION]
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: None
-->
# AI Book Constitution

## Core Principles

### I. Library-First
Every feature starts as a standalone library. Libraries must be self-contained, independently testable, and documented. A clear purpose is required—no organizational-only libraries.

### II. CLI Interface
Every library exposes functionality via a Command Line Interface (CLI). A text in/out protocol is used: stdin/arguments for input, stdout for output, and stderr for errors. Support for both JSON and human-readable formats is mandatory.

### III. Test-First (NON-NEGOTIABLE)
Test-Driven Development (TDD) is mandatory: tests are written, user-approved, and fail before implementation begins. The Red-Green-Refactor cycle is strictly enforced.

### IV. Integration Testing
Integration tests must focus on new library contract tests, contract changes, inter-service communication, and shared schemas.

### V. Observability & Simplicity
Text I/O ensures debuggability. Structured logging is required. Development must start simple, adhering to YAGNI (You Aren't Gonna Need It) principles.

## Development Environment

Standardized tooling (e.g., Git, Node.js, Python) must be used. All development adheres to secure coding practices.

## Code Review and Quality Gates

All code changes require peer review. Automated linting and testing must pass before merging. Direct commits to the main branch are not permitted.

## Governance

This Constitution supersedes all other practices. Amendments require a documented proposal, team consensus, and a clear migration plan. All Pull Requests (PRs) and reviews must verify compliance. Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2025-12-10 | **Last Amended**: 2025-12-10
