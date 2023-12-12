/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// !Готово

function showMessage(message: string): undefined {
  // Функция принимает строку (message) и ничего не возвращает, просто выводит эту строку в консоль.
  console.log(message);
  // Возвращается undefined, так как нет явного оператора возврата.
}

// Функция принимает два числовых аргумента (num1 и num2) и возвращает их сумму (number).
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функция не возвращает никакого значения, но генерирует ошибку с помощью throw new Error().
// Тип "never" используется, так как функция всегда вызывает ошибку и не возвращает значение.
function customError(): never {
  throw new Error("Error");
}

export {};

