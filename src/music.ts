const mySnacks: string[] = [
  "Almonds",
  "Apple Slices",
  "Cheese Sticks",
  "Dark Chocolate",
  "Pretzels"
];

export function printItems(items: string[]): void {
  items.forEach(item => {
    console.log(`- ${item}`);
  });
}

printItems(mySnacks);
