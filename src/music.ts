const songs: string[] = [
    "God's Plan", 
    "Gangnam Style", 
    "Shine Bright Like a Diamond", 
    "Baby", 
    "Blinding Lights"
];

function printSongs() {
  console.log("My favorite songs:");
  for (const song of songs) {
    console.log(song);
  }
}

printSongs();
