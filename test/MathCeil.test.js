import mathCeil from "../src/integer/MathCeil";

describe("mathCeil", () => {
  it("returns 0 if given 0", () => {
    expect(mathCeil(0)).toBe(0);
  });

  it("returns number round up", () => {
    expect(mathCeil(3.5)).toBe(4);
  });
});
