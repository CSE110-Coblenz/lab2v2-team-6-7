export const snacks: string[] = ["ruffles", "ice cream", "cookies", "fruit", "fritos", "cheetos", "chips"];

export function printSnacks(list: string[]): void {
    list.forEach((snack: string) => {
        console.log(snack);
    });
};

printSnacks(snacks);