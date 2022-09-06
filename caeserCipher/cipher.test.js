import cipher from "./cipher"

test("Test ciper", () => {
    expect(cipher("a", 1)).toBe("b")
})