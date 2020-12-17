import concat from "../src/array/Concat";

describe("concat", () => {
  it("returns empty array if given empty array", () => {
    expect(concat([])).toStrictEqual([]);
  });

  it("returns the concated array", () => {
    expect(concat([1], 2, [3], [[4]])).toStrictEqual([1, 2, 3, [4]]);
  });
});
