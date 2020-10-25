'use strict';
//const hotel = {
//  name: 'Resort Hotel',
//  stars: 5,
//  capacity: 100,
//};

//console.log(hotel.name); // Resort Hotel
//console.log(hotel['name']); // Resort Hotel
//console.log(hotel);

//let user = {
//  name: "John",
//  age: 30
//};

// перебор значений
//for (let value of Object.values(user)) {
//  alert(value); // John, затем 30
//}

// Петя бежит быстро, потому что он (this) пытается поймать поезд.


//function fn() {
//  console.log(this);
//}

//fn(); // window без "use strict" и udefined с "use strict"

//const petya = {
//  name: 'Petya',
//  showThis() {
//    console.log(this);
//  },
//  showName() {
//    console.log(this.name);
//  },
//};

//petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
//petya.showName(); // 'Petya'

function showThis() {
  console.log('this in showThis: ', this);
}

// Вызываем в глобальном контексте
showThis();
// this in showThis: Window

const user = { name: 'Mango' };

/*
 * Записываем ссылку на функцию в свойство объекта
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;

/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте
 * которого осуществляется вызов, а не на глобальный объект.
 */

user.showContext();
// this in showThis: {name: "Mango", showContext: ƒ}
