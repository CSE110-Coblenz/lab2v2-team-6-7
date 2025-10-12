// src/snacks.ts

// 1) define a list (array) of items
export const snacks: string[] = ["Pocky", "Gummy Bears"];

// 2) define & export a function that prints them
export function printSnacks(items: string[] = snacks): void {
  console.log("Snack list:");
  items.forEach((name, i) => console.log(`${i + 1}. ${name}`));
}

// 3) call the function so it actually prints
printSnacks();
