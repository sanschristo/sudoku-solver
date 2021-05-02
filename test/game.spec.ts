import { Board } from '../src/models/board';

require('jest');
import { Game } from '../src/game';

describe('InFns', () => {
    let sampleGameData: Board;
    let game: Game;
    beforeEach(() => {
        sampleGameData = [
            [1, 2, 3,   0, 0, 0,   0, 0, 0],
            [4, 5, 6,   0, 0, 0,   0, 0, 0],
            [7, 8, 0,   0, 0, 0,   0, 0, 0],

            [0, 0, 0,   1, 0, 3,   0, 0, 0],
            [0, 0, 0,   0, 7, 0,   0, 0, 0],
            [0, 0, 0,   4, 0, 8,   0, 0, 0],

            [0, 0, 0,   0, 0, 0,   0, 0, 0],
            [0, 0, 0,   0, 0, 0,   0, 0, 0],
            [0, 0, 0,   0, 0, 0,   0, 0, 0]
        ];
        game = new Game(sampleGameData);
    });


    describe('isInRow', () => {
        it('returns true if guess in row', () => {
            const result = game.isInRow(0, 3);

            expect(result).toEqual(true);
        });

        it('returns false if guess not in row', () => {
            const result = game.isInRow(0, 4);

            expect(result).toEqual(false);
        });
    });

    describe('isInCol', () => {
        it('returns true if guess in col', () => {
            const result = game.isInCol(1, 8);

            expect(result).toEqual(true);
        });

        it('returns false if guess not in col', () => {
            const result = game.isInCol(2, 1);

            expect(result).toEqual(false);
        });
    });

    describe('isInBox', () => {
        it('returns true if guess in box', () => {
            const result = game.isInBox(4, 4, 8);

            expect(result).toEqual(true);
        });

        it('returns false if guess not in box', () => {
            const result = game.isInBox(4, 4, 6);

            expect(result).toEqual(false);
        });
    });

    describe('isPossible', () => {
        it('returns true if possible', () => {
            const result = game.isPossible(4, 5, 5);

            expect(result).toEqual(true);
        });

        it('returns false if not possible', () => {
            const result = game.isPossible(4, 5, 8);

            expect(result).toEqual(false);
        });
    });

    describe('findUnsolvedPosition', () => {
        const filledBoard: Board = [
            [1, 2, 3,   1, 1, 1,   1, 1, 1],
            [4, 5, 6,   1, 1, 1,   1, 1, 1],
            [7, 8, 1,   1, 1, 1,   1, 1, 1],

            [1, 1, 1,   1, 1, 3,   1, 1, 1],
            [1, 1, 1,   1, 7, 1,   1, 1, 1],
            [1, 1, 1,   4, 1, 8,   1, 1, 1],

            [1, 1, 1,   1, 1, 1,   1, 1, 1],
            [1, 1, 1,   1, 1, 1,   1, 1, 1],
            [1, 1, 1,   1, 1, 1,   1, 1, 1]
        ];

        it('returns false if no unsolved spaces exist', () => {
            const newGame = new Game(filledBoard);

            const result = newGame.findUnsolvedPosition();

            expect(result).toBeUndefined();
        });

        it('returns coordinates of first unsolved space', () => {
            const result = game.findUnsolvedPosition();

            expect(result).toEqual([0, 3])
        });
    });
});
