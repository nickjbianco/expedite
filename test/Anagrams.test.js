import anagrams from "../src/string/Anagrams";

describe("anagrams", () => {
  it("returns empty true if given 2 empty string", () => {
    expect(anagrams("", "")).toBe(true);
  });

  it("returns true when the words are anagrams", () => {
    expect(anagrams("hello", "elloh")).toBe(true);
  });

  it("returns false when the words are not anagrams", () => {
    expect(anagrams("hello", "ello")).toBe(false);
  });
});
