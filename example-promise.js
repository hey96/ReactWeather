// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise (function (resolve, reject) {
//     // Эта функция будет вызвана автоматически
//     // В ней можно делать любые асинхронные операции,
//     // А когда они завершатся — нужно вызвать одно из:
//     // resolve (результат) при успешном выполнении
//     // reject (ошибка) при ошибке
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// // Универсальный метод для навешивания обработчиков:
// // promise.then(onFulfilled, onRejected)
// // onFulfilled – функция, которая будет вызвана с результатом при resolve.
// // onRejected – функция, которая будет вызвана с ошибкой при reject.
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      var c = a + b;
      resolve(c);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

addPromise(2, 4).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});

addPromise('Alya', 4).then(function (sum) {
  console.log('this should not show up');
}, function (err) {
  console.log('This should appear', err);
});
