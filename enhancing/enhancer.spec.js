const enhancer = require("./enhancer.js");
const { succeed, fail, repair } = require("./enhancer");

const testItem = {
  name: "sword",
  enhancement: 10,
  durability: 50,
};

// test away!
describe("enhancer.js", () => {
  describe(".succeed()", function () {
    it("should return true if enchanement succeeded", function () {
      expect(succeed(testItem).enhancement).toBe(11);
    });
  });
  describe(".fail()", function () {});
  describe(".repair()", function () {
    it("should increase durability to 100", function () {
      expect(repair(testItem).durability).toBe(100);
    });
  });
});
