import { animateFeature } from "./animation"; 


export const music: string[] = [
    "Uptown Funk",
    "Blinding Lights",
    "Don't Stop Me Now"
];

export function printMusic(): void {
    animateFeature("🎵 Party Playlist 🎶"); 
    
    console.log("--- Current Playlist ---");
    music.forEach((song, index) => {
        console.log(`${index + 1}. ${song}`);
    });
    console.log("------------------------");
}

printMusic();