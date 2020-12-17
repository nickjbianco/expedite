import whisper from "../src/string/Whisper";

describe("whisper", () => {
  it("returns the whispered string", () => {
    expect(whisper("Hello")).toBe("hello...");
  });

  it("returns nothing if given nothing", () => {
    expect(whisper("")).toBe("");
  });
});
