### SENG8120 – Modern Automated Testing (Version: Alpaca)

### Purpose

This repository contains **Assignment 3**, where we used **Jest** to create a fully tested set of paint project calculation utilities using **TypeScript**.

Each function has been unit tested with a focus on edge cases, proper error handling, and code quality.

---

### Repository Usage

Clone this repository and navigate into the project folder:

```bash
git clone git@github.com:NithinL11/Assignment3_TS.git
cd Assignment3_TS
```

---

### Installing Dependencies

Run the following to install all required packages:

```bash
npm install
```

---

### Running the Project (if applicable)

To build and run the project:

```bash
npm run build
npm start
```
### Running the Tests

This project uses **Jest** as the testing framework.

### Run all tests:
```bash
npm run test
```
or
```bash
npx jest
```

### Keep tests running on file changes:
```bash
npm run test -- --watch
```

### Run a specific test file:
```bash
npx jest src/path/to/your/testFile.test.ts
```

---

### What the Project Contains

| Function | Description |
|----------|-------------|
| `calculateCanvasDiagonal` | Calculates diagonal using Pythagorean theorem |
| `calculateCanvasSize` | Calculates area or perimeter of a canvas |
| `convertAreaToSquareFeet` | Converts square meters to square feet |
| `estimatePaintingTime` | Estimates painting time from area and speed |
| `paintRequiredCalculator` | Computes paint needed for a given area and coverage |
| `paintRequiredForMultipleCoats` | Considers number of coats in paint calculation |
| `calculatePaintCost` | Calculates cost based on liters and price per liter |
| `calculateTotalCost` | Sums up labor and paint costs |

---

### For the Marker

- Run `npx jest` to verify that all tests pass
- All logic and edge cases are tested
- No additional setup is required after running `npm install`

GITLINK https://github.com/NithinL11/Assignment3_TS#
