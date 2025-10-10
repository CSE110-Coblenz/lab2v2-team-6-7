export const snacks = ["chips", "cookies", "granola"];

export function printSnacks() {
  console.log("Snacks:");
  for (const s of snacks) console.log(" -", s);
}
