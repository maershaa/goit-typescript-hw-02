/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
// let person = ["Max", 21];
// export {};

// ! Готово
type User = {
  name: string;
  age: number;
};

let person: User[] = [{ name: "Max", age: 21 }];

export {};
