import analyzeArray from "./analyzeArray";


test("Test for more than one array element", () => {
    expect(analyzeArray([23, 4, 5, 6])).toStrictEqual({ length: 4, min: 4, max: 23, average: 10 })
});


test("Test for one array element", () => {
    expect(analyzeArray([23])).toStrictEqual({ length: 1, min: 23, max: 23, average: 23 })
});


test("Test for one array element", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ 
        average: 4,
        min: 1,
        max: 8,
        length: 6,
     })
});


test("Test for empty array", () => {
    expect(analyzeArray([])).toStrictEqual("The array should not be empty")
});