/*
  !Готово У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Определяем новый тип Params при помощи утилитарного типа Omit.
// Omit<Form, 'errors'> создает тип, исключая из типа Form свойство 'errors'.
type Params = Omit<Form, 'errors'>;


// Определяем новый тип Params при помощи утилитарного типа Pick.
// Pick<Form, 'email' | 'firstName' | 'lastName' | 'phone'> создает тип, включающий только указанные свойства из типа Form.
// type Params = Pick<Form, 'email' | 'firstName' | 'lastName' | 'phone'>;


export {};


