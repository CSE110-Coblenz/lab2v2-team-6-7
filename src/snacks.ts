
export const snacks: string[] = [
    "pears",
    "grapes",
    "watermelons",
    "bananas",
    "apples",
    "strawberries",
    "Cherries",
    "chips"
];


export function printSnacks(): void {
    console.log("--- Party Snacks Menu ---");
    snacks.forEach((snack, index) => {
        console.log(`${index + 1}. ${snack}`);
    });
    console.log("-------------------------");
}


printSnacks();
