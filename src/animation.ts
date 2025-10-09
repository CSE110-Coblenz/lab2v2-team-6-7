export function animateFeature(featureName: string): void {
    const boldStart = "\x1b[1m";
    const italicStart = "\x1b[3m";
    const reset = "\x1b[0m";
    
    console.log("\n" + boldStart + "🎉 Party! Party! Party! 🎉" + reset);
    console.log(italicStart + featureName + reset);
    console.log(`\x1b[1mBold Text\x1b[0m`); // Bold

}

animateFeature("123");