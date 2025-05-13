# Hypermart Checkout System Assignment

This is a real-time queue management system for a hypermart checkout, where customers are assigned to the checkout counter with the fewest items.

## Solution Overview

The system consists of:
1. Three checkout counters initialized with empty queues
2. An input field to enter the number of items for a new customer
3. A button to assign the customer to the appropriate counter

### Algorithm
- When a new customer arrives, the system checks all counters' total items
- The customer is assigned to the counter with the least total items
- If multiple counters have the same least total, the leftmost counter (smallest ID) is chosen
- The UI updates in real-time to show the current state of all counters

### Time Complexity
- Finding the counter with least items: O(n) where n is the number of counters
- Adding a customer: O(1) after finding the appropriate counter
- The solution is efficient for the given problem size (3 counters)

### Assumptions
- There are exactly 3 counters as shown in the example
- All counters start empty
- Each customer has at least 1 item
- The system doesn't handle checkout completion (items are never removed)
- 
## How to Run
1. Clone the repository
2. Open `index.html` in a web browser
3. Enter the number of items for a new customer and click "Checkout items"
   
## Files
- `index.html`: Main HTML structure
- `styles.css`: Styling for the application
- `scripts.js`: JavaScript logic for queue management
- `README.md`: This documentation file
