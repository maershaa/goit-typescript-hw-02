// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
// !Готово
let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;

// Функция принимает аргумент a типа number и возвращает значение типа number.
let callback = (a: number): number => {
  return 100 + a;
};
console.log(callback(10)); //110
export {};
