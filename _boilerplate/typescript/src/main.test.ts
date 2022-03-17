import { hello } from "./main";

describe("TDD", () => {
  it("should say hello", () => {
    expect(hello()).toEqual("not-hello");
  });
});
