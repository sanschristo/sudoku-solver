import { Board } from './models/board';
import { CheckerFn } from './models/checker-fn';
import { Row } from './models/row';

export class Game {
    private startTime: number;
    private endTime: number;
    board: Board;
    steps: Board[];

    constructor(board: Board) {
        this.board = board;
        this.steps = [];
    }

    isInRow: CheckerFn = (row, guess) => {
        return this.board[row].includes(guess);
    };

    isInCol: CheckerFn = (col, guess) => {
        let inCol = false;
        this.board.forEach((row: Row) => {
            if (row[col] === guess) inCol = true;
        });

        return inCol;
    };

    isInBox(row: number, col: number, guess: number): boolean {
        let inBox = false;

        let boxStartY = (Math.floor(row / 3) * 3);
        let boxStartX = (Math.floor(col / 3) * 3);

        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (this.board[boxStartY + y][boxStartX + x] === guess) {
                    inBox = true;
                }
            }
        }

        return inBox;
    };

    isPossible(row: number, col: number, guess: number): boolean {
        let possible = true;

        if (this.isInBox(row, col, guess) ||
            this.isInRow(row, guess) ||
            this.isInCol(col, guess) ||
            this.isInBox(row, col, guess)
        ) {
            possible = false;
        }

        return possible;
    }

    findUnsolvedPosition(): [number, number] {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (this.board[y][x] === 0) {
                    return [y, x]
                }
            }
        }

        return;
    }

    solve(): Board {
        if (!this.startTime) {
            this.startTime = Date.now();
        }

        const unsolvedPos: [number, number] = this.findUnsolvedPosition();

        if (!unsolvedPos) {
            return this.board;
        }

        const y = unsolvedPos[0];
        const x = unsolvedPos[1];

        if (this.board[y][x] === 0) {
            for (let guess = 1; guess <= 9; guess++) {
                if (this.isPossible(y, x, guess)) {
                    this.board[y][x] = guess;
                    this.steps.push(JSON.parse(JSON.stringify(this.board)));
                    this.solve();
                }
            }
        }

        if (this.findUnsolvedPosition()) {
            this.board[y][x] = 0;
        }

        this.endTime = Date.now();

        return this.board;
    }

    getSolveTimeSeconds() {
        if (!this.startTime || !this.endTime) return;

        return (this.endTime - this.startTime) / 1000;
    }

    logBoard() {
        console.log('-------------------------------------');
        for (let l = 0; l < 9; l++) {
            console.log('|', this.board[l].join(' | '), '|');
            console.log('-------------------------------------');
        }
        if (this.endTime) console.log(`\nSolved sudoku in ${this.getSolveTimeSeconds()} seconds`);
    }
}
