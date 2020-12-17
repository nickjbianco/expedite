import itemRemoveAll from "../src/array/ItemRemoveAll";

describe("itemRemoveAll", () => {
  it("returns nothing if given empty array", () => {
    expect(itemRemoveAll([])).toStrictEqual([]);
  });

  it("returns filtered array that does not contain given item", () => {
    expect(itemRemoveAll([1, 1, 3, 4, 5], 1)).toStrictEqual([3, 4, 5]);
  });

  it("returns same array if nothing can be removed", () => {
    expect(itemRemoveAll([1, 1, 3, 4, 5], 6)).toStrictEqual([1, 1, 3, 4, 5]);
  });
});
