import yell from "../src/string/Yell";

describe("yell", () => {
  it("capitalizes all letters in string and adds exclamation point", () => {
    expect(yell("hello")).toBe("HELLO!");
  });

  describe("given empty string", () => {
    it("returns empty string", () => {
      expect(yell("")).toBe("");
    });
  });
});
