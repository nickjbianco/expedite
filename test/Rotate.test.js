import rotate from "../src/array/Rotate";

describe("rotate", () => {
  it("returns the rotated array", () => {
    expect(rotate([1, 2, 3], 2)).toStrictEqual([2, 3, 1]);
  });

  it("returns nothing if given nothing", () => {
    expect(rotate([], 1)).toStrictEqual([]);
  });

  it("returns one item if given one item", () => {
    expect(rotate([1], 1)).toStrictEqual([1]);
  });
});
