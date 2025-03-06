import { deepClone } from "../src/deepClone.mjs";

test("deepClone should create an identical but separate object", () => {
  const obj = { a: 1, b: { c: 2 } };
  const clone = deepClone(obj);

  expect(clone).toEqual(obj); // Objects should be identical
  expect(clone).not.toBe(obj); // But different references

  clone.b.c = 42;
  expect(obj.b.c).toBe(2); // Changing clone shouldn't affect original
});
