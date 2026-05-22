# Week 2 — JavaScript Arrays, Objects, Classes & Modules

## Overview
Week 2 contains JavaScript practice programs focused on:
- using **array methods** (`filter`, `map`, `reduce`, `find`, `findIndex`)
- understanding **shallow copy vs deep copy**
- working with **ES6 classes**
- building a small **task manager** using **ES Modules** (`import`/`export`)
- practicing **timers** (`setTimeout`, `setInterval`) with small simulations

---

## Folder Structure

### `Modules/` — Mini Task Manager (ES Modules)
A small task management example split into multiple modules.

- `validator.js`
  - `validateTitle(title)` → checks empty + minimum length
  - `validatePriority(priority)` → allows `low | medium | high`
  - `validateDueDate(date)` → currently returns `true` (placeholder)

- `task.js`
  - Maintains a `tasks` array
  - `addTask(title, priority, dueDate)` → validates and pushes to `tasks`
  - `getAllTasks()` → logs all tasks
  - `completeTask(taskId)` → removes a task using `splice`

- `app.js`
  - Imports from `task.js`
  - Adds sample tasks and prints the task list

---

## Programs in `week-2/`

### 1) Array Method Practice

#### `arrayoperations.js`
Works on a `temperatures` array and demonstrates:
- `filter()` → temperatures greater than 35
- `map()` → Celsius to Fahrenheit conversion
- `reduce()` → average temperature
- `find()` → first temperature above 40
- `findIndex()` → index of temperature 28

#### `advanceArray1.js` — Cart Example
Uses a `cart` array of objects (products) and performs:
- `filter()` → in-stock products
- `map()` → `{ name, totalPrice }`
- `reduce()` → grand total cart value
- `find()` → details of "Mouse"
- `findIndex()` → position of "Keyboard"

#### `advanceArray2.js` — Students Example
Uses a `students` array and performs:
- `filter()` → passed students (marks ≥ 40)
- `map()` → add `grade` field (A/B/C/D)
- `reduce()` → average marks
- `find()` → student with marks 92
- `findIndex()` → index of "Kiran"

#### `advanceArray3.js` — Employees Example
Uses an `employees` array and performs:
- `filter()` → IT department employees
- `map()` → add `netSalary` with 10% bonus
- `reduce()` → total salary payout
- `find()` → employee with salary 30000
- `findIndex()` → index of "Neha"

#### `advanceArray4.js` — Movies Example
Uses a `movies` array and performs:
- `filter()` → Sci-Fi movies
- `map()` → "Title (rating)" strings
- `reduce()` → (intended) average rating calculation
- `find()` → movie "Joker"
- `findIndex()` → index of "Avengers"

#### `advanceArray5.js` — Transactions Example
Uses a `transactions` array and performs:
- `filter()` → credit transactions
- `map()` → extract only amounts
- `reduce()` → final balance (sum of amounts)
- `find()` → first debit transaction
- `findIndex()` → index of transaction with amount 10000

---

### 2) Copying Objects (Spread vs structuredClone)

#### `shallowcopy.js`
- Creates a shallow copy using the spread operator: `{ ...user }`
- Demonstrates that modifying nested properties affects both objects because nested references are shared.

#### `deepCopy.js`
- Creates a deep copy using `structuredClone(order)`
- Modifies nested fields in the copy and logs both objects to verify the original remains unchanged.

---

### 3) Classes

#### `classAssignment.js` — `Book` Class
Implements a `Book` class with:
- `Borrow()` → marks unavailable if available
- `returnBook()` → marks available
- `getInfo()` → logs formatted info
- `isLongBook()` → checks if pages ≥ 300

Also includes:
- creating multiple books
- counting long books
- listing available books

---

### 4) Timers / Simulations

#### `otp.js`
Simulates OTP send & resend flow:
- prints "OTP Sent Successfully"
- runs a countdown using `setInterval`
- allows "resend OTP" after countdown ends

#### `exam-simulator.js`
Simulates exam evaluation using `setTimeout`:
- immediate submit message
- evaluation message after 2 seconds
- result after 4 seconds

---

### 5) Small Spread Operator Exercises

- `exercise1.js` — spread with arrays (copy + add "orange")
- `exercise2.js` — spread with objects (copy + add `age`)

---

## How to Run
Run any file from the repository root:

```bash
node week-2/arrayoperations.js
```

### Running the Modules example
Because `Modules/` uses `import` / `export`, ensure Node runs in ESM mode.

**Option A (recommended):** add a `package.json` at repo root with:
```json
{ "type": "module" }
```

Then run:
```bash
node week-2/Modules/app.js
```

---

## Notes / Possible Improvements
- `validateDueDate()` is currently a placeholder; you can validate proper date format and future dates.
- `task.js` validation condition can be refined depending on whether validators return `true` or an error message.
- In `advanceArray4.js`, the `reduce()` logic for average rating can be updated to correctly sum ratings and divide by length.
