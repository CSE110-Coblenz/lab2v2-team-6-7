// A list of some favorite music artists
const musicArtists: string[] = [
	'Radiohead',
	'Beyoncé',
	'Kendrick Lamar',
	'Arctic Monkeys',
	'Billie Eilish'
];

// Exported function that prints the artists to the console
export function printArtists(): void {
	console.log('Music artists:');
	musicArtists.forEach((artist) => console.log('- ' + artist));
}

// Call the function so it actually prints when this module is executed
printArtists();

