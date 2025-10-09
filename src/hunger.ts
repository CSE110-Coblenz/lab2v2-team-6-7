import { animate } from "./animation";
const foods: string[] = ['ramen', 'gyozas', 'butter chicken', 'mutton biryani', 'pani puri'];

export function bhukh(): void{
    console.log('Food that i dream about when hungry: ');
    for (const food of foods){
        console.log("-" + food);
    }
}

bhukh();