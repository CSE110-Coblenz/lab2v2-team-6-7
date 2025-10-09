export const music = ["pop", "rock", "jazz"];

export function printMusic() {
  console.log("Party Playlist:");
  music.forEach(m => console.log("- " + m));
}

printMusic();