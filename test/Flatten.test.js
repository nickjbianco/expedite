import flatten from "../src/array/Flatten";

describe("flatten", () => {
  it("returns empty array if given empty array", () => {
    expect(flatten([])).toStrictEqual([]);
  });

  it("returns flattened array when given nested array", () => {
    const givenArr = [1, [2, 3, [4, 5]]];
    const flattenedArr = [1, 2, 3, 4, 5];
    expect(flatten(givenArr)).toStrictEqual(flattenedArr);
  });

  it("returns array if given non-nested array", () => {
    const arr = [1, 2, 3, 4];
    expect(flatten(arr)).toStrictEqual(arr);
  });
});
