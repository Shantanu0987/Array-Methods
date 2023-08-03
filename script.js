let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//FOREACH METHOD---
let newForEach = [];

array.forEach(myFuntcion);

function myFuntcion(item) {
  newForEach += item + " ";
}
console.log(newForEach);
//FOREACH EVEN VALUE----

let evnArray = [];

array.forEach(myFunction1);

function myFunction1(item) {
  if (item % 2 === 0) {
    evnArray.push(item);
  }
}
console.log(evnArray);

//FILTER EVEN--

let filterEvenArray = array.filter((num) => num % 2 === 0);

console.log(filterEvenArray);

//FILTER ODD--
let filterOddArray = array.filter((num) => num % 2 === 1);

console.log(filterOddArray);
//FIND METHOD 5--

let findArray = array.find((element) => element === 5);

if (findArray !== undefined) {
  console.log(findArray);
}
//FIND METHOD 11---

let findArray1 = array.find((element) => element === 11);

if (findArray1 !== undefined) {
  console.log(findArray);
} else {
  console.log("11 is not in  the array");
}
//FINDINDEX--5
let findIndexArray = array.findIndex((element) => element === 5);
console.log(findIndexArray);

//FINDINDEX--11

let findIndexArray1 = array.findIndex((element) => element === 11);
console.log(findIndexArray1);

//MAP METHOD DOUBLE--

let mapDouble = array.map(myFuntcion3);

function myFuntcion3(num) {
  return num * 2;
}
console.log(mapDouble);
//MAP METHOD HALF---

let mapHalf = array.map(myFuntcion4);

function myFuntcion4(half) {
  return half / 2 + " ";
}
console.log(mapHalf);
