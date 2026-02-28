import { Problem, Category, InputType } from "../../../types";
import * as Solvers from "./solvers";

export const ADVANCED_PROBLEMS: Problem[] = [
  // problem----> 01
  {
    title: "Fibonacci Sequence Generator",
    category: Category.Advanced,
    solverName: "solveFibonacci",
    inputs: [
      {
        id: "terms",
        label: "Enter number of terms:",
        type: InputType.Number,
        placeholder: "10",
        min: 1,
      },
    ],
    buttonText: "Generate Sequence",
    solver: Solvers.solveFibonacci,
  },
  // problem----> 02
  {
    title: "Memoize Factorial",
    category: Category.Advanced,
    solverName: "solveMemoizeFactorial",
    inputs: [
      {
        id: "num",
        label: "Enter a number:",
        type: InputType.Number,
        placeholder: "e.g., 10",
        min: 0,
      },
    ],
    buttonText: "Calculate (Conceptual)",
    solver: Solvers.solveMemoizeFactorial,
  },
  // problem----> 03
  {
    title: "Deep Clone Object",
    category: Category.Advanced,
    solverName: "solveDeepClone",
    inputs: [
      {
        id: "obj",
        label: "Enter object (JSON format):",
        type: InputType.Text,
        placeholder: '{"a": 1, "b": {"c": 2}}',
      },
    ],
    buttonText: "Clone Object",
    solver: Solvers.solveDeepClone,
  },
  // problem----> 04
  {
    title: "Promise All Simulator",
    category: Category.Advanced,
    solverName: "solvePromiseAll",
    inputs: [
      {
        id: "delays",
        label: "Enter delays (ms, comma-separated):",
        type: InputType.Text,
        placeholder: "1000, 500, 800",
      },
    ],
    buttonText: "Simulate",
    solver: Solvers.solvePromiseAll,
  },
  // problem----> 05
  {
    title: "Curry Addition",
    category: Category.Advanced,
    solverName: "solveCurryAddition",
    inputs: [
      {
        id: "num1",
        label: "Number 1:",
        type: InputType.Number,
        placeholder: "5",
      },
      {
        id: "num2",
        label: "Number 2:",
        type: InputType.Number,
        placeholder: "10",
      },
      {
        id: "num3",
        label: "Number 3:",
        type: InputType.Number,
        placeholder: "15",
      },
    ],
    buttonText: "Calculate Curried Sum",
    solver: Solvers.solveCurryAddition,
  },
  // problem----> 06
  {
    title: "Event Emitter",
    category: Category.Advanced,
    solverName: "solveEventEmitter",
    inputs: [
      {
        id: "event",
        label: "Enter event name:",
        type: InputType.Text,
        placeholder: "myEvent",
      },
    ],
    buttonText: "Emit Event (Conceptual)",
    solver: Solvers.solveEventEmitter,
  },
  // problem----> 07
  {
    title: "LRU Cache Simulator",
    category: Category.Advanced,
    solverName: "solveLRUCache",
    inputs: [],
    buttonText: "Simulate (Conceptual)",
    solver: Solvers.solveLRUCache,
  },
  // problem----> 08
  {
    title: "Rate Limiter",
    category: Category.Advanced,
    solverName: "solveRateLimiter",
    inputs: [],
    buttonText: "Simulate (Conceptual)",
    solver: Solvers.solveRateLimiter,
  },
  // problem----> 09
  {
    title: "Deep Equal Check",
    category: Category.Advanced,
    solverName: "solveDeepEqual",
    inputs: [
      {
        id: "obj1",
        label: "Enter first object (JSON):",
        type: InputType.Text,
        placeholder: '{"a": 1}',
      },
      {
        id: "obj2",
        label: "Enter second object (JSON):",
        type: InputType.Text,
        placeholder: '{"a": 1}',
      },
    ],
    buttonText: "Check Equality",
    solver: Solvers.solveDeepEqual,
  },
  // problem----> 10
  {
    title: "Array Permutations",
    category: Category.Advanced,
    solverName: "solveArrayPermutations",
    inputs: [
      {
        id: "array",
        label: "Enter small array (e.g., 1,2,3):",
        type: InputType.Text,
        placeholder: "1, 2, 3",
      },
    ],
    buttonText: "Generate (Conceptual)",
    solver: Solvers.solveArrayPermutations,
  },
  // problem----> 11
  {
    title: "String Permutations",
    category: Category.Advanced,
    solverName: "solveStringPermutations",
    inputs: [
      {
        id: "str",
        label: "Enter a short string:",
        type: InputType.Text,
        placeholder: "abc",
      },
    ],
    buttonText: "Generate (Conceptual)",
    solver: Solvers.solveStringPermutations,
  },
  // problem----> 12
  {
    title: "Array Combinations",
    category: Category.Advanced,
    solverName: "solveArrayCombinations",
    inputs: [
      {
        id: "array",
        label: "Enter array (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4",
      },
      {
        id: "size",
        label: "Combination size:",
        type: InputType.Number,
        placeholder: "2",
        min: 1,
      },
    ],
    buttonText: "Generate (Conceptual)",
    solver: Solvers.solveArrayCombinations,
  },
  // problem----> 13
  {
    title: "Custom Map Function",
    category: Category.Advanced,
    solverName: "solveCustomMap",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4",
      },
    ],
    buttonText: "Double with Custom Map",
    solver: Solvers.solveCustomMap,
  },
  // problem----> 14
  {
    title: "Custom Filter Function",
    category: Category.Advanced,
    solverName: "solveCustomFilter",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "-1, 2, -3, 4",
      },
    ],
    buttonText: "Filter Positives",
    solver: Solvers.solveCustomFilter,
  },
  // problem----> 15
  {
    title: "Custom Reduce Function",
    category: Category.Advanced,
    solverName: "solveCustomReduce",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4",
      },
    ],
    buttonText: "Sum with Custom Reduce",
    solver: Solvers.solveCustomReduce,
  },
  // problem----> 16
  {
    title: "JSON Validator",
    category: Category.Advanced,
    solverName: "solveJSONValidator",
    inputs: [
      {
        id: "json",
        label: "Enter JSON string:",
        type: InputType.Text,
        placeholder: '{"key": "value"}',
      },
    ],
    buttonText: "Validate JSON",
    solver: Solvers.solveJSONValidator,
  },
  // problem----> 17
  {
    title: "Simple Encryption (Caesar Cipher)",
    category: Category.Advanced,
    solverName: "solveCaesarCipher",
    inputs: [
      {
        id: "text",
        label: "Enter text:",
        type: InputType.Text,
        placeholder: "Hello World",
      },
      {
        id: "shift",
        label: "Enter shift:",
        type: InputType.Number,
        placeholder: "3",
        min: 0,
      },
    ],
    buttonText: "Encrypt",
    solver: Solvers.solveCaesarCipher,
  },
];