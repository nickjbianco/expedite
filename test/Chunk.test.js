import chunk from "../src/array/Chunk";

describe("chun", () => {
  it("returns empty array if given empty array", () => {
    expect(chunk([])).toStrictEqual([]);
  });

  it("returns the chunked array", () => {
    const givenArr = ["a", "b", "c", "d"];
    const chunkedArr = [
      ["a", "b"],
      ["c", "d"],
    ];
    expect(chunk(givenArr, 2)).toStrictEqual(chunkedArr);
  });
});
