/* 
!готвоо
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

// Функция createOrUpdateUser принимает параметр initialValues типа Partial<User>.
// Partial<T> делает все свойства типа T необязательными.
function createOrUpdateUser(initialValues: Partial<User>) {
  // Функция предназначена для обновления пользователя, но в настоящее время не имеет реализации.
  // Она принимает объект initialValues, который может содержать любую часть свойств типа User.
  // Например, initialValues может содержать email и password для обновления, а другие свойства могут оставаться не заполненными.
}

// Вызов функции createOrUpdateUser с параметром, содержащим только email и password для обновления.
createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};


