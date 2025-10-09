let snacks: string[] = ["Doritos","Fritos","Guac Dip","Artichoke Dip", "Beef Jerky"];

function printSnack(arr: string[]): void {
	for(let i: number = 0; i< arr.length; i++){
		console.log(arr[i]);	
	}
}

printSnack(snacks);
