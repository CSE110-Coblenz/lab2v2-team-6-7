const mySnacks: string[] = [
  "EDM",
  "Hip-hop",
  "Rap",
  "R&B",
  "Jazz"
];

export function printItems(items: string[]): void {
  items.forEach(item => {
    console.log(`- ${item}`);
  });
}

printItems(mySnacks);
