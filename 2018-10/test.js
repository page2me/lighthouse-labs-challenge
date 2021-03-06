/*
* TEST.JS - Test challenge functions.
* - Tests functions with Node's built-in assert module.
* - Only tests functions required by the challenge so that other participants can use these tests, too.
* - Tests are based on the examples given in challenge problems since there's no way to know what tests the challenge uses.
*/

// Modules to format and style console logs
const chalk = require('chalk');
const heredoc = require('heredocument');

// Module to test unexported functions
const rewire = require('rewire');

// Built-in Node.js assert module
const assert = require('assert');

// Include functions from solution JS file
const solution = rewire('./index');

// Set GRID variable
const S = 'v';
const R = '^';
const C = '~';
const _ = '';
const grids = [
  [
    /*        A B C D E F G H I J */
    /*  1 */ [_,_,_,R,_,_,_,_,_,_],
    /*  2 */ [_,_,S,_,C,_,_,_,_,_],
    /*  3 */ [_,S,_,_,R,R,_,_,_,_],
    /*  4 */ [_,_,_,_,R,R,_,_,_,_],
    /*  5 */ [_,_,_,_,_,_,_,_,S,_],
    /*  6 */ [_,_,_,_,_,_,_,_,_,_],
    /*  7 */ [_,_,_,_,_,_,_,_,_,_],
    /*  8 */ [_,R,C,C,_,_,_,R,_,_],
    /*  9 */ [_,R,_,C,C,_,_,_,_,_],
    /* 10 */ [_,R,_,_,C,C,_,_,_,_],
  ],
  [
    /*        A B C D E F G H I */
    /*  1 */ [_,C,R,_,_,_,S,_,_],
    /*  2 */ [_,S,_,C,_,R,_,_,_],
    /*  3 */ [_,_,_,_,R,_,_,_,S],
    /*  4 */ [S,C,_,C,R,_,_,_,_],
    /*  5 */ [_,_,_,_,_,C,_,S,_],
    /*  6 */ [_,_,R,_,_,_,_,_,_],
    /*  7 */ [_,S,_,_,_,R,_,_,R],
    /*  8 */ [R,C,C,_,C,_,R,_,_],
  ],
  [
    /*        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z */
    /*  1 */ [_,_,_,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  2 */ [_,_,_,_,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  3 */ [_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
    /*  4 */ [_,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  5 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  6 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  7 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  8 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /*  9 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 10 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 11 */ [R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 12 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 13 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 14 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 15 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 16 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 17 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 18 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 19 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 20 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 21 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 22 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 23 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 24 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 25 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 26 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 27 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 28 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 29 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 30 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 31 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 32 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 33 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 34 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 35 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 36 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 37 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 38 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 39 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 40 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
    /* 41 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,S,_],
    /* 42 */ [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,S],
  ],
];

// Test configuration
const challenges =
  [
    [
      {
        name: 'countRows()',
        func: 'countRows',
        args: [],
        expected: [
          10, // The challenge instructions does say this should return 12, but the given GRID variable clearly has 10 items.
          8,
          42,
        ],
      },
    ],
    [
      {
        name: 'countColumns()',
        func: 'countColumns',
        args: [],
        expected: [
          10,
          9,
          26,
        ],
      },
    ],
    [
      {
        name: 'gridSize()',
        func: 'gridSize',
        args: [],
        expected: [
          '10 x 10',
          '9 x 8',
          '26 x 42',
        ],
      },
    ],
    [
      {
        name: 'totalCells()',
        func: 'totalCells',
        args: [],
        expected: [
          100,
          72,
          1092,
        ],
      },
    ],
    [
      {
        name: 'convertColumn("C4")',
        func: 'convertColumn',
        args: ['C4'],
        expected: [
          2,
          2,
          2,
        ],
      },
    ],
    [
      {
        name: 'lightCell("B4")',
        func: 'lightCell',
        args: ['B4'],
        expected: [
          '',
          C,
          R,
        ],
      },
    ],
    [
      {
        name: 'isRock("D1")',
        func: 'isRock',
        args: ['D1'],
        expected: [
          true,
          false,
          true,
        ],
      },
    ],
    [
      {
        name: 'isCurrent("E2")',
        func: 'isCurrent',
        args: ['E2'],
        expected: [
          true,
          false,
          false,
        ],
      },
    ],
    [
      {
        name: 'isShip("B3")',
        func: 'isShip',
        args: ['B3'],
        expected: [
          true,
          false,
          false,
        ],
      },
    ],
    [
      {
        name: 'lightRow(2)',
        func: 'lightRow',
        args: [2],
        expected: [
          ["", "", "v", "", "~", "", "", "", "", ""],
          [_, S, _, C, _, R, _, _, _],
          [_, _, _, _, R, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        ],
      },
    ],
    [
      {
        name: 'lightColumn("C")',
        func: 'lightColumn',
        args: ['C'],
        expected: [
          ["", "v", "", "", "", "", "", "~", "", ""], // Challenge instructions also seem to give bad values for this one
          [R, _, _, _, _, R, _, C],
          [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        ],
      },
    ],
    [
      {
        name: 'lightCell("Z3")',
        func: 'lightCell',
        args: ['Z3'],
        expected: [
          false,
          false,
          C,
        ],
      },
      {
        name: 'lightCell("A11")',
        func: 'lightCell',
        args: ['A11'],
        expected: [
          false, // Challenge seems to accept other values for this
          false,
          R,
        ],
      },
    ],
    [
      {
        name: 'allRocks()',
        func: 'allRocks',
        args: [],
        expected: [
          ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10'],
          ['C1', 'F2', 'E3', 'E4', 'C6', 'F7', 'I7', 'A8', 'G8'],
          ['D1', 'E2', 'B4', 'A11'],
        ],
      },
      {
        name: 'allCurrents()',
        func: 'allCurrents',
        args: [],
        expected: [
          ['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10'],
          ['B1', 'D2', 'B4', 'D4', 'F5', 'B8', 'C8', 'E8'],
          ['B3', 'Z3'],
        ],
      },
    ],
    [
      {
        name: 'allShips()',
        func: 'allShips',
        args: [],
        expected: [
          ['C2', 'B3', 'I5'],
          ['G1', 'B2', 'I3', 'A4', 'H5', 'B7'],
          ['Y41', 'Z42'],
        ],
      },
    ],
    [
      {
        name: 'firstRock()',
        func: 'firstRock',
        args: [],
        expected: [
          'D1',
          'C1',
          'D1',
        ],
      },
    ],
    [
      {
        name: 'firstCurrent()',
        func: 'firstCurrent',
        args: [],
        expected: [
          'E2',
          'B1',
          'B3',
        ],
      },
    ],
    [
      {
        name: 'shipReport()',
        func: 'shipReport',
        args: [],
        expected: [
          ['C2', 'I5'], // Challenge instructions also seem to give bad values for this one
          ['G1', 'B7'], // This is first and last when serialized row by row, not furthest west and east
          ['Y41', 'Z42'],
        ],
      },
    ],
    [
      {
        name: 'howDangerous("E2")',
        func: 'howDangerous',
        args: ['E2'],
        expected: [
          50,
          0,
          100,
        ],
      },
      {
        name: 'howDangerous(E3)',
        func: 'howDangerous',
        args: ['E3'],
        expected: [
          100,
          100,
          0,
        ],
      },
    ],
    [
      {
        name: 'percentageReport()',
        func: 'percentageReport',
        args: [],
        expected: [
          [9.00, 7.00],
          [12.50, 11.11],
          [0.37, 0.18],
        ],
      },
    ],
    [
      {
        name: 'safetyReport()',
        func: 'safetyReport',
        args: [],
        expected: [
          [
            [0,0,0,100,0,0,0,0,0,0],
            [0,0,0,0,50,0,0,0,0,0],
            [0,0,0,0,100,100,0,0,0,0],
            [0,0,0,0,100,100,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,100,50,50,0,0,0,100,0,0],
            [0,100,0,50,50,0,0,0,0,0],
            [0,100,0,0,50,50,0,0,0,0],
          ],
          [
            [0,50,100,0,0,0,0,0,0],
            [0,0,0,50,0,100,0,0,0],
            [0,0,0,0,100,0,0,0,0],
            [0,50,0,50,100,0,0,0,0],
            [0,0,0,0,0,50,0,0,0],
            [0,0,100,0,0,0,0,0,0],
            [0,0,0,0,0,100,0,0,100],
            [100,50,50,0,50,0,100,0,0],
          ],
          [
            [0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50],
            [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          ],
        ],
      },
    ],
    [
      {
        name: 'calcDistance("A3", "B5")',
        func: 'calcDistance',
        args: ['A3', 'B5'],
        expected: [
          2.24, // NOTE: Answer must be rounded to 2 decimal places to be accepted
          2.24,
          2.24,
        ],
      },
    ],
  ];

// Run tests
let testsPassed = 0;
let testsRun = 0;

for (const [index, challenge] of challenges.entries()) {
  const challengeNumber = index + 1;

  // If a DAY environment variable is set,
  // don't run tests for challenges beyond that day
  if (process.env.DAY != null && parseInt(process.env.DAY, 10) < challengeNumber) {
    break;
  }

  // Log challenge number
  console.log(chalk.bold(`\nChallenge #${ challengeNumber }`));

  for (const test of challenge) {
    for (const [gridIndex, grid] of grids.entries()) {
      testsRun++;

      // Run the solution code against this grid
      solution.__set__('GRID', grid);
      const actual = solution.__get__(test.func).apply(this, test.args);

      // Log actual and expected results
      console.log(
        heredoc`
          ${chalk.underline(test.name)}
          Expected: ${ test.expected[gridIndex] }
          Actual: ${ actual }`
      );

      // Log passed or failed based on test
      try {
        assert.deepEqual(actual, test.expected[gridIndex]);
      }
      catch (error) {
        console.error(chalk.red('FAILED'));
        continue;
      }

      testsPassed++;
      console.log(chalk.green('PASSED'));
    }
  }
}

console.log(chalk.inverse(`\nTests Passed: ${ testsPassed }/${ testsRun }`));
