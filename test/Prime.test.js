import prime from "../src/integer/Prime";

describe("prime", () => {
  it("returns false if given 1 or 0", () => {
    expect(prime(0)).toBe(false);
    expect(prime(1)).toBe(false);
  });

  it("returns true if given number 2", () => {
    expect(prime(2)).toBe(true);
  });

  it("returns false if given number 6", () => {
    expect(prime(6)).toBe(false);
  });

  it("returns true if given number 5", () => {
    expect(prime(5)).toBe(true);
  });
});
