import lastIndexOf from "../src/array/LastIndexOf";

describe("lastIndexOf", () => {
  it("returns -1 if given empty array", () => {
    expect(lastIndexOf([], 1)).toBe(-1);
  });

  it("returns -1 if given item is not in given list", () => {
    expect(lastIndexOf([1, 2, 3], 4)).toBe(-1);
  });

  it("returns -1 if there is no given item", () => {
    expect(lastIndexOf([1, 2, 3])).toBe(-1);
  });

  it("returns the last index of given item", () => {
    expect(lastIndexOf([1, 2, 3], 3)).toBe(2);
  });
});
