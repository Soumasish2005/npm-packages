import { merge } from "../src/merge.mjs";

test("merge should combine objects deeply", () => {
  const obj1 = { a: 1, b: { x: 10 } };
  const obj2 = { b: { y: 20 }, c: 3 };

  const result = merge({}, obj1, obj2);
  expect(result).toEqual({ a: 1, b: { x: 10, y: 20 }, c: 3 });
});
