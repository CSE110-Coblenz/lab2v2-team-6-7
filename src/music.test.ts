import { describe, it, expect } from "vitest";
import { music } from "./music";

describe("music", () => {
  it("has at least 3 items", () => {
    expect(music.length).toBeGreaterThanOrEqual(3);
  });

  it("includes 'rock'", () => {
    expect(music).toContain("rock");
  });
});
