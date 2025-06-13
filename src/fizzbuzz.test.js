import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("deberia mostrar un numero n", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia mostrar el 2", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia mostrar fizz porque es multiplo de 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
});