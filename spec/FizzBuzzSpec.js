describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });


  describe('knows when a number is divisible', function() {

    it('by three',function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('Knows when a number is not divisible', function() {

    it('by three', function() {
      expect(fizzbuzz.isNotDivisibleByOne(1)).toBe(false);
    });
  });
});