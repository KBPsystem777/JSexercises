[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/) [![Open Source Helpers](https://www.codetriage.com/kbpsystem777/jsexercises/badges/users.svg)](https://www.codetriage.com/kbpsystem777/jsexercises)

![JSEx Logo](/jsexercises.png)

# JavaScript Exercises

Solutions and explanation to JS exercises.

This is not a cheat sheet!

I made this compilation while solving JavaScript algorithms in [FreeCodeCamp](https://www.freecodecamp.org) and [Edabit](https://edabit.com/). I thought this must be a helpful guide for people trying to get up and running in web development paradigm.

---

# Table Of Contents

- [Find the Smallest number in an Array](#find-the-smallest-number-in-an-array)
- [Sort Strings Alphabetically](#sort-strings-by-aplhabetical-order)
- [Factorialize a Number](#factorialize-a-number)
- [Indentify if a Number is Odd or Even](#identify-if-a-number-is-odd-or-even)
- [Eliminating the Odds](#eliminate-all-odd-numbers-in-an-array)
- [Numbers only](#return-numbers-only)
- [Add all the numbers](#add-up-the-numbers)
- [Min, Max, Length and Average](#return-the-min-max-length-and-average-of-an-array)
- [Sort in Ascending Order](#sort-numbers-in-ascending-number)
- [Number to Roman Numerals (_from FreeCodeCamp_)](#convert-numbers-in-roman-numerals)
- [Absolutely Sum](#absolutely-sum)
- [Triangle Loop (_from Eloquent JavaScript_)](#looping-a-triangle)
- [Words Count](#count-the-number-of-words)
- [Multiply by Length](#multiply-by-length)
- [Ends with xxx](#ends-with-xxx)
- [Repeating Letters](#repeating-letters)
- [Index Location](#find-the-correct-index-location)
- [Do ... while loop](#do-run-this-function-while)
- [**License**](https://github.com/KBPsystem777/JSexercises/blob/master/LICENSE.md)

---

## [Find the smallest number in an array](#smallest-number)

_Create a function that will display the smallest value in the array._

**Example:**

```javascript
> console.log(findSmallest([30, 45, 60, 7]));
> 1
```

**Reference:**

- [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

**Solution:**

```javascript
function findSmallest(arr) {
  return Math.min(...arr);
}
```

---

## [Sort strings by Alphabetical Order](#alphabetically-sorted)

_Function that will return your string in Alphabetical order_

**Example:**

```javascript
> console.log(AlphabeticalOrder('hello'));
> "ehllo"
```

**Reference:**

- [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

* [Array.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

* [Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

**Solution:**

```javascript
function AlphabeticalOrder(str) {
  return str
    .split("")
    .sort()
    .join("");
}
```

---

## [Factorialize a number](#factorialize)

_In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n._
_In simple terms, the Factorial of 7 is solved like this:_

**7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040**

**Example:**

```javascript
> console.log(factorializer(7));
> 5040
```

**Reference:**

- [What is Factorial?](https://en.wikipedia.org/wiki/Factorial)

* [Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)

* [If and Else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

**Solution:**

```javascript
function factorializer(int) {
  if (int <= 1) {
    return 1;
  } else {
    return int * factorializer(int - 1);
  }
}
```

---

## [Identify if a number is Odd or Even?](#odd-or-even)

_A function that lets you know if a number is Even or Odd_

**Example:**

```javascript
> console.log(oddOrEven(7));
> "Odd"
```

**Reference:**

- [Modulo](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()>)

**Solution:**

```javascript
function oddOrEven(int) {
  let ouput = int % 2;
  if (output == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

---

## [Eliminate all odd numbers in an array.](#odd-elimination)

_Remove all Odd number(s) in an array and return a new array that contains Even numbers only_

**Example:**

```javascript
> console.log(evenOnly([1, 2, 3, 4, 5, 6]));
> [ 2, 4, 6 ]
```

**Reference:**

- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- [Modulo](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()>)

**Solution:**

```javascript
function evenOnly(arr) {
  let result = arr.filter(arr => arr % 2 == 0);
  return result;
}
```

---

## [Return numbers only](#numbers-only)

_Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array_

**Example:**

```javascript
> console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
> [ 3, 7, 13 ]
```

**Reference:**

- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

**Solution:**

```javascript
function numbersOnly(arr) {
  return arr.filter(arr => typeof arr == "number");
}
```

---

## [Add up the numbers](#adding-numbers)

_Return the sum of a number going back to it's root._ _In other words, the function will work like this:_

**addUp(5);**

// _5 + 4 + 3 + 2 + 1 + 0_ = **15**

**Example:**

```javascript
> console.log(addUp(8));
> 36
```

**Reference:**

- [Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)

- [1 + 2 + 3 + 4 + ⋯](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)

**Solution:**

```javascript
function addUp(num) {
  if (num <= 1) {
    return num;
  } else {
    return num + addUp(num - 1);
  }
}
```

---

## [Return the Min, Max, Length and Average of an Array](#min-max-len-ave)

_Create a function that will accept an array and do the following:_

- _Get the lowest element_

- _Get the highest element_

- _Get the length of array_

- _Get the Average of all element;_

- _Store these criteria in a new array_

**Example:**

```javascript
> console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
> [ 3, 100, 5, 40 ]
```

**Reference:**

- [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

- [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

- [Array.reduce](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

**Solution:**

```javascript
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const len = arr.length;

  //Reducer for get Average function
  const ave = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / len;
  const average = ave(arr);

  //Return output
  return [min, max, len, average];
}
```

---

## [Sort Numbers in Ascending Order](#sort-ascend)

_`Array.sort()` sorts the **strings** alphabetically. What if we want to sort **numbers** from lowest to highest? Will it produce a correct output?_

**Example:**
_This is what happen if we apply `Array.sort()` to numbers:_

```javascript
> arr = [45, 34, 23, 12, 7]
> console.log(arr.sort());
> [ 12, 23, 34, 45, 7 ]
```

_Output is not correct right?, whereas we are expecting this to be the return value:_

```javascript
> console.log(sortNumsAscending([7, 13, 3, 77, 100]));
> [ 3, 5, 40, 100 ]
```

**Reference:**

- [Sorting in JavaScript](http://www.javascriptkit.com/javatutors/arraysort.shtml)

- [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

**Solution:**

```javascript
function sortNumsAscending(arr) {
  let sorter = (a, b) => {
    return a - b;
  };

  if (arr == []) {
    return [];
  } else if (arr == null) {
    return [];
  } else {
    return arr.sort(sorter);
  }
}
```

---

## [Convert Numbers in Roman Numerals](#number-to-roman)

_Convert the given number to a Roman Numeral_

**Example:**

```javascript
> romanNumbers(1989);
> MCMLXXXIX
```

**Reference:**

- [Roman Numerals](https://www.mathsisfun.com/roman-numerals.html)

- [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

- [Array.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

- [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

**Solution:**

```javascript
function romanNumbers(num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let roman = "";

  for (i = 0; i < values.length; i++) {
    while (values[i] <= num) {
      roman += romanNumerals[i];
      num -= values[i];
    }
  }
  return roman;
}

console.log(romanNumbers(1989));
```

## [Absolutely Sum](#abs-sum)

_Return the absolute sum of all the array elements_

**Example:**

```javascript
> getAbsSum([-1, -3, -5, -4, -10, 0]);
> 23
```

**Reference:**

- [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- [Math.abs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

**Solution:**

```javascript
function getAbsSum(arr) {
  const reducer = (acc, currVal) => {
    return acc + currVal;
  };

  return Math.abs(arr.reduce(reducer));
}
```

---

## [Looping a Triangle](#triangle-loop)

_Form a triangle using hash tags_

**Example:**

```javascript
> #
> ##
> ###
> ####
> #####
> ######
> #######
```

**Reference:**

- [Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

**Solution:**

```javascript
for (x = "#"; x.length <= 7; x += x) {
  console.log(x);
}
```

---

## [Count the number of Words](#words-count)

_Return how many words was given_

**Example:**

```javascript
> countWords('hello from kbpsystem!');
> 3
```

**Reference:**

- [String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

- [Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

**Solution:**

```javascript
function countWords(str) {
  return str.split(" ").length;
}
```

---

## [Multiply by Length](#multiply-by-length)

_Multiply all elements in an array by it's length_

**Example:**

```javascript
> MultiplyByLength([4,1,1]);
> [12, 3, 3]
```

**Reference:**

- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

- [Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

- [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Solution:**

```javascript
function MultiplyByLength(arr) {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    arr[i] = arr[i] * len;
  }
  return arr;
}
```

---

## [Ends With "xxx"](#ends-with-xxx)

_Create a function that will check if str1 ends with the characters in str2_

**Rules:**

- Take two strings as argument

- Determine if second string matches ending of the first string

- Return boolean value

**Example:**

```javascript
> console.log(checkEnding("samurai", "zi"));
> false
```

**Reference:**

- [String.prototype.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

- [Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method joins all elements of an array (or an array-like object) into a string and returns this string.

**Solution:**

```javascript
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}
```

---

## [Repeating Letters](#repeating-letters)

_Create a function that will repeat each string character two times_

**Example:**

```javascript
> console.log(doubleChar('exercise'));
> eexxeerrcciissee
```

**Reference:**

- [_Array.prototype.split_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) The `split()` method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

- [_Array.prototype.map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

- [_Array.prototype.join_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) This method joins all elements of an array (or an array-like object) into a string and returns this string.

**Solution:**

```javascript
function doubleChar(str) {
  let x = str.split("");
  return x.map(x => x.repeat(2)).join("");
}
```

**Explanation:**
_On the solution above, first we apply split method on the string argument and then store it in a variable called `x`._
_Next, we use the map function in order to performa duplication process on each element of the string, which was considered as array on this case because we just applied a split method on the string. Once duplication process is done, we call the `join()` method. Applying this method will convert the array back to being a string again but this time with a new duplicated values_

---

## [Find the correct Index location](#locate-index)

_Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for._

**Example:**

```javascript
> console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
> 1
```

**Reference:**

- [Array.Prototype.indexOf()](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. Note that this method is not widely supported in all browsers so a **Polyfill is needed**.

**Solution:**

```javascript
function findIndex(arr, element) {
  return arr.indexOf(element);
}
```

**Explanation:**
_`findIndex` function takes two arguments. First is the array to be monitored and then the last is the element on the array that needs to be located._
_JavaScript has a built in method called `indexOf()` and we used that in order to locate the index location of a certain element in an array. This method loops through the array locating the index value of an element_

---

## [Do run this function while](#do-run-this-function-while)

This exercise is courtesy of [FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do---while-loops)

_This exercise is an implementation of [do while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) statement. Our goal here is to keep on running a function/statement, set a paramater and as soon as the result of the parameter evaluates to `false`, the function/statement execution will stop_

**Example:**

```javascript
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
```

**Reference:**

- [do while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) Definition from our friend in Mozilla:
  > The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

**Solution:**

```javascript
// Setup
> var myArray = [];
> var i = 10;

> // Only change code below this line.
> do {
    myArray.push(i);
    i++;
    console.log(i)
} while (i < 11)
```

---

## Bugs, Issues and want to Contribute?

We're on CodeTriage!

[![Open Source Helpers](https://www.codetriage.com/kbpsystem777/jsexercises/badges/users.svg)](https://www.codetriage.com/kbpsystem777/jsexercises)

Please feel free to submit an [Issue](https://github.com/KBPsystem777/JSexercises/issues/new) or [Pull Requests](https://github.com/KBPsystem777/JSexercises/pulls)

---

#### [MIT License](https://github.com/KBPsystem777/JSexercises/blob/master/LICENSE.md) | Copyright(c) 2018 [Koleen Paunon](https://koleenbp.now.sh)
