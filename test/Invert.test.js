import invert from "../src/object/Invert";

describe("invert", () => {
  it("returns empty object if given empty object", () => {
    expect(invert({})).toStrictEqual({});
  });

  it("returns flipped object", () => {
    const givenObj = {
      a: true,
      b: "hello",
      c: 3,
    };
    const flippedObj = {
      true: "a",
      hello: "b",
      3: "c",
    };
    expect(invert(givenObj)).toStrictEqual(flippedObj);
  });
});
