import xor from "../src/array/Xor";

describe("xor", () => {
  it("returns an array of symmetrical differences", () => {
    expect(xor([2, 1], [2, 3])).toStrictEqual([1, 3]);
  });
});
