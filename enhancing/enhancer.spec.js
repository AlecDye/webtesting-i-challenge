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
    it("should not increase enhancement past lvl 20", function () {
      const newTestItem = {
        enhancement: 20,
      };
      expect(succeed(newTestItem).enhancement).toBe(20);
    });
  });

  describe(".fail()", function () {
    it("should decrease durability by 5", function () {
      expect(fail(testItem).durability).toBe(45);
    });
    it("enhancement is 16 or greater, durability decreases by 10 and enhancement decreases by 1", function () {
      const newTestItem = {
        enhancement: 16,
        durability: 13,
      };
      expect(fail(newTestItem).durability).toBe(3);
      expect(fail(newTestItem).enhancement).toBe(16);
    });
    it("enhancement is 15, durablitiy should decrease by 10", function () {
      const newTestItem = {
        enhancement: 15,
        durability: 2,
      };
      expect(fail(newTestItem).durability).toBe(-8);
    });
  });

  describe(".repair()", function () {
    it("should increase durability to 100", function () {
      expect(repair(testItem).durability).toBe(100);
    });
  });
});
