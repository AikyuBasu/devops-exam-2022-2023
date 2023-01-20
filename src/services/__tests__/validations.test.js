const {
    isEmpty,
    isLongEnough,
    containsSpecialChar,
} = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - gamertag is at least 8char long", () => {
    test("should return true as the label is 8 char long", () => {
        const result = isLongEnough("gamertag");
        expect(result).toBe(true);
    });

    test("should return true as the label is more than 8 char long", () => {
        const result = isLongEnough("gamertag0123");
        expect(result).toBe(true);
    });

    test("should return true as the label 8 char long", () => {
        const result = isLongEnough("gamer1");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - gamertag contains a special char", () => {
    test("should return true as the label contains a special char", () => {
        const result = containsSpecialChar("gamertag_");
        expect(result).toBe(true);
    });

    test("should return false as the label doesn't contain a special char", () => {
        const result = containsSpecialChar("gamer1");
        expect(result).toBe(false);
    });
});
