const { validateInput } = require("./../util");

test("Validate Input caso verdadero", () => {
  expect(validateInput("a", true)).toBeTruthy();
});

test("Validate Input caso verdadero", () => {
  expect(validateInput(0, true)).toBeTruthy();
});

test("Validate Input caso falso", () => {
  expect(validateInput("", false)).toBeFalsy();
});

test("Validate Input caso falso", () => {
  expect(validateInput(" ", false)).toBeTruthy();
});

test("Validate Input caso falso", () => {
  expect(validateInput("", true)).toBeFalsy();
});

test("Validate Input caso falso", () => {
  expect(validateInput(" ", true)).toBeTruthy();
});
