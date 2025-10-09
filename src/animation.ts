let name = "Alicia";
export function printFeature(n : string) {
    console.log(`\x1b[1m${n}\x1b[0m`)
}
printFeature(name);
