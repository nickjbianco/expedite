import size from "../src/multipleObjects/Size";

describe("size", () => {
  it("returns the length of string", () => {
    expect(size("Hello")).toBe(5);
  });

  it("returns the length of an array", () => {
    expect(size([1, 2, 3])).toBe(3);
  });

  it("returns the number of keys in object", () => {
    expect(size({ a: true, b: false })).toBe(2);
  });
});
