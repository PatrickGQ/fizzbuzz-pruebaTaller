describe("FizzBuzz", () => {
  it("deberia mostrar un numero n", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia mostrar el 2", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
});

function fizzbuzz(n) {
  return n + "";
}