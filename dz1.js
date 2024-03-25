// let result = [];
// for (let i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }
// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();
//второй способ
// var result1 = [];
// for (var i = 0; i < 5; i++) {
//   (function (index) {
//     result1[i] = function () {
//       console.log(index);
//     };
//   })(i);
// }
// result1[0]();
// result1[1]();
// result1[2]();
// result1[3]();
// result1[4]();
//----------------//
// function getGroup() {
//   let students = [];
//   let i = 0;
//   while (i < 10) {
//     (function (index) {
//       students[i] = function () {
//         console.log(index);
//       };
//       i++;
//     })(i);
//   }

//   return students;
// }

// let group = getGroup();

// group[0](); 
// group[5](); 
//----------------//
// function multiply(x) {
//     return function(y) {
//       if (y) {
//         return multiply(x * y);
//       } else {
//         return x;
//       }
//     };
//   }
// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)();
// console.log(result2); // Вывод: 120
//------------//
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".
// function getUniqArray(arr) {
    
//     if (arr.some(item => typeof item !== 'number')) {
        
//         return'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
//     }else{
//         return [...new Set(arr)]
//     }
// };

// const result1 = [1,2,3,4,4,2,1,4];
// const result2 = [2,4,true];
// const result3 = [8,9,null];
// console.log(getUniqArray(result1));
// console.log(getUniqArray(result2));
// console.log(getUniqArray(result3));