# 📋 SCM Lab Test 1: Collaborative Software Development Checklist
**Course:** Software Configuration and Management  
**Assessment Type:** Group Practical (Teams of 4–6 Students)  
**Total Marks:** 15 Marks  
**Submission Deadline:** Before 28 October  
**Project:** Student Information Management System (SIMS)

---

## 🎯 Overall Progress Dashboard

| Section | Area | Marks | Status |
| :--- | :--- | :---: | :---: |
| **Question 1** | Repository Creation & Team Setup | 2 | 🟡 Pending Remote Push & Collaborators |
| **Question 2** | Project Initialization & Version Control | 2 | 🟢 Ready / Initialized Locally |
| **Question 3** | Collaborative Feature Development | 5 | 🟡 Ready for Member Branches & PRs |
| **Question 4** | Merge Conflict Resolution | 3 | 🟢 Documented & Simulation Ready |
| **Question 5** | Verification & Submission | 3 | 🟢 Commands & Report Template Ready |
| **TOTAL** | **Comprehensive Lab Assessment** | **15** | **In Progress** |

---

## 📝 Detailed Task Checklist

### Question 1: Repository Creation and Team Setup (2 Marks)
- [ ] **1.a Create Remote Repository (1.5 Marks)**
  - [ ] Team Leader creates GitHub/GitLab repository named `student-information-system-groupname` (e.g. `student-information-system-group1`).
  - [ ] Set repository visibility (Public or Private as specified by lecturer).
  - [ ] Add all team members as collaborators with write access under **Settings > Collaborators**.
  - [ ] Add the course lecturer as collaborator.
- [ ] **1.b Git Configuration on Each Member's Machine (0.5 Marks)**
  - [x] Configure Git global / local username: `git config user.name "<Your Full Name>"`
  - [x] Configure Git global / local email: `git config user.email "<your-github-email>"`
  - [ ] Each member clones the repository: `git clone <repo-url>`

---

### Question 2: Project Initialization and Version Control (2 Marks)
- [x] **2.a Create Project Structure (1 Mark)**
  - [x] `index.html` - Core semantic HTML structure (Form + Table)
  - [x] `style.css` - Custom modern CSS styling
  - [x] `script.js` - Student data handling & interactive logic
  - [x] `README.md` - Documentation and setup guide
- [x] **2.b Initial Commit & Remote Push (1 Mark)**
  - [x] Initialize local repository (`git init -b main`)
  - [x] Stage files (`git add .`)
  - [x] Commit with meaningful message: `git commit -m "Initialize student information system project group 1"`
  - [ ] Link to remote: `git remote add origin https://github.com/<owner>/student-information-system-groupname.git`
  - [ ] Push to main branch: `git push -u origin main`

---

### Question 3: Collaborative Feature Development (5 Marks)
*Rule: Each team member must work on a separate feature branch named using their Registration Number.*

- [ ] **3.a Branch Creation (1 Mark)**
  - [ ] **Member A:** `git switch -c feature/student-registration-NEU/23/24/SEN/00492`
  - [ ] **Member B:** `git switch -c feature/student-records-table-NEU/23/24/SEN/00547`
  - [ ] **Member C:** `git switch -c feature/table-styling-NEU/23/24/SEN/00409`
  - [ ] **Member D:** `git switch -c feature/form-styling-NEU/23/24/SEN/00577`
  - [ ] **Member E (Team Leader):** `git switch -c feature/project-docs-NEU/23/24/SEN/00442`
  - [ ] **Member F (QA & Verification):** `git switch -c feature/qa-docs-NEU/23/24/SEN/00588`
- [ ] **3.b Implementation & Meaningful Commits (2 Marks)**
  - [ ] Member A commits registration form markup/validation.
  - [ ] Member B commits student records table display logic.
  - [ ] Member C commits table CSS styles, hover effects, and responsive layout.
  - [ ] Member D commits registration form CSS styling, input focus effects, buttons.
  - [ ] Member E commits project documentation, integration notes, and review logs.
  - [ ] Member F commits QA verification and cross-browser test notes.
- [ ] **3.c Push Feature Branches to GitHub (1 Mark)**
  - [ ] Member A pushed branch to remote: `git push -u origin feature/student-registration-NEU/23/24/SEN/00492`
  - [ ] Member B pushed branch to remote: `git push -u origin feature/student-records-table-NEU/23/24/SEN/00547`
  - [ ] Member C pushed branch to remote: `git push -u origin feature/table-styling-NEU/23/24/SEN/00409`
  - [ ] Member D pushed branch to remote: `git push -u origin feature/form-styling-NEU/23/24/SEN/00577`
  - [ ] Member E pushed branch to remote: `git push -u origin feature/project-docs-NEU/23/24/SEN/00442`
  - [ ] Member F pushed branch to remote: `git push -u origin feature/qa-docs-NEU/23/24/SEN/00588`
- [ ] **3.d Pull Requests & Code Reviews (1 Mark)**
  - [ ] Member A opens PR to `main` with detailed description.
  - [ ] Member B opens PR to `main` with detailed description.
  - [ ] Member C opens PR to `main` with detailed description.
  - [ ] Member D opens PR to `main` with detailed description.
  - [ ] Team members perform code review and leave constructive comments.
  - [ ] Team Leader approves and merges PRs into `main`.

---

### Question 4: Merge Conflict Resolution (3 Marks)
- [x] **4.a Define Merge Conflict & State One Cause (1 Mark)**
  - [x] *Definition:* A merge conflict occurs when Git cannot automatically reconcile differences between two competing branches because the same lines in a file were modified differently, or a file was deleted in one branch and edited in another.
  - [x] *Possible Cause:* Two developers modifying the same line(s) of code in `index.html` or `style.css` concurrently on separate branches and both attempting to merge into `main`.
- [ ] **4.b Intentional Conflict Generation & Resolution (1 Mark)**
  - [ ] Branch 1 (e.g. Member A) edits a specific section (e.g. Form title or Table container class) and merges into `main`.
  - [ ] Branch 2 (e.g. Member B / C) edits the exact same line on their branch.
  - [ ] Git reports conflict when merging Branch 2: `CONFLICT (content): Merge conflict in index.html`.
  - [ ] Inspect conflict markers: `<<<<<<< HEAD`, `=======`, `>>>>>>>`.
  - [ ] Review competing changes and retain the combined/correct code.
  - [ ] Remove all conflict markers.
- [ ] **4.c Commit Resolution & Push (1 Mark)**
  - [ ] Stage resolved file: `git add <conflicted-file>`
  - [ ] Commit conflict resolution: `git commit -m "Resolve merge conflict between registration form and table layout"`
  - [ ] Push resolved branch / merged `main` to remote repository: `git push origin main`
  - [ ] Take screenshots of conflict markers and resolution for lab demonstration evidence.

---

### Question 5: Verification and Submission (3 Marks)
- [ ] **5.a Command Demonstrations (1 Mark)**
  - [ ] Demonstrate `git status` (clean working tree).
  - [ ] Demonstrate `git log` / `git log --graph --oneline --all` (shows branching, commits, merges).
  - [ ] Demonstrate `git branch` (shows local and remote branches).
  - [ ] Demonstrate `git remote -v` (shows origin fetch & push URLs).
- [ ] **5.b Working Application Demonstration (1 Mark)**
  - [ ] Register new student via the form (Name, Matric No, Programme, Level).
  - [ ] Student appears immediately in the table.
  - [ ] Search / filter records functions smoothly.
  - [ ] Responsive, modern styling renders properly without visual glitches.
  - [ ] GitHub repository URL is ready and accessible.
- [x] **5.c Member Contributions & Two Benefits of Git (1 Mark)**
  - [x] Complete member contribution table filled with individual names, reg numbers, and commits.
  - [x] State two benefits of Git:
    1. **Non-destructive Concurrent Collaboration & Branching:** Team members can work independently on isolated features without overwriting each other's code.
    2. **Complete Audit History & Reversibility:** Git maintains a permanent snapshot history of every change, allowing teams to trace who made what change and rollback errors easily.

---

## 📦 Final Submission Evidence Checklist

| # | Submission Item | Status | Location / Artifact |
| :---: | :--- | :---: | :--- |
| 1 | GitHub/GitLab Repository URL | ⏳ Pending | `https://github.com/<owner>/student-information-system-<group>` |
| 2 | Completed Working Application | ✅ Complete | [index.html](file:///c:/Users/Code%20Git/Desktop/gitAssignment/index.html), [style.css](file:///c:/Users/Code%20Git/Desktop/gitAssignment/style.css), [script.js](file:///c:/Users/Code%20Git/Desktop/gitAssignment/script.js) |
| 3 | Evidence of Branches, Commits & PRs | ⏳ In Progress | Screenshots & GitHub PR History |
| 4 | Evidence of Merge Conflict Resolution | ⏳ In Progress | Screenshots of conflict markers (`<<<<<<<`) & resolution commit |
| 5 | Team Contribution Report | ✅ Template Ready | [README.md](file:///c:/Users/Code%20Git/Desktop/gitAssignment/README.md) & [MEMBER_ACTION_GUIDE.md](file:///c:/Users/Code%20Git/Desktop/gitAssignment/MEMBER_ACTION_GUIDE.md) |
