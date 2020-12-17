import mathFloor from "../src/integer/MathFloor";

describe("mathFloor", () => {
  it("returns 0 if given 0", () => {
    expect(mathFloor(0)).toBe(0);
  });

  it("returns the given number rounded down", () => {
    expect(mathFloor(1.04)).toBe(1);
  });
});
