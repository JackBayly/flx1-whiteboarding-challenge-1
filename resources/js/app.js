// 1. GenBuzz Function

//    * Write a function that prints (to the console) numbers from a `lowerLimit` to an `upperLimit`.
//    * For numbers divisible by 3, print “Gen”
//    * For numbers divisible by 5, print “Buzz”
//    * For numbers divisible by both 3 and 5, print “GenBuzz”
//    


//* DONEEECheck to make sure that inputs are numbers
//      * If they are not numbers, use template literals to print the input along with a message informing that the input is not a number.
//    * DONEEEEEnsure that `lowerLimit` is smaller than `upperLimit`.
//      * If input for `lowerLimit` is larger than `upperLimit`, use template literals to print a statement informing the user that the lowerLimit is larger than the upperLimit.
//    * <img src="resources/img/genbuzz-example.png"> 

// //Write your code below this line:
function GenBuzz(startNumber, endNumber) {

    if (typeof startNumber == "number" && typeof endNumber == "number" && startNumber < endNumber) {
        for (let i = startNumber; i <= endNumber; i++) {
            if (i % 15 == 0) {
                console.log("genBuzz")
            } else if (i % 5 == 0) {
                console.log("Buzz")
            } else if (i % 3 == 0) {
                console.log("Gen")
            } else {
                console.log(i);
            }
        }
    } else if (startNumber > endNumber) {
        console.log(`${startNumber} is greater than ${endNumber}. Please change this.`)
    } else {
        console.log(`${startNumber} or ${endNumber} is not a number.`)
    }

}

GenBuzz(3, 30);
GenBuzz(4, 2)

// 2. Leap Year

// // A leap year is a year containing one additional day added to keep the calendar year 
// synchronized with the astronomical or seasonal year. Because seasons and astronomical events do not 
// repeat in a whole number of days, calendars that have the same number of days in 
// each year drift over time with respect to the event that the year is supposed to track. 
// By inserting an additional day or month into the year, the drift can be corrected. 
// A year that is not a leap year is called a common year.


//Ifs
// Every year that is exactly divisible by four is a leap year,
// except for years that are exactly divisible by 100, 



// but these centurial years are leap years if they are exactly divisible by 400. 



// For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

// Write a program that returns a message informing a user 
// whether or not the year that is input is a leap year. 
// Ex. When `isLeapYear(2000)` is called, it should return the value `2000 is a Leap Year`. 
// Test your code by printing the funcition's output to the console.

//Write your code below this line:

function isLeapYear(year) {

    if (year % 400 == 0) {
        console.log(`${year} is a leap year!`)
    } else if (year % 100 == 0) {
        console.log(`${year} is nota leap year :(`)
    } else if (year % 4 == 0) {
        console.log(`${year} is a leap year!`)
    } else {
        console.log(`${year} is nota leap year :(`)
    }


}

isLeapYear(2000);
isLeapYear(1000)
isLeapYear(2022)

// 3. Perfect Square

// A perfect square is a number that can be expressed as the product of two equal integers. 
// For example, 9 is a perfect square because it can be expressed as 3 * 3 (the product of two equal integers). 
// 16 is a perfect square because it can be expressed as 4 * 4 (the product of two equal integers). 
// 5 is NOT a perfect square because it cannot be expressed as the product of two equal integers. 
// 7 is not a perfect square because you cannot express it as the product of two equal integers.

// Write code to create a function that accepts a number and 
// returns true if the number is a perfect square, otherwise it returns false.

// You may not use the built-in Math.sqrt method

//Write your code below this line:

function perfectSqr(number) {
    
    for (let i = 1; i * i <= number; i++) {
        if (i * i == number) {
            console.log(`${number} is a perfect square!`)
        } else if (i * i !== number) {
            console.log("The number's not perfect, but nobody is :)")
        }

    }
}

perfectSqr(9)
perfectSqr(10)
