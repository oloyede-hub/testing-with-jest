import capitalizeWord from "./capitalise";


test("To check for capitalise word" , () => {
    expect(capitalizeWord("solomon")).toBe("Solomon")
});


test("To check for capitalise word in a sentence" , () => {
    expect(capitalizeWord("john the baptist")).toBe("John the baptist")
})
