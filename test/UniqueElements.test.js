import uniqueElements from "../src/array/uniqueElements";

describe("returns unique elements from array only", () => {
  it("returns the unique elements", () => {
    expect(uniqueElements([1, 1, 2])).toStrictEqual([1, 2]);
  });
});
