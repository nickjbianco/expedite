import shuffle from "../src/array/Shuffle";

describe("shuffle", () => {
  it("returns nothing if given nothing", () => {
    expect(shuffle([])).toStrictEqual([]);
  });

  it("returns one item if given one item", () => {
    expect(shuffle([1])).toStrictEqual([1]);
  });
});
