import { describe, expect, test } from "vitest";
import { applyDiscount } from "./price";

describe("applyDiscount", () => {
  test("calculates a 20% discount accurately", () => {
    expect(applyDiscount(100, 20)).toBe(80);
  });

  test("throws an error if discount is over 100%", () => {
    expect(() => applyDiscount(100, 150)).toThrow("Invalid discount percentage");
  });
});