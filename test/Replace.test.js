import replace from "../src/string/Replace";

describe("replace", () => {
  it("returns nothing if given nothing", () => {
    expect(replace("", "", "")).toBe("");
  });

  it("returns the replaced string", () => {
    expect(replace("a", "a", "b")).toBe("b");
  });

  it("returns the replaced string", () => {
    expect(replace("hello", "e", "a")).toBe("hallo");
  });
});
