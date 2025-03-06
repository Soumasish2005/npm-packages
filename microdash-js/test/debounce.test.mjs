import { debounce } from "../src/debounce.mjs";
import { jest } from "@jest/globals";

jest.useFakeTimers();

test("debounce should delay function execution", () => {
  const mockFn = jest.fn();
  const debouncedFn = debounce(mockFn, 1000);

  debouncedFn();
  debouncedFn();
  debouncedFn();

  expect(mockFn).not.toBeCalled(); // Shouldn't be called yet

  jest.runAllTimers(); // Fast-forward time

  expect(mockFn).toHaveBeenCalledTimes(1); // Only last call runs
});
