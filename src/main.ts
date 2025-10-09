
import {bhukh} from "./hunger";
import { playSadMusic, sadmusic } from "./sadMusic";
function main(): void{
  console.log("this is my hunger feature");
  bhukh();
  console.log("this is my sad music feature");
  playSadMusic(sadmusic);
}

main();
