let games = ['monopoly', 'uno', 'mario kart', 'slap jack', 'poker'];

export function printGames(): void {
    console.log("Available games:");
    games.forEach(game => console.log(game));
}

printGames();