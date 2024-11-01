const { niceLogger, messageRepeater } = require("../src/niceLogger.js");

describe("niceLogger function tests", () => {

    // Different test cases
    test("niceLogger returns Nice logger", () => {
        //  Test happens here
        // expect(sth).toBe(sth);
    
        //  Lets make a test
        expect(niceLogger()).toBe("Nice logger");
    })

    test("niceLogger returns Nice logger", () => {
        //  Test happens here
        // expect(sth).toBe(sth);
    
        //  Lets make a test
        expect(niceLogger()).toBe("Nice logger");
    })

    test("niceLogger returns Nice logger", () => {
        //  Test happens here
        // expect(sth).toBe(sth);
    
        //  Lets make a test
        expect(niceLogger()).toBe("Nice logger");
    })
    
});

describe("messageRepeater function tests", () => {

    // Different test cases
    test("messageRepeater repeats words correctly", () => {
        let repeatedWord = messageRepeater("hello"); // "hello";

        expect(repeatedWord).toBe("hellohellohello");
        expect(repeatedWord).toHaveLength(15);

    });

    test("messageRepeater repeats numbers correctly", () => {
        let repeatedWord = messageRepeater(1); // "hello";

        expect(repeatedWord).toEqual("111");
        expect(repeatedWord).toHaveLength(3);

    });

    test("messageRepeater repeats arrays correctly", () => {
        let repeatedWord = messageRepeater(["hello", "World"]);

        expect(repeatedWord).toEqual(["hello", "World", "hello", "World", "hello", "World"]);
        expect(repeatedWord).toHaveLength(6);

    });

});