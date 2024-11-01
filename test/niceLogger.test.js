var { niceLogger, messageRepeater } = require("../src/niceLogger.js");

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
        niceLogger = jest.fn();

        niceLogger.mockReturnValue("Nice logger");
    
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

    test("messageRepeater repeats null or whitespace correctly", () => {
        let repeatedWord = messageRepeater("");

        expect(repeatedWord).toEqual("");
        expect(repeatedWord).toHaveLength(0);

    });

});

beforeEach(() => {
    console.log("A test has started");
})

afterEach(() => {
    console.log("A test has finished");
})

beforeAll(() => {
    console.log("All tests have started");
    // for APIs, the possible commands we can run are:
    // get JWT from the API
    // store JWT for all tests to use
    // connection successful, make sure API is active and ready
    // connection successful, make sure database is available and running
})

afterAll(() => {
    console.log("All tests have finished");
    // For APIs, delete all the resources that were created.
})