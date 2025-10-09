let snacks = ['chips', 'cookies', 'candy', 'pizza', 'popcorn'];

export function printSnacks(): void {
    console.log("Available snacks:");
    snacks.forEach(snack => console.log(snack));
}

printSnacks();