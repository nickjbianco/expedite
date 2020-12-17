import join from "../src/array/Join";

describe("join", () => {
  it("returns nothing if given empty array", () => {
    expect(join([])).toStrictEqual([]);
  });

  it("returns joined string with seperator", () => {
    expect(join([1, 2, 3], "-")).toStrictEqual("1-2-3");
  });
});
