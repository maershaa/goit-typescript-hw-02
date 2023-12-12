/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Role {
  workingDay = "workingDay",
  dayOff = "dayOff",
}

function isWeekend(day: Role): boolean {
  if (day === Role.dayOff) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend(Role.workingDay)); // Виведе 'false'
console.log(isWeekend(Role.dayOff)); // Виведе 'true'