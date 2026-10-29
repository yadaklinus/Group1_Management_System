# Student Information Management System (SIMS)
**Course:** Software Configuration and Management  
**Assessment:** Lab Test 1 – Collaborative Software Development Using Git, GitHub, and GitLab  
**Total Marks:** 15 Marks  
**Submission Deadline:** Before 28 October  

---

## 📌 1. Project Overview
The **Student Information Management System (SIMS)** is a lightweight, responsive web application built collaboratively by our team to manage student records. The system enables academic administrators to:
1. **Register Students:** Capture and validate essential student details including Full Name, Matriculation/Registration Number, Academic Programme, Level, and Institutional Email.
2. **View Student Records:** Display verified academic records in a responsive, styled directory with real-time search filtering, programme sorting, and record deletion.

---

## 🗂️ 2. Repository File Structure
```text
Group1_Management_System/
├── .gitignore                  # Git ignore rules (OS files, IDE configs, temp logs)
├── index.html                  # Core semantic UI structure (Form + Table + Modal)
├── style.css                   # Custom CSS styling (Tokens, Glassmorphism, Theme)
├── script.js                   # Client-side dynamic logic, validation & storage
├── README.md                   # Project documentation & contribution report
└── MEMBER_ACTION_GUIDE.md      # Step-by-step instructions for each group member
```

---

## 👥 3. Team Member Task Assignments & Contribution Report

| Member | Assigned Task | Branch Name (`feature/<task>-<REG_NO>`) | Contribution Made |
| :--- | :--- | :--- | :--- |
| **Member A** | Student Registration Form | `feature/student-registration-NEU/23/24/SEN/00492` | Implemented registration form inputs (Name, Matric No, Programme) and JavaScript validation. |
| **Member B** | Student Records Table | `feature/student-records-table-NEU/23/24/SEN/00547` | Developed responsive records table, dynamic rendering, and search filter integration. |
| **Member C** | Table CSS Styling | `feature/table-styling-NEU/23/24/SEN/00409` | Designed table glassmorphism styling, hover rows, status badges, and mobile responsiveness. |
| **Member D** | Form CSS Styling | `feature/form-styling-NEU/23/24/SEN/00442` | Styled input fields, focus glow rings, custom select arrows, error text, and action buttons. |
| **Member E (Team Leader)** | Docs, Coordination & Merge Review | `feature/project-docs-NEU/23/24/SEN/00577` | Project scaffolding, README documentation, PR code reviews, and conflict resolution integration. |
| **Member F (QA & Verification)** | QA, Testing & Verification | `feature/qa-docs-NEU/23/24/SEN/00588` | Cross-browser testing, verification of submission checklist, and documentation updates. |

---

## 🛠️ 4. Local Setup and Usage Instructions

### Prerequisites
- Git installed on your local machine (`git --version`)
- Any modern web browser (Google Chrome, Firefox, Microsoft Edge, Brave)

### Cloning and Running
1. Clone the repository to your local directory:
   ```bash
   git clone https://github.com/yadaklinus/Group1_Management_System.git
   cd Group1_Management_System
   ```
2. Configure your Git credentials:
   ```bash
   git config user.name "Your Full Name"
   git config user.email "your.email@university.edu"
   ```
3. Open `index.html` in your web browser:
   - On Windows: `start index.html`
   - Or simply double-click `index.html` in your file explorer.

---

## ⚔️ 5. Question 4: Merge Conflict Resolution Demonstration

### a. Definition and Cause of a Merge Conflict (1 Mark)
- **Definition:** A merge conflict occurs when Git is unable to automatically integrate changes from two different branches because both branches have modified the exact same lines of a file, or one branch modified a file that the other branch deleted.
- **Cause:** Two developers concurrently modifying the same section of `index.html` or `style.css` on their respective feature branches and attempting to merge both branches into `main` without synchronizing.

### b. Git Conflict Markers
When a conflict occurs during `git merge`, Git pauses the merge and inserts standard markers into the conflicted file:
```html
<<<<<<< HEAD
<!-- Content from current branch (main) -->
<button class="btn btn-primary" id="btn-submit-registration">Register Student</button>
=======
<!-- Content from incoming feature branch -->
<button class="btn btn-success-gradient" id="btn-add-record">Enroll New Candidate</button>
>>>>>>> feature/student-registration-NEU/23/24/SEN/00492
```

### c. Conflict Resolution Procedure
1. Inspect the conflicting file: `git status` reveals `both modified: index.html`.
2. Open the file in an editor (e.g. VS Code).
3. Review competing changes with team members and choose the unified final version.
4. Remove the Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
5. Stage the resolved file:
   ```bash
   git add index.html
   ```
6. Commit the conflict resolution:
   ```bash
   git commit -m "Resolve merge conflict between registration form button and layout styles"
   ```
7. Push the clean resolution to GitHub:
   ```bash
   git push origin main
   ```

---

## 🔍 6. Question 5: Verification Commands & Benefits of Git

### a. Key Git Verification Commands (1 Mark)
- `git status` — Displays the state of the working directory and staging area.
- `git log --graph --oneline --all` — Shows a visual timeline of commits, branches, and merges.
- `git branch -a` — Lists all local and remote tracking branches.
- `git remote -v` — Shows configured remote repository URLs for fetch and push operations.

### b. Two Key Benefits of Git for Collaborative Software Development (1 Mark)
1. **Isolated Concurrent Feature Development (Branching & Merging):** Git allows multiple developers to work on isolated feature branches simultaneously without corrupting the stable codebase (`main`). Changes are only incorporated after peer review via Pull Requests.
2. **Complete Version Traceability & Accountability:** Every commit records the author, timestamp, and cryptographic hash of changes made. If a bug or regression is introduced, developers can pinpoint the exact commit and revert safely without data loss.

---

## 📄 7. License & Academic Integrity
This repository is developed strictly for **SCM Lab Test 1** academic evaluation. All team contributions are tracked and verifiable through Git history and GitHub Pull Request logs.

---

## 🎖️ 8. Team Leader Project Sign-Off
- **Lead Coordinator:** `NEU/23/24/SEN/00577` (Member E)
- **Status:** Architecture Initialized, Clean Project Tree Configured, Collaboration Matrix Verified
- **Repository Health:** Clean working tree, modern responsive UI, branch protection & review workflow enforced.