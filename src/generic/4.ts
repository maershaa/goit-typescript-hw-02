/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
// Определение интерфейса PageProps, который содержит свойство title типа string.
interface PageProps {
  title: string;
}

// Обобщенный класс Component, принимающий параметр типа T.
class Component<T> {
  // Конструктор класса, принимающий объект props типа T.
  constructor(public props: T) {}
}

// Класс Page расширяет класс Component и указывает, что T является объектом PageProps.
class Page extends Component<PageProps> {
  // Метод pageInfo, который выводит в консоль свойство title из объекта props.
  pageInfo() {
    console.log(this.props.title);
  }
}

// Экспорт класса Page для использования в других частях приложения.
export {};
