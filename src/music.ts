import { animate } from "./animation";
export const music = ["pop", "rock", "hip-hop","kids"];

export function printMusic() {
  animate("Music");
  console.log("Music playlist:");
  for (const m of music) console.log(" -", m);
}

if (require.main === module) {
  printMusic();
}
