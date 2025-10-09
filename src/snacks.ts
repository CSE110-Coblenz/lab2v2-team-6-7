import { playAnimation } from './animation'; // <-- 1. ADD THIS IMPORT

const snacks: string[] = ["apples", "bananas", "chips", "gum", "cheetos"]

export const writesnacks = (): void => {
    playAnimation("Snacks");
    console.log('Snacks:');
    snacks.forEach(snack => {console.log(snack);});
    };

writesnacks();