# Sudoku Solver

Sudoku Solver is a simple, brute force algorithm for solving sudoku puzzles using backtracking.

## Installation

Use `npm` to install the dependencies:

```
npm i @sanschristo/sudoku-solver
```

## Usage

```typescript
import { Board, Game } from '@sanschristo/sudoku-solver';

const board: Board = [
    [0, 7, 0,  2, 0, 1,  0, 5, 0],
    [0, 0, 0,  0, 4, 0,  0, 0, 0],
    [9, 0, 8,  0, 0, 0,  1, 0, 4],

    [6, 0, 4,  0, 0, 0,  2, 0, 3],
    [0, 9, 0,  0, 0, 0,  0, 6, 0],
    [0, 3, 2,  0, 0, 0,  7, 1, 0],

    [8, 0, 0,  9, 0, 7,  0, 0, 2],
    [0, 0, 0,  1, 0, 6,  0, 0, 0],
    [0, 0, 0,  0, 8, 0,  0, 0, 0]
];

const game = new Game(board);

game.solve();
game.logBoard();
```
