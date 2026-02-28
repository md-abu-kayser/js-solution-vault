import { parseInteger, parseNumber } from "../utils";

// problem solver----> 01
export const solveEvenOrOdd = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  return `${num} is ${num % 2 === 0 ? "Even" : "Odd"}.`;
};

// problem solver----> 02
export const solvePalindrome = (inputs: { [key: string]: string }): string => {
  const str = inputs.str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!str) throw new Error("Please enter an alphanumeric string.");
  const isPalindrome = str === str.split("").reverse().join("");
  return `"${inputs.str}" is ${isPalindrome ? "" : "not "}a palindrome.`;
};

const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// problem solver----> 03
export const solvePrimeNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  return `${num} is ${isPrime(num) ? "" : "not "}a prime number.`;
};

// problem solver----> 04
export const solveLeapYear = (inputs: { [key: string]: string }): string => {
  const year = parseInteger(inputs.year, "Year");
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return `${year} is ${isLeap ? "" : "not "}a leap year.`;
};

// problem solver----> 05
export const solveAnagram = (inputs: { [key: string]: string }): string => {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  const isAnagram = normalize(inputs.str1) === normalize(inputs.str2);
  return `The strings are ${isAnagram ? "" : "not "}anagrams.`;
};

// problem solver----> 06
export const solveNumberSign = (inputs: { [key: string]: string }): string => {
  const num = parseNumber(inputs.num, "Number");
  const sign = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  return `The number is ${sign}.`;
};

// problem solver----> 07
export const solveValidParentheses = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  const stack = [];
  const map: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(map[str[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      return "Parentheses are invalid.";
    }
  }
  return stack.length === 0
    ? "Parentheses are valid."
    : "Parentheses are invalid.";
};

// problem solver----> 08
export const solveArmstrongNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  if (num < 0) return `${num} is not an Armstrong number.`;
  const digits = String(num).split("");
  const order = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order),
    0
  );
  return `${num} is ${sum === num ? "" : "not "}an Armstrong number.`;
};

const getProperDivisorsSum = (num: number): number => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i * i !== num) sum += num / i;
    }
  }
  return sum;
};

// problem solver----> 09
export const solvePerfectNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  if (num <= 1) return `${num} is not a perfect number.`;
  return `${num} is ${
    getProperDivisorsSum(num) === num ? "" : "not "
  }a perfect number.`;
};

// problem solver----> 10
export const solveStrongNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
  const sum = String(num)
    .split("")
    .reduce((acc, digit) => acc + factorial(parseInt(digit)), 0);
  return `${num} is ${sum === num ? "" : "not "}a Strong number.`;
};

// problem solver----> 11
export const solveHarshadNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  const sumOfDigits = String(num)
    .split("")
    .reduce((acc, d) => acc + parseInt(d), 0);
  return `${num} is ${
    num % sumOfDigits === 0 ? "" : "not "
  }a Harshad (or Niven) number.`;
};

// problem solver----> 12
export const solveHappyNumber = (inputs: { [key: string]: string }): string => {
  let num = parseInteger(inputs.num, "Number");
  const seen = new Set();
  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = String(num)
      .split("")
      .reduce((acc, d) => acc + Math.pow(parseInt(d), 2), 0);
  }
  return `${inputs.num} is ${num === 1 ? "" : "not "}a happy number.`;
};

// problem solver----> 13
export const solveDisariumNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  const sum = String(num)
    .split("")
    .reduce((acc, d, i) => acc + Math.pow(parseInt(d), i + 1), 0);
  return `${num} is ${sum === num ? "" : "not "}a Disarium number.`;
};

// problem solver----> 14
export const solveNeonNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  const square = num * num;
  const sumOfDigits = String(square)
    .split("")
    .reduce((acc, d) => acc + parseInt(d), 0);
  return `${num} is ${sumOfDigits === num ? "" : "not "}a Neon number.`;
};

// problem solver----> 15
export const solveSpyNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  const digits = String(num).split("").map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const product = digits.reduce((a, b) => a * b, 1);
  return `${num} is ${sum === product ? "" : "not "}a Spy number.`;
};

// problem solver----> 16
export const solvePronicNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  const sqrt = Math.floor(Math.sqrt(num));
  return `${num} is ${sqrt * (sqrt + 1) === num ? "" : "not "}a Pronic number.`;
};

// problem solver----> 17
export const solveKaprekarNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  const sqStr = String(num * num);
  for (let i = 1; i < sqStr.length; i++) {
    const left = parseInt(sqStr.substring(0, i));
    const right = parseInt(sqStr.substring(i));
    if (right > 0 && left + right === num) {
      return `${num} is a Kaprekar number.`;
    }
  }
  return `${num} is not a Kaprekar number.`;
};

// problem solver----> 18
export const solveDuckNumber = (inputs: { [key: string]: string }): string => {
  const numStr = inputs.num;
  parseInteger(numStr, "Number");
  return `${numStr} is ${
    numStr.includes("0") && numStr[0] !== "0" ? "" : "not "
  }a Duck number.`;
};

// problem solver----> 19
export const solveEvilNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  const binary = num.toString(2);
  const ones = (binary.match(/1/g) || []).length;
  return `${num} is ${ones % 2 === 0 ? "" : "not "}an Evil number.`;
};

// problem solver----> 20
export const solveKeithNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  const digits = String(num).split("").map(Number);
  const seq = [...digits];
  while (seq[seq.length - 1] < num) {
    const next = seq.slice(-digits.length).reduce((a, b) => a + b, 0);
    seq.push(next);
  }
  return `${num} is ${
    seq[seq.length - 1] === num ? "" : "not "
  }a Keith number.`;
};

// problem solver----> 21
export const solveSmithNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  if (isPrime(num)) return `${num} is not a Smith number.`;
  const sumDigits = (n: number) =>
    String(n)
      .split("")
      .reduce((a, b) => a + Number(b), 0);
  let n = num;
  let sumPrimeFactors = 0;
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      sumPrimeFactors += sumDigits(i);
      n /= i;
    }
  }
  if (n > 1) sumPrimeFactors += sumDigits(n);
  return `${num} is ${
    sumDigits(num) === sumPrimeFactors ? "" : "not "
  }a Smith number.`;
};

// problem solver----> 22
export const solveUglyNumber = (inputs: { [key: string]: string }): string => {
  let num = parseInteger(inputs.num, "Number");
  if (num <= 0) return `${num} is not an ugly number.`;
  for (const factor of [2, 3, 5]) {
    while (num % factor === 0) {
      num /= factor;
    }
  }
  return `${inputs.num} is ${num === 1 ? "" : "not "}an Ugly number.`;
};

// problem solver----> 23
export const solveAbundantNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  return `${num} is ${
    getProperDivisorsSum(num) > num ? "" : "not "
  }an Abundant number.`;
};

// problem solver----> 24
export const solveDeficientNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  return `${num} is ${
    getProperDivisorsSum(num) < num ? "" : "not "
  }a Deficient number.`;
};

// problem solver----> 25
export const solveAmicableNumbers = (inputs: {
  [key: string]: string;
}): string => {
  const num1 = parseInteger(inputs.num1, "Number 1");
  const num2 = parseInteger(inputs.num2, "Number 2");
  const sum1 = getProperDivisorsSum(num1);
  const sum2 = getProperDivisorsSum(num2);
  return `${num1} and ${num2} are ${
    sum1 === num2 && sum2 === num1 && num1 !== num2 ? "" : "not "
  }amicable numbers.`;
};

// problem solver----> 26
export const solveTriangularNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  if (num < 0) return `${num} is not a triangular number.`;
  const n = (Math.sqrt(8 * num + 1) - 1) / 2;
  return `${num} is ${Number.isInteger(n) ? "" : "not "}a Triangular number.`;
};

// problem solver----> 27
export const solveEmirpNumber = (inputs: { [key: string]: string }): string => {
  const num = parseInteger(inputs.num, "Number");
  const reversedNum = parseInt(String(num).split("").reverse().join(""));
  return `${num} is ${
    num !== reversedNum && isPrime(num) && isPrime(reversedNum) ? "" : "not "
  }an Emirp number.`;
};

// problem solver----> 28
export const solveValidateEmail = (inputs: {
  [key: string]: string;
}): string => {
  const email = inputs.email;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return `The email is ${isValid ? "valid" : "invalid"}.`;
};

// problem solver----> 29
export const solveValidateURL = (inputs: { [key: string]: string }): string => {
  try {
    new URL(inputs.url);
    return "The URL is valid.";
  } catch {
    return "The URL is invalid.";
  }
};

// problem solver----> 30
export const solveIsWeekend = (inputs: { [key: string]: string }): string => {
  try {
    const date = new Date(inputs.date);
    if (isNaN(date.getTime())) throw new Error();
    const day = date.getUTCDay();
    return `${inputs.date} is ${
      day === 0 || day === 6 ? "" : "not "
    }a weekend.`;
  } catch {
    throw new Error("Invalid date format. Use YYYY-MM-DD.");
  }
};

// problem solver----> 31
export const solveCheckISBN = (inputs: { [key: string]: string }): string => {
  const isbn = inputs.isbn.replace(/[-\s]/g, "");
  let isValid = false;
  if (isbn.length === 10) {
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(isbn[i]) * (i + 1);
    const last = isbn[9].toUpperCase() === "X" ? 10 : parseInt(isbn[9]);
    sum += last * 10;
    isValid = sum % 11 === 0;
  } else if (isbn.length === 13) {
    let sum = 0;
    for (let i = 0; i < 12; i++)
      sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
    const checkDigit = (10 - (sum % 10)) % 10;
    isValid = checkDigit === parseInt(isbn[12]);
  }
  return `The ISBN is ${isValid ? "valid" : "invalid"}.`;
};

// problem solver----> 32
export const solvePalindromicNumber = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  return `${num} is ${
    String(num) === String(num).split("").reverse().join("") ? "" : "not "
  }a palindromic number.`;
};

// problem solver----> 33
export const solvePerfectSquare = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  if (num < 0) return `${num} is not a perfect square.`;
  return `${num} is ${Number.isInteger(Math.sqrt(num)) ? "" : "not "}a perfect square.`;
};

// problem solver----> 34
export const solveFibonacciChecker = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  const isPerfectSquare = (n: number) => Number.isInteger(Math.sqrt(n));
  const isFib =
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
  return `${num} is ${isFib ? "" : "not "}a Fibonacci number.`;
};