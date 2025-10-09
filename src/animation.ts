import {print} from "./music.ts";
import {printSnacks} from "./snacks.ts";

let snacks: string[] = ["Goldfish", "Potato Chips", "Pizza"];
const music: string[] = ["Rock", "Pop", "Rap", "EDM"];

export function printFeature(feature: string){
    if (feature == "music"){
        console.log(`\x1b[1mMUSIC\x1b[0m`); 
        print(music);
    }
    if (feature == "snacks"){
        console.log(`\x1b[1mSNACKS\x1b[0m`); 
        printSnacks(snacks);
    }
}