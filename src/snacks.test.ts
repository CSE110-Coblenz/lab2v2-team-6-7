import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";

describe("snacks", () => {
  it("has at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("includes 'Chips'", () => {
    expect(snacks).toContain("Chips");
  });
});
