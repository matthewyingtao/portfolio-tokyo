---
title: Learn currying by looking at Rambda's source code
description: >-
  Let's walk through Rambda's curry function to gain a deeper understanding of
  how to implement currying in JavaScript.
pubDate: 2022-02-15T11:00:00.000Z
lastEdit: 2022-02-15T11:00:00.000Z
heroImage: /uploads/dGwDhpRTrDNd3gFybvTvQy;303x117.jpeg
layout: ../../../layouts/BlogPost.astro
---

## What is currying and how do I use it?

Currying a function is a technique where it transforms a function into one that expects its arguments one at a time. If that sounds like a word salad to you, don't worry, it's easier to understand if I show you an example. Imagine you have a function `add` that takes two arguments and simply adds them together. Here's how the function calls differ.

```javascript
// standard function call
const total = add(1, 2);

// curried function
const total = add(1)(2);

// you can also make a new function like so
const addOne = add(1);
const total = addOne(2);
```

I don't want to get too far into why currying is useful and when to use it, that's beyond the scope of this post, and also, people have already explained the "why" much better than I can. I recommend [Simon Schwartz's fantastic article on the topic](https://medium.com/dailyjs/why-the-fudge-should-i-use-currying-84e4000c8743) for a quick introduction. I will also assume you're familliar with the Spread Syntax in JavaScript, if not, the MDN docs [have your back](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

## Why look at the source?

The vast majority of developers don't implement their own currying function, but instead use a library such as lodash or Ramda, which is an open source functional library for JavaScript. It's very understandable why people do this, it saves time, effort and reduces the chance that you make an error implementing it yourself. Despite this, I still think there's value in being able to implement it yourself, to quote Kyle Simpson,

> Code that you don't understand is code you can't trust.

So, let's take a plunge into the source code of Rambda, "a faster and smaller alternative to Ramda".

## Looking at source code

You can go to the source code of any function in Rambda from the [repository on GitHub](an open source functional library for JavaScript), here's the [link to the curry function](https://github.com/selfrefactor/rambda/blob/master/src/curry.js). We're greeted by a tiny function, only 7 lines long.

```javascript
export function curry(fn, args = []) {
  return (..._args) =>
    ((rest) => (rest.length >= fn.length ? fn(...rest) : curry(fn, rest)))([
      ...args,
      ..._args,
    ]);
}
```

I don't know about you, but at first glance, it seems quite cryptic what this function is doing. Let's reformat and rewrite the function a little bit.

```javascript
function curry(fn, args = []) {
  return function (..._args) {
    return ((rest) =>
      rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([
      ...args,
      ..._args,
    ]);
  };
}
```

That's a little bit more readable (at least to me), but it's still hard to tell what's going on. Note that taking the length of a function just returns the number of arguments it accepts. Now lets add some code to show how it works.

```javascript
// the function we want to curry
const add = (a, b) => a + b;

const add2 = curry(add, [2]);

const total = add2(3);

console.log(total); // 5
```

Nice! Now let's step through the function calls. Firstly, `javascript±const add2 = curry(add, [2])`

```javascript
function curry(fn, args = []) {
  return function (..._args) {
    return ((rest) =>
      rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([
      ...args,
      ..._args,
    ]);
  };
}

const add2 = curry(add, [2]);
```

This calls the function `curry` and returns the first statement. So, `add2` is now equivalent to:

```javascript
function add2(..._args) {
  return (function (rest) {
    return rest.length >= add.length ? add(...rest) : curry(add, rest);
  })([2, ..._args]);
}
```

Notice how I've replaced the occurences of `fn` with the `add` function, and the `args` at the end of the function to `2`, which is what we passed in initially as the second argument.

Now what happens when we do `javascript±const total = add2(3)`?

```javascript
function add2(..._args) {
  return (function (rest) {
    return rest.length >= add.length ? add(...rest) : curry(add, rest);
  })([2, ..._args]);
}

const total = add2(3);
```

```javascript
// argument gets passed in, so replace all '_args' with '3'

function add2(3) { // highlight-line
	return (function (rest) {
		return rest.length >= add.length
			? add(...rest)
			: curry(add, rest);
	})([2, 3]); // highlight-line
}
```

```javascript
// run inner function with ([2, 3]) as its argument 'rest'

function (rest = [2, 3]) { // highlight-line
	return [2, 3].length >= add.length // highlight-line
			? add(...rest)
			: curry(add, rest);
})
```

```javascript
// evaluate conditional

function (rest = [2, 3]) {
	// this is true (obviously)
	return 2 >= 2 // highlight-line
			? add(...rest) // so this is returned
			: curry(add, rest);
})
```

```javascript
// finally, call the function

function ([2, 3]) {
	return add(2, 3)
})

const total = 5 // Yay!
```

Note that if `add` accepted more than two arguments, then it would've called `curry` again with `rest` as the parameter. Eventually the `javascript±rest.length >= add.length` would evaluate to true, and the function will be called.
