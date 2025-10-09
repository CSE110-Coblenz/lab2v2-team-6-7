const snacks: string[] = ["apples", "bananas", "chips", "gum", "cheetos"]

export const writesnacks = (): void => {
    console.log('Snacks:');
    snacks.forEach(snack => {console.log(snack);});
    };

writesnacks();