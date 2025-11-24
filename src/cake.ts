// Define a list (array) of your items (e.g., snack names).
// Define and export a function that prints them to the console.
// Call the function so it actually prints out the snacks.

const cakes: string[] = ['Chocolate Cake', 'Vanilla Cake', 'Red Velvet Cake', 'Cheesecake', 'Carrot Cake'];
export function printCakes(): void {
    console.log('Available Cakes:');
    cakes.forEach(cake => console.log(cake));
}
printCakes();
