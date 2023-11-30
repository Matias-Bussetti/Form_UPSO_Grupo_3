const { validateInput } = require("./../util");

test("ValidateInput caso 1", () => {
  expect(validateInput("a", true)).toBeTruthy();
});

test("ValidateInput caso 2", () => {
  expect(validateInput(" ", false)).toBeTruthy();
});

test("ValidateInput caso 3", () => {
  expect(validateInput("", false)).toBeFalsy();
});

test("Validate Input caso falso", () => {
  expect(validateInput("", false)).toBeFalsy();
});
