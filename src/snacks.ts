
export const snacks: string[] = [
    "grapes",
    "watermelons",
    "bananas",
    "apples"
];


export function printSnacks(): void {
    console.log("--- Party Snacks Menu ---");
    snacks.forEach((snack, index) => {
        console.log(`${index + 1}. ${snack}`);
    });
    console.log("-------------------------");
}


printSnacks();