/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// !Готово

// message - аргумент функции, ожидающий строку (string). Это означает, что функция showMessage принимает только строки в качестве аргумента.
function showMessage(message: string) {
  console.log(message);
}

// num1 и num2 - это аргументы, ожидающие числа (number). Функция calc принимает два числовых аргумента.
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функция customError не принимает никаких аргументов.
// потому Она не возвращает никакого значения, что и обозначено типом void.
function customError(): void {
  throw new Error("Error");
}

export {};
