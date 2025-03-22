// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript

export function createPhoneNumberV1(numbers: number[]): string {
  const [a, b, c, d, e, f, g, h, i, j] = numbers;
  return `(${ a }${ b }${ c }) ${ d }${ e }${ f }-${ g }${ h }${ i }${ j }`;
}

export function createPhoneNumberV2(numbers: number[]): string {
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' +
    numbers[3] + numbers[4] + numbers[5] + '-' +
    numbers[6] + numbers[7] + numbers[8] + numbers[9];
}

export function createPhoneNumberV3(numbers: number[]): string {
  return `(${ numbers[0] }${ numbers[1] }${ numbers[2] }) ${ numbers[3] }${ numbers[4] }${ numbers[5] }-${ numbers[6] }${ numbers[7] }${ numbers[8] }${ numbers[9] }`;
}

export function createPhoneNumberV4(numbers: number[]): string {
  const parts = [
    `(${ numbers[0] }${ numbers[1] }${ numbers[2] })`,
    ` ${ numbers[3] }${ numbers[4] }${ numbers[5] }`,
    `-${ numbers[6] }${ numbers[7] }${ numbers[8] }${ numbers[9] }`
  ];
  return parts.join('');
}

export function createPhoneNumberV5(numbers: number[]): string {
  return numbers
    .join("")
    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export const solutions = [createPhoneNumberV1, createPhoneNumberV2, createPhoneNumberV3, createPhoneNumberV4, createPhoneNumberV5];