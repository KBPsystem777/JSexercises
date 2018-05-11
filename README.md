JavaScript Exercises
======
Solutions and explanation to JS exercises.


------



### Find the smallest number in an `array`

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


[What is Factorial?](https://en.wikipedia.org/wiki/Factorial#Applications)


[Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)

[If and Else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

---


## Bugs? Issues?

Please feel free to submit an [issue](https://github.com/KBPsystem777/JSexercises/issues/new)

## [MIT License](https://github.com/KBPsystem777/JSexercises/blob/master/LICENSE.md)


Copyright(c) 2018 [Koleen Paunon](https://koleenbp.now.sh)