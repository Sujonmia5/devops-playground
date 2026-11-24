import { describe, expect, it } from "vitest";
import { applyDiscount } from "./price";
describe("applyDiscount", () => {
  it("calculates discounted price correctly", () => {
    expect(applyDiscount(1000, 20)).toBe(800);
  });
  it("throw error", () => {
    expect(() => applyDiscount(1000, 150)).toThrow("Invalid price or discount");
  });
});
