import zip from "../src/array/Zip";

describe("zip", () => {
  it("returns the zipped arrays", () => {
    expect(zip(["a", "b"], [1, 2], [true, false])).toStrictEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
});
