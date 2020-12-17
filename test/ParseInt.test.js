import parsedInt from "../src/string/ParsedInt";

describe("parsedInt", () => {
  it("returns empty string if given empty string", () => {
    expect(parsedInt("")).toBe("");
  });

  it("returns integer when given string", () => {
    expect(parsedInt("01")).toBe(1);
  });

  it("returns a integer when given a string", () => {
    expect(parsedInt("0105")).toBe(105);
  });
});
