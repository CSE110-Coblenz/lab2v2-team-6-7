import { animate } from "./animation";
const foods: string[] = ['ramen', 'gyozas', 'butter chicken', 'mutton biryani', 'pani puri'];

export function bhukh(): void{
    animate("Hunger");
    console.log('Food that I crave when hungry: ');
    for (const food of foods){
        console.log("-" + food);
    }
}

bhukh();