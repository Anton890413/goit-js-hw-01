"use strict";
let input;
let total = 0;
do {
  input = prompt("Введи число");
  if (Number(input)) {
    input = Number(input);
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма введенных чисел ${total}`);
