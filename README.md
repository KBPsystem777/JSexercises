JavaScript Exercises
======
Solutions and explanation to JS exercises.

This is not a cheat sheet!

I made this compilation while solving JavaScript algorithms in [FreeCodeCamp](https://www.freecodecamp.org) and [Edabit](https://edabit.com/). I thought this must be a helpful guide for people trying to get up and running in web development paradigm.

------



### Find the smallest number in an array

```
function findSmallest(arr) {
    return Math.min(...arr)
}
```
Useful Links:


[Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

---
### Sort strings by Alphabetical Order
```
function AlphabeticalOrder(x) {
    return x.split('').sort().join(')
}
```
Useful Links:


[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


[Array.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

### Factorialize a number
```
function factorializer(int) {
    if(int <= 1) {
        return 1;
    } else {
        return int * factorializer(int - 1);
    }
}
```
Useful Links:


[What is Factorial?](https://en.wikipedia.org/wiki/Factorial)


[Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)

[If and Else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

---

### Identify if a number is Odd or Even?
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

### Eliminate all odd numbers in an array.
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


## Bugs? Issues?

Please feel free to submit an [issue](https://github.com/KBPsystem777/JSexercises/issues/new)

[Pull Requests](https://github.com/KBPsystem777/JSexercises/pulls) are accepted as well

---

##### [MIT License](https://github.com/KBPsystem777/JSexercises/blob/master/LICENSE.md) | Copyright(c) 2018 [Koleen Paunon](https://koleenbp.now.sh)