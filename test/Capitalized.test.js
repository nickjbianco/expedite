import capitalized from "../src/string/Capitalize";

describe("capitalize", () => {
  it("returns empty string if given empty string", () => {
    expect(capitalized("")).toBe("");
  });

  it("returns the capitalized version of the string", () => {
    expect(capitalized("hellO")).toBe("Hello");
  });
});
