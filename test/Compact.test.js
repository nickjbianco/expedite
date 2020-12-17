import compact from "../src/array/Compact";

describe("compact", () => {
  it("returns empty array if given empty array", () => {
    expect(compact([])).toStrictEqual([]);
  });

  it("returns comapcted array", () => {
    const givenArr = [1, 2, "", undefined, false];
    const compactedArr = [1, 2];
    expect(compact(givenArr)).toStrictEqual(compactedArr);
  });
});
