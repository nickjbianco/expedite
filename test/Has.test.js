import has from "../src/object/Has";

describe("has", () => {
  it("returns empty object if given empty object", () => {
    expect(has({}, "a")).toBe(false);
  });

  it("returns true if object has direct path", () => {
    const givenObj = {
      a: true,
      b: false,
    };
    const givenPath = "b";
    expect(has(givenObj, givenPath)).toBe(true);
  });

  it("returns false if object does not have direct path", () => {
    const givenObj = {
      a: true,
      b: false,
    };
    const givenPath = "c";
    expect(has(givenObj, givenPath)).toBe(false);
  });
});
