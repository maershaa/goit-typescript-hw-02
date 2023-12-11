/*
  ! Готово У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Оголошення типу, який використовує Record для створення об'єкта, де ключі - це ролі користувачів, а значення - це рядки (описи ролей).
type Description = Record<UserRole, string>;

// RoleDescription - це об'єкт, де кожний ключ (роль користувача) зіставляється з його описом.
const RoleDescription: Description = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {};