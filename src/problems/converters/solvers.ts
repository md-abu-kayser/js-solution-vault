import { parseNumber, parseInteger, parseNumberArray } from "../utils";

// problem solver----> 01
export const solveKilometerToMeter = (inputs: {
  [key: string]: string;
}): string => {
  const km = parseNumber(inputs.km, "Kilometers");
  if (km < 0) throw new Error("Kilometers must be non-negative.");
  const meters = km * 1000;
  return `${km} km = ${meters.toLocaleString()} meters.`;
};

// problem solver----> 02
export const solveCelsiusToFahrenheit = (inputs: {
  [key: string]: string;
}): string => {
  const celsius = parseNumber(inputs.celsius, "Celsius");
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
};

// problem solver----> 03
export const solveToUppercase = (inputs: { [key: string]: string }): string =>
  `Uppercase: ${inputs.str.toUpperCase()}`;

// problem solver----> 04
export const solveToLowercase = (inputs: { [key: string]: string }): string =>
  `Lowercase: ${inputs.str.toLowerCase()}`;

// problem solver----> 05
export const solveBinaryToDecimal = (inputs: {
  [key: string]: string;
}): string => {
  if (!/^[01]+$/.test(inputs.binary)) throw new Error("Invalid binary string.");
  return `Decimal: ${parseInt(inputs.binary, 2)}`;
};

// problem solver----> 06
export const solveDecimalToBinary = (inputs: {
  [key: string]: string;
}): string => `Binary: ${parseInteger(inputs.decimal, "Decimal").toString(2)}`;

// problem solver----> 07
export const solveFahrenheitToCelsius = (inputs: {
  [key: string]: string;
}): string => {
  const f = parseNumber(inputs.fahrenheit, "Fahrenheit");
  return `${f}°F is ${(((f - 32) * 5) / 9).toFixed(2)}°C.`;
};

// problem solver----> 08
export const solveBaseConverter = (inputs: {
  [key: string]: string;
}): string => {
  const num = inputs.num;
  const from = parseInteger(inputs.fromBase, "From Base");
  const to = parseInteger(inputs.toBase, "To Base");
  if (from < 2 || from > 36 || to < 2 || to > 36)
    throw new Error("Bases must be between 2 and 36.");
  return `Result: ${parseInt(num, from).toString(to)}`;
};

// problem solver----> 09
export const solveStringToAscii = (inputs: {
  [key: string]: string;
}): string => {
  return `ASCII: [${inputs.str
    .split("")
    .map((c) => c.charCodeAt(0))
    .join(", ")}]`;
};

// problem solver----> 10
export const solveAsciiToString = (inputs: {
  [key: string]: string;
}): string => {
  const codes = parseNumberArray(inputs.ascii);
  return `String: "${String.fromCharCode(...codes)}"`;
};

// problem solver----> 11
export const solveKelvinToCelsius = (inputs: { [key: string]: string }): string => {
  const kelvin = Number(inputs.kelvin);
  if (isNaN(kelvin)) throw new Error("Invalid Kelvin value.");
  
  const celsius = kelvin - 273.15;
  return `${kelvin}K equals ${celsius.toFixed(2)}°C`;
};

// problem solver----> 12
export const solveHexToDecimal = (inputs: { [key: string]: string }): string => {
  const hex = inputs.hex.trim();
  if (!/^[0-9a-f]+$/i.test(hex)) {
    throw new Error("Invalid hexadecimal string.");
  }

  const decimal = BigInt(`0x${hex}`);
  return `Decimal: ${decimal.toString()}`;
};

// problem solver----> 13
export const solveDecimalToHex = (inputs: { [key: string]: string }): string =>
  `Hex: ${parseInteger(inputs.dec, "Decimal").toString(16).toUpperCase()}`;

// problem solver----> 14
export const solveIntToRoman = (inputs: { [key: string]: string }): string => {
  let num = parseInteger(inputs.num, "Number");
  if (num < 1 || num > 3999)
    throw new Error("Number must be between 1 and 3999.");
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; num > 0; i++) {
    while (num >= val[i]) {
      result += rom[i];
      num -= val[i];
    }
  }
  return `${inputs.num} in Roman numerals is: ${result}`;
};

// problem solver----> 15
export const solveRomanToNum = (inputs: { [key: string]: string }): string => {
  const roman = inputs.roman.toUpperCase();
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = map[roman[i]];
    if (!current)
      throw new Error(`Invalid Roman numeral character: ${roman[i]}`);
    const next = map[roman[i + 1]];
    if (next > current) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return `Number: ${result}`;
};