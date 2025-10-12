export const music = ["pop", "rock", "hip-hop","kids"];

export function printMusic() {
  console.log("Music:");
  for (const m of music) console.log(" -", m);
}

if (require.main === module) {
  printMusic();
}
`) {
  printMusic();
}
