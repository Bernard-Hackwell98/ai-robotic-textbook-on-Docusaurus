# Research & Decisions

**Related Plan**: [plan.md](./plan.md)
**Status**: Completed

This document outlines the decisions made during the research phase for the ROS 2 Book Module project.

---

### 1. Docusaurus Layout & Sidebar Organization

**Decision**: The book module will appear as a single collapsible category in the Docusaurus sidebar.

**Rationale**: A single category provides a clean, organized, and discoverable entry point for the user. It keeps all related chapters grouped together. The default Docusaurus theme handles this presentation effectively. The file `docs/ros2-book/_category_.json` will be used to label the sidebar entry as "ROS 2: The Robotic Nervous System".

**Alternatives considered**:
- **Flat structure**: Placing each chapter as a top-level item in the sidebar. Rejected because it would clutter the main navigation and wouldn't scale if more book modules were added.
- **Multiple sub-categories**: Breaking the book into parts. Rejected as overly complex for a short, three-chapter module.

---

### 2. Folder Structure for /docs

**Decision**: Content will be placed in `docs/ros2-book/`.

**Rationale**: Docusaurus uses the `docs/` directory as the root for content. Creating a subdirectory `ros2-book/` provides a dedicated namespace for this specific module, preventing file name collisions and organizing the content logically.

**Alternatives considered**:
- **Root `docs/` folder**: Placing files like `01-ros2-fundamentals.md` directly in `docs/`. Rejected because it would mix this module's content with any other documentation in the project.

---

### 3. Mapping Specifications to Chapters

**Decision**: The functional requirements and user stories in `spec.md` will map directly to the content of the three chapters.

**Rationale**: The specification is already broken down into three clear, testable user stories, each corresponding to a chapter.
- **User Story 1 / FR-003** → `01-ros2-fundamentals.md`
- **User Story 2 / FR-004** → `02-nodes-topics-services.md`
- **User Story 3 / FR-005** → `03-urdf-basics.md`
This direct mapping ensures that the implementation (the written content) directly satisfies the feature requirements.

**Alternatives considered**:
- **A more granular breakdown**: Creating many small markdown files and combining them. Rejected as it adds unnecessary complexity for a short module and makes the 600-800 word count per chapter harder to manage.

---

### 4. AI Workflow for Chapter Refinement

**Decision**: A multi-stage AI-driven workflow will be used for drafting and refining chapters.

**Rationale**: To ensure quality, clarity, and consistency, a structured, iterative process is required.

**Workflow Steps**:
1.  **Initial Draft (AI)**: For each chapter, an initial draft will be generated based on the corresponding user story and functional requirements from the `spec.md`. The prompt will include the target audience (beginners) and word count constraints.
2.  **Technical Review (Human/AI)**: The draft will be reviewed for technical accuracy. All code snippets will be manually tested. An AI agent can be used to help identify potential inaccuracies or unclear explanations.
3.  **Clarity & Style Pass (AI)**: The technically validated draft will be processed by an AI prompt engineered to improve clarity, flow, and adherence to a consistent, beginner-friendly tone.
4.  **Final Polish (Human)**: A final human review will catch any remaining issues and approve the chapter for inclusion.
5.  **Validation**: The final markdown will be linted and the Docusaurus site will be built locally to ensure no errors.

**Alternatives considered**:
- **Fully manual writing**: Rejected as slower and less able to leverage AI for rapid drafting and style consistency.
- **Single-shot AI generation**: Rejected as unreliable. A single prompt is unlikely to produce a high-quality, technically accurate, and well-written chapter without iteration and review.
