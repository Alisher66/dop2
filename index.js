// Задание 1

const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
const newArr = Array.from(new Set(arr));
console.log(newArr);

// Задание 2
const obj1 = { id: 1, name: "userName" };
const obj2 = { id: 1, password: "qwerty" };
const resObj = Object.assign(obj1, obj2);
console.log(resObj);

// Задание 3
const add = (x, y) => x + y;

// Задание 4
const sleep = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {res()}, ms);
  })
}
sleep(5000).then(() => {
  console.log("Через 5 секунд");
})
