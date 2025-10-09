// list (array) of songs
export const songs = ["Party in the USA", "Where have you been", "Call me maybe"]; 

// print the list of songs
export function printSongs(songs: string[]): void {
    songs.forEach((song) => {
        console.log(song);
    });
}

printSongs(songs);