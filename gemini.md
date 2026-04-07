# Zyne POS - Project Brief

**Zyne POS** is a high-performance Point of Sale (POS) application designed for retail and service environments. It will feature a modern, responsive user interface for cashiers and a robust backend to handle core POS functionalities like sales transactions, user session management, VAT calculation, and staff management. The goal is to create a stable, scalable, and maintainable system suitable for deployment to multiple clients.

## 1. Technical Stack

- **Backend:** Node.js with the NestJS framework.
- **Frontend:** React.
- **Database:** PostgreSQL (`zyne_pos`).

## 2. Key Reference Projects

- **Logic Source:** `reference/WePosV3` (A PHP CodeIgniter project). Used to understand standard POS business logic.
- **Style & Tooling Source:** `reference/psa-meeting` (A Node.js/Express project). Used as a baseline for coding style and structure.

## 3. Core Instructions & Workflow

### General
- **Proactive Decisions:** The agent is authorized to make expert decisions (e.g., adding recommended fields to a database model) but must inform the user about the decision and the reasoning behind it.

### Documentation
- **Logic:** For each new module, a corresponding markdown file documenting its logic and architecture must be created in the `.gemini/logic/` directory. (e.g., `.gemini/logic/user_auth_module.md`).
- **Agent Brief:** This `gemini.md` file must be kept up-to-date with any major changes to the project plan or workflow.

### Git Workflow

1.  **Branching:** All new work must be done on a feature branch created from the `dev` branch.
2.  **Branch Naming Convention:**
    -   Main development branch: `dev`
    -   Agent's branches: `dev-cli-[feature-name]` (e.g., `dev-cli-user`)
    -   User's (Suhail's) branches: `dev-s-[feature-name]` (e.g., `dev-s-user`)
    -   Use `-client` or `-fe` suffix for frontend branches (e.g., `dev-cli-user-client`).
3.  **Push, Don't Merge:** After completing a feature, the agent will `git push` the feature branch to the remote GitHub repository.
4.  **User-Led Merge:** The user (suhailphp) is responsible for reviewing and merging all pull requests on GitHub.
5.  **Pull Before New Work:** Before creating a new feature branch, the agent must first `git checkout dev` and `git pull` to get the latest changes.
