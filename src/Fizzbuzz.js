var Fizzbuzz = function() {};

  Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    return number % 3 == 0;
  };

  Fizzbuzz.prototype.isDivisibleByFive = function(number){
    return number % 5 == 0;
  };

  Fizzbuzz.prototype.isDivisibleByFifteen = function(number){
    return number % 15 ==0;
  };


  Fizzbuzz.prototype.fizzy = function(number){
    if(this.isDivisibleByFifteen(number)) return "FizzBuzz";
    if(this.isDivisibleByFive(number)) return "Buzz";
    if(this.isDivisibleByThree(number)) return "Fizz";
  };