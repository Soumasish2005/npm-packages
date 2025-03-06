import { throttle } from "../src/throttle.mjs";
import { jest } from "@jest/globals";

jest.useFakeTimers();

test("throttle should execute function at most once per limit", () => {
  const mockFn = jest.fn();
  const throttledFn = throttle(mockFn, 2000);

  throttledFn();
  throttledFn();
  throttledFn();

  expect(mockFn).toHaveBeenCalledTimes(1); // Should be called only once

  jest.advanceTimersByTime(2000); // Simulate time passing

  throttledFn();
  expect(mockFn).toHaveBeenCalledTimes(2); // Called again after 2s
});
