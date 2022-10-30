// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// const isLogged = false;

// if (isLogged) {
//   console.log("You are logged in)))");
// } else {
//   console.log("Try again(((");
// }

// Задана змінна

// const isEnoughMoney = true;

// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = true;
// if (isEnoughMoney) {
//   console.log("Операцію схвалено :>> ");
// } else {
//   console.log("Операціювідхилено :>> ");
// }

//Перевірити, чи скінченне число ввів користувач і видати відповідне повідомлення.

// const inputValue = Number(prompt("Input number")); // => 55, Infinity, NaN

// if (Number.isFinite(inputValue)) {
//   console.log("number");
// } else {
//   console.log("not a finite number");
// }

// Умовні операціі

// const age = 18;

// console.log("age > 18 :>> ", age > 18);
// console.log("age < 18 :>> ", age < 18);
// console.log("age >= 18:>> ", age >= 18);
// console.log("age <= 18 :>> ", age <= 18);

// // Нестрога рівність / нерівність- ПОГАНО!
// console.log("age == 18 :>> ", age == 18);
// console.log("age == '18' :>> ", age == "18");
// console.log("age != 18 :>> ", age != 18);
// console.log("age != '18' :>> ", age != "18");

// // Строга рівність
// console.log("age === 18 :>> ", age === 18);
// console.log("age === '18' :>> ", age === "18");
// console.log("age !== 18 :>> ", age !== 18);
// console.log("age !== '18' :>> ", age !== "18"); // 18!='18'

// const age = 20;

// if (age >= 18) {
//   console.log("Welcome!");
// } else {
//   console.log("Sorry, access denied(((");
// }

// Cкорочена форма if

// При вході перевірити чи користувач повнолітній
// Якщо ні - то видати попередження про обмежений доступ
// Вивести привітання

// if (умова) {
//   гілка true;
// }

// const age = 18;
// if (age < 18) {
//   console.log("Деякі функціі обмежені");
// }

// console.log("Вітаємо на сайті");

// если полтьзователь несовершеннолетний, то 'Welcome'
// иначе если сертификат есть, то 'Welcome'

// const age = 18;
// const isVactinated = false;
// if (age < 18) {
//   console.log("Welcome");
// } else {
//   if (isVactinated) {
//     console.log("Welcome");
//   } else {
//     console.log("Please go to vactination");
//   }
// }

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка false;
// }

// if (age < 18) {
//   console.log("Welcome");
// } else if (isVactinated) {
//   console.log("Welcome");
// } else {
//   console.log("Please go to vactination");
// }

// const a = Number(prompt("Введіть перше число"));
// const b = Number(prompt("Введіть друге число"));
// if (a > b) {
//   console.log("Перше число більше =", a);
// } else if (a === b) {
//   console.log("Числа рівні =", a + "=" + b);
// } else {
//   console.log("Друге число більше =", b);
// }

// Умовні (булевські) операції

// умова І умова   - умова && умова - age >=18 && isVactinated
// умова АБО умова - умова || умова - age <18 || isVactinated
// ! Не умова      - !умова -       - !isVactinated

// const age = 18;
// const isVactinated = true;

// if (age < 18 || isVactinated) {
//   console.log("Welcome");
// } else {
//   console.log("Go to vactination");
// }

// console.group("Таблиця істинності &&:");
// console.log("true && true :>> ", true && true);
// console.log("false && false :>> ", false && false);
// console.log("true &&false :>> ", true && false);
// console.log("false && true :>> ", false && true);

// console.groupEnd();

// console.group("Таблиця істинності ||:");
// console.log("true || true :>> ", true || true);
// console.log("false || false :>> ", false || false);
// console.log("true || false :>> ", true || false);
// console.log("false || true :>> ", false || true);

// console.groupEnd();

// console.group("Таблиця істинності !:");
// console.log("! true :>> ", !true);
// console.log("! false :>> ", !false);
// console.log("! false :>> ", !false);
// console.log("! true :>> ", !true);

// console.groupEnd();

//вивести нагадування, якщо парне число випало на п'ятницю
// const day = "Friday";
// const date = 16;
// if (day === "Friday" && date % 2 === 0) {
//   console.log("EVEN FRIDAY");
// }

// вивести інфу про знижку, якщо людина пенсійного віку, або має неповнолітніх дітей
// const userAge = 55;
// const userChildAge = 18;
// if (userAge >= 60 || userChildAge < 18) {
//   console.log("Вам доступна знижка");
// }

// якщо неповнолітній , то обмежити доступ
// const isAdult = false;
// if (!isAdult) {
//isAdult !== true, isAdult === false
// console.log("Доступ обмежено");
// }

// перевірити чи  число є 0 чи ні

// const a = 0;
// if (a) {
//   console.log("no 0");
// } else {
//   console.log(0);
// }

//false - 0, null, undefined, '', false, NaN

// const value = 25;
// if (value !== undefined || value !== null || value !== "") {
//   console.log("ok");
// }

// if (value) {
//   console.log("ok");
// }

// const value = 15;

// if (typeof value === "number" && !Number.isNaN(value)) {
//   console.log("number not NaN");
// }
