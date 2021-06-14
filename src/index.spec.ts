import ExampleModule from "./index";

describe("Example", () => {
  test("has name equaling `example_module`", () => {
    const object = new ExampleModule();
    expect(object.name).toBe("example_module");
  });
});
