import { parseStringArray } from "../utils";

// problem solver----> 01
export const solveLongestName = (inputs: { [key: string]: string }): string => {
  const names = parseStringArray(inputs.names);
  if (names.length === 0) throw new Error("Please provide at least one name.");
  const longestName = names.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
  return `Longest name is: "${longestName}"`;
};

// problem solver----> 02
export const solveStringReversal = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  if (!str) throw new Error("String cannot be empty.");
  return `Reversed: "${str.split("").reverse().join("")}"`;
};

// problem solver----> 03
export const solveVowelCounter = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  if (!str) throw new Error("String cannot be empty.");
  const count = (str.match(/[aeiou]/gi) || []).length;
  return `There are ${count} vowels in "${str}".`;
};

// problem solver----> 04
export const solveStringLength = (inputs: {
  [key: string]: string;
}): string => {
  return `Length: ${inputs.str.length}`;
};

// problem solver----> 05
export const solveWordCount = (inputs: { [key: string]: string }): string => {
  const words = inputs.sentence.trim().split(/\s+/).filter(Boolean);
  return `Word count: ${words.length}`;
};

// problem solver----> 06
export const solveCharCount = (inputs: { [key: string]: string }): string =>
  `Character count: ${inputs.str.length}`;

// problem solver----> 07
export const solveCapitalizeWords = (inputs: {
  [key: string]: string;
}): string => {
  const capitalized = inputs.sentence
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
  return `Capitalized: ${capitalized}`;
};

// problem solver----> 08
export const solveStringReplace = (inputs: {
  [key: string]: string;
}): string => {
  const replaced = inputs.str.split(inputs.search).join(inputs.replace);
  return `Replaced: ${replaced}`;
};

// problem solver----> 09
export const solveStringTrim = (inputs: { [key: string]: string }): string =>
  `Trimmed: "${inputs.str.trim()}"`;

// problem solver----> 10
export const solveStartsWith = (inputs: { [key: string]: string }): string =>
  `Starts with "${inputs.prefix}": ${inputs.str.startsWith(inputs.prefix)}`;

// problem solver----> 11
export const solveEndsWith = (inputs: { [key: string]: string }): string =>
  `Ends with "${inputs.suffix}": ${inputs.str.endsWith(inputs.suffix)}`;

// problem solver----> 12
export const solveStringRepeat = (inputs: {
  [key: string]: string;
}): string => {
  const count = parseInt(inputs.count);
  if (isNaN(count) || count < 0)
    throw new Error("Count must be a non-negative number.");
  return `Repeated: ${inputs.str.repeat(count)}`;
};

// problem solver----> 13
export const solveVowelRemover = (inputs: { [key: string]: string }): string =>
  `Result: ${inputs.str.replace(/[aeiou]/gi, "")}`;

// problem solver----> 14
export const solveCaseSwap = (inputs: { [key: string]: string }): string => {
  const swapped = inputs.str
    .split("")
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("");
  return `Swapped: ${swapped}`;
};

// problem solver----> 15
export const solveStringCompress = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  if (str.length === 0) return 'Compressed: ""';
  let compressed = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return `Compressed: ${compressed.length < str.length ? compressed : str}`;
};