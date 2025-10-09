const snacks: string[] = ["ruffles", "ice cream", "cookies"];

function printSnacks(list: string[]): void {
    list.forEach((snack: string) => {
        console.log(snack);
    });
};

printSnacks(snacks);