// A list of some favorite music artists
const musicArtists: string[] = [
	'Radiohead',
	'Beyoncé',
	'Kendrick Lamar',
	'Arctic Monkeys',
	'Billie Eilish'
];

// Exported function that prints the artists to the console
export const writeartits = (): void => {
    console.log('musicArtists:');
    musicArtists.forEach(Artists => {console.log(Artists);});
    };

writeartits();