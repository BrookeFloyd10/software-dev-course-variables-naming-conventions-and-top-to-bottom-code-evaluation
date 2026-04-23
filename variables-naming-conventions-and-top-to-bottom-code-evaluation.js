/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let name = "Alice"; // stores name of user
let howManyItems = 5; // number of items user has
let itemCost = 20; // stores the cost of the items
let totalSpent = howManyItems * itemCost; // tells total spent
let itemType = "books" // tells what the items are
let purchaseSummary = name + " bought " + howManyItems + " " + itemType + " for $" + itemCost + " spending a total of $" + totalSpent + ".";

console.log(purchaseSummary);

// more specific example from assignment review

// let userName = "Alice"; // stores name of user
// let itemsInCart = 5; // number of items in  the shopping cart
// let item1 = "Playstation"; // One of the items
// let item2 = "Headphones"; // Another of the items
// let item3 = "Controller"; // Yet another of the items
// let totalCost = 150.0; // Total cost of the items
// let statement = (userName + " has " + itemsInCart + " items totaling:
// " + totalCost + ", including: a " + item1 + ", a pair of " + item2 +
// ", and a " + item3);

// console.log(statement);