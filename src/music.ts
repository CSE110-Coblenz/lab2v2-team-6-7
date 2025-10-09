import { animate } from "./animation";

export const music = ["pop", "rock", "jazz"];

export function printMusic() {
  animate("music");
  music.forEach(m => console.log("- " + m));
}