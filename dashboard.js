// Mock data for transactions
const transactions = [
    { id: 1, status: 'approved', amount: '1,261.00', date: '2021-03-17' },
    { id: 2, status: 'rejected', amount: '90.00', date: '2021-03-18' },
    { id: 3, status: 'pending', amount: '100.00', date: '2021-03-19' },
    // ...more transactions
];

// Function to navigate between different sections of the dashboard
function navigate(section) {
    // Logic to switch views or tabs
    console.log(`Navigating to ${section}`);
    // Here you would add or remove classes to show or hide sections
}

// Function to filter transactions by status
function filterStatus(status) {
    const filteredTransactions = transactions.filter(t => t.status === status);
    populateTransactionsTable(filteredTransactions);
}

// Function to populate the transactions table with data
function populateTransactionsTable(transactionsData) {
    const table = document.getElementById('transactions-table');
    table.innerHTML = `<tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
    </tr>`; // Reset table with headers

    transactionsData.forEach(transaction => {
        const row = table.insertRow();
        row.insertCell().innerText = transaction.date;
        row.insertCell().innerText = transaction.amount;
        row.insertCell().innerText = transaction.status;
        const actionCell = row.insertCell();
        const viewButton = document.createElement('button');
        viewButton.innerText = 'View';
        viewButton.onclick = function() {
            viewTransactionDetails(transaction.id);
        };
        actionCell.appendChild(viewButton);
    });
}

// Function to view transaction details when the 'View' button is clicked
function viewTransactionDetails(transactionId) {
    const transaction = transactions.find(t => t.id === transactionId);
    alert(`Transaction details:\nDate: ${transaction.date}\nAmount: $${transaction.amount}`);
}

// Initialize the dashboard by showing all transactions
document.addEventListener('DOMContentLoaded', function() {
    populateTransactionsTable(transactions);
});
