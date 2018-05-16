JavaScript Exercises
======
Solutions and explanation to JS exercises.

This is not a cheat sheet!

I made this compilation while solving JavaScript algorithms in [FreeCodeCamp](https://www.freecodecamp.org) and [Edabit](https://edabit.com/). I thought this must be a helpful guide for people trying to get up and running in web development paradigm.

------



## Find the smallest number in an array

*Create a function that will display the smallest value in the array.*

**Example:**

```
> console.log(findSmallest([30, 45, 60, 7]));

> 1
```

**Useful Links:**


[Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)


**Solution:**
```
function findSmallest(arr) {
    return Math.min(...arr)
}
```

---
## Sort strings by Alphabetical Order

*Function that will return your string in Alphabetical order* 

**Example:**

```
> console.log(AlphabeticalOrder('hello'));

> "ehllo"
```


**Useful Links:**


[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


[Array.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


**Solution:**

```
function AlphabeticalOrder(str) {
    return str.split('').sort().join(')
}
```


---

## Factorialize a number

*In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.*
*In simple terms, the Factorial of 7 is solved like this:*

**7 * 6 * 5 * 4 * 3 * 2 * 1 = 5,040**

**Example:**

```
> console.log(factorializer(7));

> 5040
```

**Useful Links:**


[What is Factorial?](https://en.wikipedia.org/wiki/Factorial)


[Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)

[If and Else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)


**Solution:**


```
function factorializer(int) {
    if(int <= 1) {
        return 1;
    } else {
        return int * factorializer(int - 1);
    }
}
```

---

## Identify if a number is Odd or Even?
```
function oddOrEven(int) {
    let ouput = int % 2;
    if(output == 0) {
        return "That number is even"
    } else {
        return "That number is odd"
    }
}
```
Useful Links:


[Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())

---

## Eliminate all odd numbers in an array.
```
function evenOnly(arr) {
    let result = arr.filter(arr => arr % 2 == 0);
    return result;
}
```
Useful Links:


[Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())

---

## Return numbers only
```
function numbersOnly(arr) {
    return arr.filter(arr => typeof arr == 'number');
};

```
Useful Links:


[Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---


## Add up the numbers
```
function addUp(num) {
    if(num <= 1) {
        return num;
    } else {
        return num + addUp(num - 1);
    }
}
```
Useful Links:


[Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)

[1 + 2 + 3 + 4 + ⋯](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)

---



## Return the Min, Max, Length and Average of an Array
```
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
Useful Links:


[Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

[Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

[Array.reduce](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

---





## Bugs?, Issues?, Contribute?

Please feel free to submit an [Issue](https://github.com/KBPsystem777/JSexercises/issues/new) or [Pull Requests](https://github.com/KBPsystem777/JSexercises/pulls)

---

#### [MIT License](https://github.com/KBPsystem777/JSexercises/blob/master/LICENSE.md) | Copyright(c) 2018 [Koleen Paunon](https://koleenbp.now.sh)