import objToPairs from "../src/object/ObjectToPairs";

describe("objToPairs", () => {
  it("returns empty array if given empty object", () => {
    expect(objToPairs({})).toStrictEqual([]);
  });

  it("returns a 2D nested array of the given objects key/value pairs", () => {
    const obj = { a: 1, b: false };
    const arr = [
      ["a", 1],
      ["b", false],
    ];
    expect(objToPairs(obj)).toStrictEqual(arr);
  });
});
