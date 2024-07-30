//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('book-list');
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = title;
    cell2.textContent = author;
    cell3.textContent = isbn;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Clear';
    deleteButton.classList.add('delete');
    cell4.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
    });

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});