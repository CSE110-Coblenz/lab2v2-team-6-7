const myMusic: string[] = [
  "EDM",
  "Hip-hop",
  "Rap",
  "R&B",
  "Jazz"
];

export function printMusic(items: string[]): void {
  items.forEach(item => {
    console.log(`- ${item}`);
  });
}

printItems(mySnacks);
