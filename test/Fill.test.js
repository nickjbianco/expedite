import fill from "../src/array/Fill";

describe("fill", () => {
  it("returns empty array if given empty array", () => {
    expect(fill([])).toStrictEqual([]);
  });

  it("returns array filled with given item", () => {
    expect(fill([1, 2, 3], "a")).toStrictEqual(["a", "a", "a"]);
  });
});
