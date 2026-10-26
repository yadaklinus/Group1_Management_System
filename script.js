/**
 * ============================================================================
 * STUDENT INFORMATION MANAGEMENT SYSTEM (SIMS)
 * Collaborative JavaScript Controller | SCM Lab Test 1
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. DEFAULT DATASET & STORAGE KEYS
// ----------------------------------------------------------------------------
const STORAGE_KEY = 'SIMS_STUDENTS_DATA_V1';

const INITIAL_STUDENTS = [
  {
    id: 'std-1',
    matricNumber: 'NEU/22/23/CSC/2004',
    name: 'Ada Lovelace',
    programme: 'Computer Science',
    level: '300 Level',
    email: 'ada.lovelace@university.edu',
    createdAt: '2026-10-20'
  },
  {
    id: 'std-2',
    matricNumber: 'NEU/22/23/SWE/1012',
    name: 'Alan Turing',
    programme: 'Software Engineering',
    level: '400 Level',
    email: 'alan.turing@university.edu',
    createdAt: '2026-10-21'
  },
  {
    id: 'std-3',
    matricNumber: 'NEU/23/24/CYS/3045',
    name: 'Grace Hopper',
    programme: 'Cyber Security',
    level: '200 Level',
    email: 'grace.hopper@university.edu',
    createdAt: '2026-10-24'
  },
  {
    id: 'std-4',
    matricNumber: 'NEU/24/25/IFT/4089',
    name: 'Claude Shannon',
    programme: 'Information Technology',
    level: '100 Level',
    email: 'claude.shannon@university.edu',
    createdAt: '2026-10-25'
  }
];

// In-memory state
let students = [];

// ----------------------------------------------------------------------------
// 2. DOM ELEMENT REFERENCES
// ----------------------------------------------------------------------------
// Form Elements (Member A & D)
const registrationForm = document.getElementById('student-registration-form');
const nameInput = document.getElementById('student-name');
const matricInput = document.getElementById('matric-number');
const programmeSelect = document.getElementById('programme');
const levelSelect = document.getElementById('student-level');
const emailInput = document.getElementById('student-email');
const nameError = document.getElementById('name-error');
const matricError = document.getElementById('matric-error');
const programmeError = document.getElementById('programme-error');

// Table Elements (Member B & C)
const tableBody = document.getElementById('students-table-body');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const filterProgramme = document.getElementById('filter-programme');
const resetSampleBtn = document.getElementById('btn-reset-sample');

// Metrics (Integrated by Member E)
const totalStudentsEl = document.getElementById('total-students-count');
const totalProgrammesEl = document.getElementById('total-programmes-count');
const toastContainer = document.getElementById('toast-container');

// Modal Elements (Question 4 Demo)
const conflictBtn = document.getElementById('quick-demo-conflict-btn');
const conflictModal = document.getElementById('conflict-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalBackdrop = document.getElementById('modal-backdrop');

// ----------------------------------------------------------------------------
// 3. INITIALIZATION & STORAGE HELPERS
// ----------------------------------------------------------------------------
function loadStudents() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData) {
      students = JSON.parse(rawData);
    } else {
      students = [...INITIAL_STUDENTS];
      saveStudents();
    }
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
    students = [...INITIAL_STUDENTS];
  }
  updateMetrics();
  renderTable();
}

function saveStudents() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}

function updateMetrics() {
  if (totalStudentsEl) {
    totalStudentsEl.textContent = students.length;
  }
  if (totalProgrammesEl) {
    const uniqueProgs = new Set(students.map(s => s.programme));
    totalProgrammesEl.textContent = uniqueProgs.size;
  }
}

// ----------------------------------------------------------------------------
// 4. MEMBER B FEATURE: RENDER STUDENT RECORDS TABLE
// ----------------------------------------------------------------------------
function getProgrammeBadgeClass(programme) {
  switch (programme) {
    case 'Computer Science': return 'prog-cs';
    case 'Software Engineering': return 'prog-se';
    case 'Information Technology': return 'prog-it';
    case 'Cyber Security': return 'prog-cyber';
    default: return 'prog-cis';
  }
}

function renderTable() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedProg = filterProgramme.value;

  // Filter students
  const filtered = students.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm) ||
      student.matricNumber.toLowerCase().includes(searchTerm) ||
      (student.email && student.email.toLowerCase().includes(searchTerm));

    const matchesProg = selectedProg === 'ALL' || student.programme === selectedProg;

    return matchesSearch && matchesProg;
  });

  tableBody.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');

    filtered.forEach((student, index) => {
      const row = document.createElement('tr');
      const badgeClass = getProgrammeBadgeClass(student.programme);

      row.innerHTML = `
        <td style="color: var(--text-muted); font-weight: 500;">${index + 1}</td>
        <td class="matric-cell">${escapeHtml(student.matricNumber)}</td>
        <td class="student-name-cell">
          ${escapeHtml(student.name)}
          ${student.email ? `<span class="student-email-sub">${escapeHtml(student.email)}</span>` : ''}
        </td>
        <td>
          <span class="programme-pill ${badgeClass}">${escapeHtml(student.programme)}</span>
        </td>
        <td>
          <span class="level-tag">${escapeHtml(student.level)}</span>
        </td>
        <td style="color: var(--text-muted); font-size: 0.8rem;">
          ${student.createdAt || 'Recent'}
        </td>
        <td style="text-align: center;">
          <button class="btn-danger-icon" onclick="deleteStudentRecord('${student.id}')" title="Delete record">
            Delete
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
}

// ----------------------------------------------------------------------------
// 5. MEMBER A FEATURE: FORM VALIDATION & REGISTRATION
// ----------------------------------------------------------------------------
function validateRegistrationForm() {
  let isValid = true;

  // Clear previous errors
  nameError.textContent = '';
  matricError.textContent = '';
  programmeError.textContent = '';

  const nameVal = nameInput.value.trim();
  const matricVal = matricInput.value.trim();
  const progVal = programmeSelect.value;

  if (!nameVal) {
    nameError.textContent = 'Please enter the student full name.';
    isValid = false;
  } else if (nameVal.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters.';
    isValid = false;
  }

  if (!matricVal) {
    matricError.textContent = 'Please enter the matriculation number.';
    isValid = false;
  } else {
    // Check for duplicate matriculation number
    const isDuplicate = students.some(
      s => s.matricNumber.trim().toUpperCase() === matricVal.toUpperCase()
    );
    if (isDuplicate) {
      matricError.textContent = 'This matriculation number is already registered.';
      isValid = false;
    }
  }

  if (!progVal) {
    programmeError.textContent = 'Please select an academic programme.';
    isValid = false;
  }

  return isValid;
}

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateRegistrationForm()) {
    showToast('Please fix the errors in the form.', 'error');
    return;
  }

  const newStudent = {
    id: 'std-' + Date.now(),
    name: nameInput.value.trim(),
    matricNumber: matricInput.value.trim().toUpperCase(),
    programme: programmeSelect.value,
    level: levelSelect.value,
    email: emailInput.value.trim(),
    createdAt: new Date().toISOString().split('T')[0]
  };

  // Add to top of list
  students.unshift(newStudent);
  saveStudents();
  updateMetrics();
  renderTable();

  // Reset form
  registrationForm.reset();
  showToast(`Student ${newStudent.name} registered successfully!`, 'success');
  nameInput.focus();
});

// ----------------------------------------------------------------------------
// 6. RECORD DELETION & RESET OPERATIONS
// ----------------------------------------------------------------------------
window.deleteStudentRecord = function(studentId) {
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  const confirmDelete = confirm(`Are you sure you want to delete ${student.name} (${student.matricNumber})?`);
  if (!confirmDelete) return;

  students = students.filter(s => s.id !== studentId);
  saveStudents();
  updateMetrics();
  renderTable();
  showToast(`Record for ${student.name} deleted.`, 'success');
};

resetSampleBtn.addEventListener('click', () => {
  if (confirm('Reset table data to default lab sample records?')) {
    students = [...INITIAL_STUDENTS];
    saveStudents();
    updateMetrics();
    renderTable();
    showToast('Default sample records restored.', 'success');
  }
});

// Real-time search and filter listeners
searchInput.addEventListener('input', renderTable);
filterProgramme.addEventListener('change', renderTable);

// ----------------------------------------------------------------------------
// 7. TOAST NOTIFICATION UTILITY
// ----------------------------------------------------------------------------
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : '⚠️'}</span>
    <div>${escapeHtml(message)}</div>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ----------------------------------------------------------------------------
// 8. QUESTION 4: CONFLICT DEMONSTRATION MODAL LOGIC
// ----------------------------------------------------------------------------
function openConflictModal() {
  conflictModal.classList.remove('hidden');
}

function closeConflictModal() {
  conflictModal.classList.add('hidden');
}

if (conflictBtn) conflictBtn.addEventListener('click', openConflictModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeConflictModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeConflictModal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !conflictModal.classList.contains('hidden')) {
    closeConflictModal();
  }
});

// Helper XSS sanitizer
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', loadStudents);
