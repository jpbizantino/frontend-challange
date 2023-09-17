import { getFiles } from "./file.api";
import { describe, test, expect } from "@jest/globals";

describe("File API", () => {
  it("Test endpoint Data", async () => {
    await getFiles(null).then((data) => {
      expect(data).not.toBe(null);
    });
  });

  test("Test Query Parameter fileName", async () => {
    await getFiles("test18.csv").then((data) => {
      expect(data).not.toBe(null);
    });
  });
});
