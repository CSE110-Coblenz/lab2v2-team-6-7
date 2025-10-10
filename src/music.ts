export const music = ["pop", "rock", "hip-hop"];

export function printMusic() {
  console.log("Music:");
  for (const m of music) console.log(" -", m);
}
