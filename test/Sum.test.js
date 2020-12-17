import sum from "../src/integer/Sum";

describe("sum", () => {
  it("returns 0 if given 0", () => {
    expect(sum(0)).toBe(0);
  });

  it("returns summed numbers", () => {
    expect(sum(0, 4, 5, 6.01)).toBe(15.01);
  });
});
