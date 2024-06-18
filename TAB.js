document.addEventListener('DOMContentLoaded', function() {
    loadFields();
    updateSum();
    generateCalendar();
});

function addProfile() {
    const name = document.getElementById('profile-name').value;
    const status = document.getElementById('profile-status').value;
    const notes = document.getElementById('profile-notes').value;

    if (name === '' || notes === '') return;

    const table = document.getElementById('profile-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    
    const cellName = row.insertCell(0);
    const cellStatus = row.insertCell(1);
    const cellNotes = row.insertCell(2);
    const cellActions = row.insertCell(3);

    cellName.textContent = name;
    cellStatus.textContent = status;
    cellNotes.textContent = notes;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Smazat';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        table.deleteRow(row.rowIndex - 1);
        saveFields();
    };
    cellActions.appendChild(deleteButton);

    document.getElementById('profile-name').value = '';
    document.getElementById('profile-status').value = 'aktivní';
    document.getElementById('profile-notes').value = '';

    saveFields();
}

function addBudget() {
    const name = document.getElementById('project-name').value;
    const notes = document.getElementById('project-notes').value;
    const cost = document.getElementById('project-cost').value;
    const deadline = document.getElementById('project-deadline').value;

    if (name === '' || cost === '' || isNaN(parseFloat(cost))) return;

    const table = document.getElementById('budget-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    
    const cellName = row.insertCell(0);
    const cellNotes = row.insertCell(1);
    const cellCost = row.insertCell(2);
    const cellDeadline = row.insertCell(3);
    const cellActions = row.insertCell(4);

    cellName.textContent = name;
    cellNotes.textContent = notes;
    cellCost.textContent = parseFloat(cost).toFixed(2);
    cellDeadline.textContent = deadline;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Smazat';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        table.deleteRow(row.rowIndex - 1);
        saveFields();
    };
    cellActions.appendChild(deleteButton);

    document.getElementById('project-name').value = '';
    document.getElementById('project-notes').value = '';
    document.getElementById('project-cost').value = '';
    document.getElementById('project-deadline').value = '';

    updateSum();
    saveFields();
}

function updateSum() {
    const table = document.getElementById('budget-table').getElementsByTagName('tbody')[0];
    let sum = 0;

    for (let i = 0; i < table.rows.length; i++) {
        sum += parseFloat(table.rows[i].cells[2].textContent);
    }

    document.getElementById('sum').value = sum.toFixed(2);
}

function saveFields() {
    // Implement your saving mechanism here (localStorage, backend API, etc.)
}

function loadFields() {
    // Implement your loading mechanism here (localStorage, backend API, etc.)
}

// Calendar JavaScript

const calendarDaysElement = document.getElementById('calendar-days');
const monthYearElement = document.getElementById('month-year');
let selectedDate = null;

function generateCalendar() {
    calendarDaysElement.innerHTML = '';
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYearElement.textContent = `${monthNames[month]} ${year}`;

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i;
        dayElement.className = 'calendar-day';
        calendarDaysElement.appendChild(dayElement);
    }
}

function prevMonth() {
    // Implement logic to show previous month's calendar
}

function nextMonth() {
    // Implement logic to show next month's calendar
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];


    