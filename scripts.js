
document.addEventListener('DOMContentLoaded', function () {

    // container for all checkout counters 
    const countersContainer = document.getElementById('counters');
    //input box for items
    const itemsInput = document.getElementById('items');
    // checkouy item button
    const addBtn = document.getElementById('add-btn');
    // total items where we show 
    const totalItemsSpan = document.getElementById('total-items');

    //3 checkout counters as an array of objaects
    const counters = [
        { id: 1, customers: [], total: 0 },  // First counter
        { id: 2, customers: [], total: 0 },  // Second counter
        { id: 3, customers: [], total: 0 }   // Third counter
    ];

    //Variable to keep track of ALL items across ALL counters
    let globalTotal = 0;

    //creatign a function to render the counters in webpage
    function renderCounters(){
        countersContainer.innerHTML = '';
        // Loop through each counter and create HTML elements to display its information
        counters.forEach(counter =>{
            // creating box for this counter 
            const counterElement = document.createElement('div');
            counterElement.className = 'counter';

            // creating title for this counter
            const counterTitle = document.createElement('h2');
            counterTitle.textContent = `Counter ${counter.id}`;

            //how many customers are in this counter line
            const customersCount = document.createElement('p');
            customersCount.textContent = `${counter.customers.length} customer${counter.customers.length !== 1 ? 's' : ''}`;

            counterElement.appendChild(counterTitle);
            counterElement.appendChild(customersCount);

            //Adding each customer's items
            counter.customers.forEach(items => {
                const customerItem = document.createElement('p');
                customerItem.className = 'customer-item';
                customerItem.textContent = `${items} item${items !== 1 ? 's' : ''}`;
                counterElement.appendChild(customerItem);
            });

            //Adding total items
            const totalItems = document.createElement('p');
            totalItems.className = 'total-items';
            totalItems.textContent = `Total Items: ${counter.total}`;
            counterElement.appendChild(totalItems);
            
            countersContainer.appendChild(counterElement);

        });

        globalTotal = counters.reduce((sum, counter) => sum + counter.total, 0);
        totalItemsSpan.textContent = globalTotal;
    }

    //function to find the counter with the least items
    function findCounterWithLeastItems() {
        let minTotal = Infinity;
        let selectedCounter = null;

        for (const counter of counters) {
            if (counter.total < minTotal) {
                minTotal = counter.total;
                selectedCounter = counter;
            }
        }

        return selectedCounter;
    }

    function addCustomer(items) {
        const counter = findCounterWithLeastItems();
        counter.customers.push(items);
        counter.total += items;
        renderCounters();
    }
    // Event listener for the button click
     addBtn.addEventListener('click', function() {
        const items = parseInt(itemsInput.value);
        
        if (isNaN(items) || items < 1) {
            alert('Please enter a valid number of items (at least 1)');
            return;
        }
        
        addCustomer(items);
        itemsInput.value = '';
        itemsInput.focus();
    });

    // Allow Enter key to submit
    itemsInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
    
    // Initial render
    renderCounters();
})