import exp from "constants";
import { sum } from "./index";

describe("canary config", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 2 + 2 should not be equal 3", () => {
    expect(sum(2, 2)).not.toBe(3);
  });
});
