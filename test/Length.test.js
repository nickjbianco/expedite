import length from "../src/multipleObjects/Length";

describe("length", () => {
  it("returns 0 if array is empty", () => {
    expect(length([])).toBe(0);
  });

  it("counts the length of the given array", () => {
    expect(length([1, 2, 3])).toBe(3);
  });

  it("returns 0 if string is empty", () => {
    expect(length("")).toBe(0);
  });

  it("counts the length of the given string", () => {
    expect(length("hello")).toBe(5);
  });
});
