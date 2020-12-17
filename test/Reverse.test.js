import reverse from "../src/array/Reverse";

describe("reverse", () => {
  it("returns nothing if given nothing", () => {
    expect(reverse([])).toStrictEqual([]);
  });

  it("returns one item if given one item", () => {
    expect(reverse([1])).toStrictEqual([1]);
  });

  it("returns the reversed array", () => {
    expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });
});
