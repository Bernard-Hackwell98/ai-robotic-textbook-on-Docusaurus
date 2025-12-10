# Data Model

**Related Plan**: [plan.md](./plan.md)
**Status**: Completed

This document defines the key data entities for the ROS 2 Book Module. As this is a content-focused feature, the "data model" describes the structure of the documentation itself.

---

### Entity: Chapter

Represents a single Markdown file within the book module.

**Attributes**:
- **`title` (string)**: The main heading of the chapter (e.g., "ROS 2 Fundamentals").
- **`content` (Markdown)**: The body of the chapter, including text, images, and code snippets.
- **`word_count` (integer)**: The approximate number of words in the chapter.

**Validation Rules**:
- Must be a valid Markdown file.
- `word_count` must be between 600 and 800.
- Must have a single H1-level heading for the title.

---

### Entity: Code Example

Represents a block of runnable code within a Chapter.

**Attributes**:
- **`language` (string)**: The programming language of the snippet (e.g., `python`, `xml`).
- **`code` (string)**: The raw code content.

**Validation Rules**:
- `language` must be specified for correct syntax highlighting.
- `code` must be technically accurate and runnable in the context of the chapter's prerequisites (e.g., a valid `rclpy` snippet).
- The code must adhere to the style guidelines of its language.

---

### Entity: Sidebar Category

Represents the navigation entry for the book module in the Docusaurus sidebar.

**Attributes**:
- **`label` (string)**: The displayed name of the category in the sidebar (e.g., "ROS 2: The Robotic Nervous System").
- **`position` (integer, optional)**: The sort order of the category in the sidebar.

**Relationships**:
- Contains a list of `Chapter` entities, ordered sequentially.

---

### Relationships

```
Sidebar Category (1) --contains--> Chapters (3)
    |
    +-- Chapter 1 (1) --contains--> Code Examples (*)
    |
    +-- Chapter 2 (1) --contains--> Code Examples (*)
    |
    +-- Chapter 3 (1) --contains--> Code Examples (*)
```
