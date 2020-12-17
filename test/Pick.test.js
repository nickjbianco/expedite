import pick from "../src/object/Pick";

describe("pick", () => {
  it("returns empty object if given empty object and empty array", () => {
    expect(pick({}, [])).toStrictEqual({});
  });

  it("returns empty object if given any object and empty array", () => {
    expect(pick({ a: true, b: true }, [])).toStrictEqual({});
  });

  it("returns the new object with picked properties", () => {
    expect(pick({ a: false, b: true }, ["a"])).toStrictEqual({ a: false });
  });

  it("returns the new object with ignored paths if they are not in the object", () => {
    expect(pick({ a: false, b: true }, ["a", "c"])).toStrictEqual({ a: false });
  });
});
