
fizzBuzz = function(number) {
    if (number % 3 === 0 && number % 5 === 0)  {
        return "fizzBuzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else {
        return number;
    }
};



//If the number is divisible by 3 and 5, then return "FizzBuzz"
//If the number is divisible by 3, then return "Fizz"
//If the number is divisible by 5, then return "Buzz"
//Else just return the number
