import { playAnimation } from './animation'; // <-- 1. ADD THIS IMPORT

export const music = ["Playlist Rock", "Playlist Pop", "Playlist Dance"];

export function writeartits() {
  playAnimation("Music"); // <-- 2. CALL THE ANIMATION FUNCTION HERE

  console.log("--- Our Party Music ---");
  music.forEach(song => {
    console.log(`- ${song}`);
  });
}

writeartits();