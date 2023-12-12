/*
  !готово
У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

// Определяем тип данных, который содержит свойства name, position, color и weight.
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

// Функция compare принимает два объекта типов T и U, где T содержит свойства name и color, а U содержит свойства position и weight.
function compare<T extends Pick<AllType, "name" | "color">, 
                 U extends Pick<AllType, "position" | "weight">>
  (top: T, bottom: U): AllType {
    // Возвращает объект типа AllType, содержащий свойства из обоих параметров (top и bottom).
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
}

export {};
