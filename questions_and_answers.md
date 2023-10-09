<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:ReferenceError: greetign is not defined 

<i>In your code, you have a typographical error. You declared a variable named greeting, but when you attempt to log greetign, you misspelled it. JavaScript is case-sensitive, so greeting and greetign are treated as two different variables. Since greetign is not defined anywhere in your code, it will result in a ReferenceError</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 12

<i>In JavaScript, when you use the + operator to add values, it can also be used for string concatenation. In the sum function, you are adding a number (1) to a string ("2"). JavaScript will implicitly convert the number to a string and then concatenate them, resulting in the string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ['🍕', '🍫', '🥑', '🍔']

<i>
The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

In the code, info.favoriteFood initially holds a reference to the first element of the food array, which is "🍕". However, when you later assign "🍝" to info.favoriteFood, it does not modify the food array. Therefore, food remains unchanged, and the console.log(food) statement will output the original array ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Hi there, undefined.

<i>In the sayHi function, you have defined a parameter name, but when you call sayHi() in the console.log statement, you do not provide any argument. In JavaScript, if you don't provide a value for a function parameter, it will be assigned the value undefined by default. Therefore, the function returns "Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 2

<i>In the given code, you are using the forEach method to iterate through the nums array. The callback function (num) => {...} is executed for each element in the array.

In JavaScript, the condition if (num) evaluates to true for all elements of the array except 0, which is considered a falsy value. So the callback function increments the count variable only for non-zero elements. Since there are two non-zero elements in the nums array (1 and 2), the count variable is incremented twice resulting in a final value of 2. Therefore console.log(count) will output 2.</i>

</p>
</details>
