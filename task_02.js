"use strict";
const invoice = 150;
const stock = 100;
let message;
if (invoice <= stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else if (invoice > stock) {
  message = "На складе недостаточно товаров!";
}
console.log(message);

//если invoice равен 100
// то значение message будет равно
//

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
