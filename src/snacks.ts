
export const snacks: string[] = [
    "chips",
    "pretzels",
    "cookies",
    "soda"
];


export function printSnacks(): void {
    console.log("--- Party Snacks Menu ---");
    snacks.forEach((snack, index) => {
        console.log(`${index + 1}. ${snack}`);
    });
    console.log("-------------------------");
}


printSnacks();