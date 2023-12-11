/*
  !готово
   У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U):T & U {
  return Object.assign({}, objA, objB);
}
// Этот метод создаст новый объект, содержащий свойства обоих объектов objA и objB, сохраняя исходные объекты без изменений. Тип результата будет представлять собой пересечение типов T и U (объединение свойств обоих типов), обозначаемое как T & U.


export {}