import pullAt from "../src/array/PullAt";

describe("pullAt", () => {
  it("returns nothing if given nothing", () => {
    expect(pullAt([], [])).toStrictEqual([]);
  });

  it("returns the pulled array", () => {
    expect(pullAt([1, 2, 3, 4], [1, 2])).toStrictEqual([1, 4]);
  });
});
