# 🚀 SCM Lab Test 1: Team Member Step-by-Step Action Guide
**System:** Student Information Management System (SIMS)  
**Target:** Group Practical (Teams of 4 to 6 Students)  
**Total Marks:** 15 Marks | **Deadline:** Before 28 October  

> **Notice:** Every team member must make an identifiable contribution using their **own personal GitHub/GitLab account** and their **own feature branch named with their Registration Number**.

---

## 📑 Table of Contents
1. [General Setup for All Members](#1-general-setup-for-all-members)
2. [Task Allocation Summary](#2-task-allocation-summary)
3. [Member A Action Guide (Registration Form)](#3-member-a-action-guide-registration-form)
4. [Member B Action Guide (Records Table)](#4-member-b-action-guide-records-table)
5. [Member C Action Guide (Table CSS Styling)](#5-member-c-action-guide-table-css-styling)
6. [Member D Action Guide (Form CSS Styling)](#6-member-d-action-guide-form-css-styling)
7. [Member E Action Guide (Team Leader & Coordinator)](#7-member-e-action-guide-team-leader--coordinator)
8. [Member F Action Guide (6th Member – QA & README)](#8-member-f-action-guide-6th-member--qa--readme)
9. [Question 4: Step-by-Step Merge Conflict Walkthrough](#9-question-4-step-by-step-merge-conflict-walkthrough)
10. [Question 5: Verification Commands & Lab Demonstration](#10-question-5-verification-commands--lab-demonstration)

---

## 1. General Setup for All Members

Before starting your individual task, run these commands in your Git terminal / command prompt.

### Step 1: Configure Git Identity (Matches your GitHub account)
```bash
git config --global user.name "Your Full Name"
git config --global user.email "your-github-registered-email@example.com"
```
*Verify with:*
```bash
git config user.name
git config user.email
```

### Step 2: Clone the Team Repository
```bash
git clone https://github.com/yadaklinus/Group1_Management_System.git
cd Group1_Management_System
```

### Step 3: Verify the Remote Connection
```bash
git remote -v
git status
```

---

## 2. Task Allocation Summary

| Role | Student Name | Matric / Reg Number | Assigned Feature | Target Branch Name |
| :--- | :--- | :--- | :--- | :--- |
| **Member A** | Team Member A | `NEU/23/24/SEN/00492` | Student Registration Form | `feature/student-registration-NEU/23/24/SEN/00492` |
| **Member B** | Team Member B | `NEU/23/24/SEN/00547` | Student Records Table | `feature/student-records-table-NEU/23/24/SEN/00547` |
| **Member C** | Team Member C | `NEU/23/24/SEN/00409` | Table CSS Styling | `feature/table-styling-NEU/23/24/SEN/00409` |
| **Member D** | Team Member D | `NEU/23/24/SEN/00577` | Form CSS Styling | `feature/form-styling-NEU/23/24/SEN/00577` |
| **Member E** | Team Leader | `NEU/23/24/SEN/00442` | Docs, PR Review & Integration | `feature/project-docs-NEU/23/24/SEN/00442` |
| **Member F** | QA & Verification | `NEU/23/24/SEN/00588` | QA, Testing & Checklist | `feature/qa-docs-NEU/23/24/SEN/00588` |

---

## 3. Member A Action Guide (Registration Form)
**Assigned Task:** Develop a student registration form containing the student name, matriculation number, and programme.

### Workflow Commands:
1. Make sure you are on `main` and up to date:
   ```bash
   git switch main
   git pull origin main
   ```
2. Create and switch to your personal feature branch using your **Registration Number**:
   ```bash
   git switch -c feature/student-registration-NEU/23/24/SEN/00492
   ```
3. **Work on the feature:**
   - Open `index.html` and inspect `#registration-section`. Ensure student name, matriculation number, and programme dropdown inputs exist.
   - Open `script.js` and verify/enhance `validateRegistrationForm()` and the form submission event listener.
4. Stage and commit your changes with a meaningful commit message:
   ```bash
   git add index.html script.js
   git commit -m "feat(form): Implement student registration form with name, matric number, and programme fields"
   ```
5. Push your feature branch to GitHub:
   ```bash
   git push -u origin feature/student-registration-NEU/23/24/SEN/00492
   ```
6. **Open a Pull Request on GitHub:**
   - Go to your repository on GitHub: `https://github.com/yadaklinus/Group1_Management_System`
   - Click **Compare & pull request**.
   - Set base: `main` ← compare: `feature/student-registration-NEU/23/24/SEN/00492`.
   - Title: `feat: Add student registration form (Member A - NEU/23/24/SEN/00492)`.
   - Description: Briefly describe the form fields added and form validation implemented.
   - Assign Team Leader (Member E) as reviewer.

---

## 4. Member B Action Guide (Records Table)
**Assigned Task:** Develop a table for displaying student records.

### Workflow Commands:
1. Ensure your local `main` branch is synchronized:
   ```bash
   git switch main
   git pull origin main
   ```
2. Create your personal feature branch using your **Registration Number**:
   ```bash
   git switch -c feature/student-records-table-NEU/23/24/SEN/00547
   ```
3. **Work on the feature:**
   - Open `index.html` and inspect `#records-section`. Verify the `<table>` element headers: `#`, `Matriculation No.`, `Full Name`, `Programme`, `Level`, `Date Added`, and `Actions`.
   - Open `script.js` and verify/enhance `renderTable()`, search filtering, and record deletion.
4. Stage and commit your changes:
   ```bash
   git add index.html script.js
   git commit -m "feat(table): Implement student records table with dynamic directory rendering and search filter"
   ```
5. Push your branch to GitHub:
   ```bash
   git push -u origin feature/student-records-table-NEU/23/24/SEN/00547
   ```
6. **Open a Pull Request:**
   - Go to GitHub (`https://github.com/yadaklinus/Group1_Management_System`) and open PR to `main`.
   - Title: `feat: Implement student records table (Member B - NEU/23/24/SEN/00547)`.
   - Request review from Team Leader.

---

## 5. Member C Action Guide (Table CSS Styling)
**Assigned Task:** Add CSS or Bootstrap styling to the student records table.

### Workflow Commands:
1. Ensure your local `main` branch is up to date:
   ```bash
   git switch main
   git pull origin main
   ```
2. Create your personal feature branch using your **Registration Number**:
   ```bash
   git switch -c feature/table-styling-NEU/23/24/SEN/00409
   ```
3. **Work on the feature:**
   - Open `style.css` and locate `/* 7. MEMBER C FEATURE: TABLE STYLING */`.
   - Customize or refine table styles (alternating row colors, hover states, programme pill badges like `.prog-cs`, `.prog-se`, responsive scrolling `.table-responsive`).
4. Stage and commit your changes:
   ```bash
   git add style.css
   git commit -m "style(table): Add glassmorphism styling, hover states, and programme badges for records table"
   ```
5. Push your branch to GitHub:
   ```bash
   git push -u origin feature/table-styling-NEU/23/24/SEN/00409
   ```
6. **Open a Pull Request:**
   - Title: `style: Add modern CSS styling to student records table (Member C - NEU/23/24/SEN/00409)`.
   - Request review from Team Leader.

---

## 6. Member D Action Guide (Form CSS Styling)
**Assigned Task:** Add CSS or Bootstrap styling to the student registration form.

### Workflow Commands:
1. Ensure your local `main` branch is up to date:
   ```bash
   git switch main
   git pull origin main
   ```
2. Create your personal feature branch using your **Registration Number**:
   ```bash
   git switch -c feature/form-styling-NEU/23/24/SEN/00577
   ```
3. **Work on the feature:**
   - Open `style.css` and locate `/* 6. MEMBER D FEATURE: FORM STYLING */`.
   - Customize form container layout, input focus rings, floating borders, label spacing, error text styling, and button gradient hover effects.
4. Stage and commit your changes:
   ```bash
   git add style.css
   git commit -m "style(form): Add responsive styling, focus glow animations, and custom select dropdown for registration form"
   ```
5. Push your branch to GitHub:
   ```bash
   git push -u origin feature/form-styling-NEU/23/24/SEN/00577
   ```
6. **Open a Pull Request:**
   - Title: `style: Add modern CSS styling to registration form (Member D - NEU/23/24/SEN/00577)`.
   - Request review from Team Leader.

---

## 7. Member E Action Guide (Team Leader & Coordinator)
**Assigned Task:** Improve project documentation, review team contributions, and coordinate integration.

### Responsibilities & Commands:
1. **Initial Repository Setup (Question 1 & 2):**
   - Create repo on GitHub: `yadaklinus/Group1_Management_System`.
   - Add all members & course lecturer under **Settings > Collaborators**.
   - Add remote origin and push the initial codebase:
     ```bash
     git remote add origin https://github.com/yadaklinus/Group1_Management_System.git
     git push -u origin main
     ```
2. **Reviewing Pull Requests (Question 3d):**
   - On GitHub, go to the **Pull requests** tab.
   - For each member's PR:
     1. Click **Files changed** to review changes.
     2. Leave review comments (e.g. *"Great work on the form validation! Approved."*).
     3. Click **Review changes > Approve**.
     4. Click **Merge pull request > Confirm merge**.
3. **Documentation Feature Branch:**
   ```bash
   git switch -c feature/project-docs-NEU/23/24/SEN/00442
   ```
   - Update `README.md` with team members' actual names, matric numbers, and final GitHub repository URL.
   - Stage and commit:
     ```bash
     git add README.md CHECKLIST.md MEMBER_ACTION_GUIDE.md
     git commit -m "docs: Update team contribution matrix, checklist, and verification guide"
     git push -u origin feature/project-docs-NEU/23/24/SEN/00442
     ```
   - Create and merge PR into `main`.
4. **Coordinate Merge Conflict Demonstration (Question 4).**

---

## 8. Member F Action Guide (6th Member – QA & README)
*(If your group has 6 members)*
**Assigned Task:** Update `README.md`, perform cross-browser Quality Assurance, and ensure all submission checklist requirements are satisfied.

### Workflow Commands:
1. Create branch:
   ```bash
   git switch -c feature/qa-docs-NEU/23/24/SEN/00588
   ```
2. Test all interactions in Google Chrome, Microsoft Edge, and Firefox.
3. Update `README.md` and `CHECKLIST.md` with test results and QA sign-off notes.
4. Stage, commit, and push:
   ```bash
   git add README.md CHECKLIST.md
   git commit -m "docs(qa): Verify cross-browser compatibility and complete lab submission checklist"
   git push -u origin feature/qa-docs-NEU/23/24/SEN/00588
   ```
5. Open PR to `main` and request review.

---

## 9. Question 4: Step-by-Step Merge Conflict Walkthrough
*This is required for 3 marks. Follow these steps exactly to generate, record, and resolve the conflict.*

### Scenario:
Two team members modify the exact same line of code in `index.html` (or `style.css`) concurrently on separate branches.

### Step 1: Member A creates a change and merges it to `main`
1. Member A switches to `main`:
   ```bash
   git switch main
   ```
2. Member A edits line 40 in `index.html` (e.g. changes button text):
   ```html
   <button class="btn btn-primary" id="btn-submit-registration">Submit Registration Now</button>
   ```
3. Commit and push directly or via PR to `main`:
   ```bash
   git add index.html
   git commit -m "update: Change registration submit button text to Submit Registration Now"
   git push origin main
   ```

### Step 2: Member B makes a competing change on the same line
1. Member B (before pulling Member A's update) creates a feature branch from previous commit:
   ```bash
   git switch -c feature/custom-button-label
   ```
2. Member B edits the exact same line in `index.html`:
   ```html
   <button class="btn btn-primary" id="btn-submit-registration">Enroll New Student Record</button>
   ```
3. Commit the change on the feature branch:
   ```bash
   git add index.html
   git commit -m "update: Change registration submit button text to Enroll New Student Record"
   ```

### Step 3: Trigger the Merge Conflict
1. Member B attempts to pull or merge `main` into their branch:
   ```bash
   git pull origin main
   # OR: git merge main
   ```
2. Git displays the conflict notification:
   ```text
   Auto-merging index.html
   CONFLICT (content): Merge conflict in index.html
   Automatic merge failed; fix conflicts and then commit the result.
   ```

### Step 4: Inspect the Conflict Markers
Open `index.html`. You will see Git's conflict markers:
```html
<<<<<<< HEAD
<button class="btn btn-primary" id="btn-submit-registration">Enroll New Student Record</button>
=======
<button class="btn btn-primary" id="btn-submit-registration">Submit Registration Now</button>
>>>>>>> main
```
📸 **EVIDENCE CAPTURE:** Take a screenshot of these conflict markers inside your code editor now for your submission evidence!

### Step 5: Resolve the Conflict
1. Discuss and agree upon the final text with your teammate.
2. Replace both blocks and delete `<<<<<<< HEAD`, `=======`, and `>>>>>>> main`.
3. Agreed final version:
   ```html
   <button class="btn btn-primary" id="btn-submit-registration">
     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
     Register Student
   </button>
   ```

### Step 6: Commit and Push the Resolution
```bash
git add index.html
git commit -m "Resolve merge conflict between registration form submit button text"
git push origin main
```
📸 **EVIDENCE CAPTURE:** Run `git log -n 1` or view the commit on GitHub and take a screenshot showing the conflict resolution commit.

---

## 10. Question 5: Verification Commands & Lab Demonstration
During your lab demonstration, the lecturer will ask your team to execute the following commands. Practice them beforehand:

### 1. `git status`
Shows that your working tree is clean and all files are tracked and committed.
```bash
git status
```
*Expected Output:* `nothing to commit, working tree clean`

### 2. `git log`
Shows the commit history, authors, timestamps, and merge commits.
```bash
git log --graph --oneline --all --decorate
```
*Expected Output:* A clear visual ASCII graph showing feature branches branching out and merging back into `main`.

### 3. `git branch`
Lists all branches to prove each member had a branch with their matriculation number.
```bash
git branch -a
```
*Expected Output:* Lists local and remote branches for Member A, B, C, D, E.

### 4. `git remote -v`
Displays the remote repository URL to prove collaboration on GitHub/GitLab.
```bash
git remote -v
```
*Expected Output:* `origin https://github.com/... (fetch)` and `(push)`

---

## 🎓 Written Answers for Lab Evaluation

### Question 4.a: Define a merge conflict and state one possible cause. (1 Mark)
- **Definition:** A merge conflict occurs when Git cannot automatically reconcile differences between two competing branches because the exact same lines of a file have been modified in conflicting ways, or a file has been deleted in one branch and modified in another.
- **Cause:** Two developers concurrently modifying and committing changes to the same lines of code in `index.html` or `style.css` on different branches and attempting to merge both into the `main` branch.

### Question 5.c: State two benefits of using Git for collaborative software development. (1 Mark)
1. **Isolated Branching and Concurrent Development:** Git allows team members to develop independent features simultaneously on isolated branches without disrupting or destabilizing the production codebase (`main`). Features can be peer-reviewed and tested before integration.
2. **Comprehensive Audit History and Reversibility:** Git maintains a permanent, cryptographically secured commit history with timestamps and author signatures. If an issue arises, teams can pinpoint precisely when and where a regression was introduced and safely revert to a prior stable state.
