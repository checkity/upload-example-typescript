export function isEven(number: number): boolean {
    if (number % 2 == 0) {
        console.log(`${number} is even`);
        return true;
    } else {
        console.log(`${number} is odd`);
        return false;
    }
}