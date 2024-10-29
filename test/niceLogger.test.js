const { niceLogger } = require("../src/niceLogger.js");

test("niceLogger returns Nice logger", () => {
    //  Test happens here
    // expect(sth).toBe(sth);

    //  Lets make a test
    expect(niceLogger()).toBe("Nice logger");
})