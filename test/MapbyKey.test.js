import mapByKey from "../src/object/MapByKey";

describe("mapByKey", () => {
  it("returns empty array if given empty object", () => {
    expect(mapByKey([{}])).toStrictEqual([]);
  });

  it("returns array of values that correspond to given key", () => {
    const objList = [
      { a: true, b: 1 },
      { c: 4, a: false },
      { a: "hi", g: true },
    ];
    expect(mapByKey(objList, "a")).toStrictEqual([true, false, "hi"]);
  });
});
