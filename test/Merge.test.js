import omit from "../src/object/Omit";

describe("omit", () => {
  it("returns empty object if given empty object and empty array", () => {
    expect(omit({}, [])).toStrictEqual({});
  });

  it("returns given object if given any object and empty array", () => {
    expect(omit({ a: true, b: true }, [])).toStrictEqual({ a: true, b: true });
  });

  fit("returns the new object with ignored paths if they are not in the object", () => {
    expect(omit({ a: false, b: true }, ["a", "c"])).toStrictEqual({ b: true });
  });

  it("returns the omitted object", () => {
    const givenObj = {
      a: 1,
      b: 2,
      c: 3,
    };
    const pathsToOmit = ["a", "c"];
    const omittedObj = { b: 2 };
    expect(omit(givenObj, pathsToOmit)).toStrictEqual(omittedObj);
  });
});
