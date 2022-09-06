import calculator from "./calculator"



test("Checking for addition", () => {
    expect(calculator.add(2,3)).toBe(5);
})
test("Checking for subtraction", () => {
    expect(calculator.subtract(4, 3)).toBe(1);
})
test("Checking for division", () => {
    expect(calculator.division(12,3)).toBe(4);
})
test("Checking for addition", () => {
    expect(calculator.multiply(2,3)).toBe(6);
})