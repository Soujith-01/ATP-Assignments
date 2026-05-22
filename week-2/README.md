# Week 2 - JavaScript Arrays, Objects & Modules

## Overview
This week focuses on writing cleaner JavaScript using **array methods**, understanding **shallow vs deep copy**, practicing **ES6 classes**, and building a small **module-based task manager** using ES Modules.

Most files are simple scripts intended to be run with Node.js for practice and learning.

---

## Folder Structure

### `Modules/`
A mini task manager implemented using ES Modules.
- `app.js` – Entry file that imports functions and runs sample operations
- `task.js` – Core task functions (add, list, complete)
- `validator.js` – Validation helpers for task fields (title, priority, due date)

### Array & Object Practice Files
- `arrayoperations.js` – Practice with `filter`, `map`, `reduce`, `find`, `findIndex` on temperature data
- `advanceArray1.js` → `advanceArray5.js` – Advanced array-method exercises (cart/product-style datasets)
- `shallowcopy.js` – Shallow copy using spread operator and observing nested object behavior
- `deepCopy.js` – Deep copy using `structuredClone` and verifying nested changes don’t affect original

### Other Practice
- `classAssignment.js` – `Book` class with methods (borrow/return/info/long-book check) and basic loops
- `otp.js` – OTP resend simulation using `setInterval` countdown
- `exercise1.js`, `exercise2.js` – Small JavaScript exercises
- `exam-simulator.js` – Small simulation script

---

## Key Concepts Covered

### 1) Array Methods
Practiced core methods that help write concise and readable code:
- `filter()` – select items by condition (e.g., in-stock products)
- `map()` – transform data into new shapes (e.g., `{name, totalPrice}`)
- `reduce()` – compute totals/aggregates (e.g., grand total, average temperature)
- `find()` / `findIndex()` – locate first matching item / its index

### 2) Shallow vs Deep Copy
- **Shallow copy** (`{...obj}`) copies only top-level properties; nested references stay shared.
- **Deep copy** (`structuredClone(obj)`) clones nested objects so changes do not leak back.

### 3) ES6 Classes
Used a `Book` class to practice:
- constructors and instance properties
- instance methods
- simple state changes (`isAvailable`) and logic (`isLongBook`)

### 4) JavaScript Modules (ESM)
Implemented separation of concerns using imports/exports:
- `task.js` exports task operations
- `validator.js` exports validation helpers
- `app.js` imports and executes sample flows

---

## How to Run (Node.js)

> These files are small scripts. Run them individually.

### Run any file
```bash
node week-2/arrayoperations.js
```

### Run the Modules mini project
```bash
node week-2/Modules/app.js
```

**Note:** If you face an error like `Cannot use import statement outside a module`, run Node in ESM mode by either:
- adding `"type": "module"` in a `package.json`, or
- renaming module files to `.mjs`.

---

## Notes / Improvements (Optional)
- `validateDueDate()` currently returns `true` always; it can be enhanced to check valid date format and future dates.
- `addTask()` validation condition can be adjusted depending on whether validators return `true` or an error message.
