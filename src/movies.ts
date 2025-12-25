export const movies = ["TOPGUN", "THE F-1 MOVIE", "HARRY POTTER"];

export function printList() {
  console.log("List of movies");
  for (const movie of movies) {
    console.log(`${movie}`);
  }
}

// Call the function so it actually prints out the snacks
printList();