import drop from "../src/array/Drop";

describe("drop", () => {
  it("returns empty array if given empty array", () => {
    expect(drop([])).toStrictEqual([]);
  });

  it("returns the dropped array", () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
  });
});
