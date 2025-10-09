// create array of music tracks
export const partyMusic: string[] = [
  "https://soundcloud.com/amy-zhang-944938668/sets/fast",
];

// function to print music tracks
export function printPartyMusic() {
  console.log("Party Music Tracks:");
  partyMusic.forEach((track) => {
    console.log(`- ${track}`);
  });
}

// call the function to print the music tracks
printPartyMusic();
