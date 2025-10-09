// define a list of snacks
export const snacks = [
  "Chips",
  "Chocolate",
  "Fruit",
  "Nuts",
  "Cookies",
  "Candy",
  "Granola Bar",
];

// define a function that prints the snacks
export function printSnacks() {
  console.log("Available snacks:");
  snacks.forEach((snack) => {
    console.log(`- ${snack}`);
  });
}

// call the function to print the snacks
printSnacks();
let cookies: string[] = ["cookies", "cheezits", "grapes", "mangoes", "ice cream", "brownies", "chips"];

console.log(cookies);
