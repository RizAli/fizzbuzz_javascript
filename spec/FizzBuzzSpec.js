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
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

  describe('knows when a number is divisible', function(){

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

    describe('knows when a number is not divisible', function(){

      it('by five', function(){
        expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
      });

    });

    describe('knows when a number is divisible', function(){

      it('by fifteen', function(){
        expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
      });

    });

    describe('knows when a number is not divisible', function(){

      it('by fifteen', function(){
        expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
      });

    });

    describe('it knows what to return', function(){

      it('"FizzBuzz" when divisible by 15', function(){
        expect(fizzbuzz.fizzy(15)).toEqual("FizzBuzz");
      });


      it('"FizzBuzz" when divisible by 5', function(){
        expect(fizzbuzz.fizzy(5)).toEqual('Buzz');
      });

     it('"FizzBuzz" when divisible by 3', function(){
        expect(fizzbuzz.fizzy(3)).toEqual('Fizz');
      });

    });

});