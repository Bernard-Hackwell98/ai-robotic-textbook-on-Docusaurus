# Quickstart Guide for Content Contributors

This guide provides instructions for setting up the local development environment and contributing content to the Docusaurus site.

## 1. Prerequisites

- **Git**: For version control.
- **Node.js**: `v18.x` or later.
- **npm** (or **yarn**): For package management.

## 2. Local Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install Dependencies**:
    This command will install Docusaurus and all other necessary packages.
    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    This command builds the site and starts a local server, usually at `http://localhost:3000`. The site will automatically reload when you make changes to the content.
    ```bash
    npm run start
    ```

## 3. Contribution Workflow

1.  **Create a Branch**:
    Always create a new feature branch for your work. Follow the naming convention `###-short-description`.
    ```bash
    git checkout -b 002-new-chapter-draft
    ```

2.  **Add or Edit Content**:
    - Navigate to the `docs/ros2-book/` directory.
    - Add a new Markdown file (e.g., `04-advanced-topics.md`) or edit an existing one.
    - Ensure your content follows the structure and style of the existing chapters.

3.  **Validate Locally**:
    - With the development server running (`npm run start`), open your browser to `http://localhost:3000`.
    - Navigate to your new or updated chapter and verify that it renders correctly.
    - Check for broken links, formatting issues, and code snippet highlighting.

4.  **Run Build Command**:
    Before committing, ensure the entire site builds successfully without errors.
    ```bash
    npm run build
    ```
    This command creates a static build in the `build/` directory.

5.  **Commit and Push**:
    - Stage your changes: `git add .`
    - Commit with a descriptive message: `git commit -m "feat(docs): draft chapter on advanced ROS 2 topics"`
    - Push to the remote repository: `git push origin 002-new-chapter-draft`

6.  **Create a Pull Request**:
    - Open a pull request on GitHub from your feature branch to the `main` branch.
    - The PR will be reviewed and merged.
