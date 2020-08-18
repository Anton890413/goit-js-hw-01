"use strict";
const name = "«Генератор защитного поля»";
let price;
const firstMessage =
  "Выбран «Генератор защитного поля», цена за штуку 1000 кредитов";
if (price === 1000) {
  firstMessage === `Выбран ${name}, цена за штуку ${price} кредитов`;
}
console.log(firstMessage);

const secondMessage =
  "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов";
if (price === 2000) {
  secondMessage === `Выбран ${name}, цена за штуку ${price} кредитов`;
}
console.log(secondMessage);

// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'
