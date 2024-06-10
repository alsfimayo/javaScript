// const book = [
//   {
//     title: "Book one",
//     genre: "non-function",
//     publish: 1989,
//   },
//   {
//     title: "Book one",
//     genre: "science",
//     publish: 1989,
//   },
// ];
// // const bookRes = book.filter((pb) => pb.publish === 1989);
// // console.log(bookRes);
// //map method;
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const val = num
//   .map((count) => count * 10)
//   .map((count) => count + 1)
//   .filter((count) => count > 40);
// console.log(val);
//reduce method
const num = [4, 2, 3];
const res = num.reduce(function (accumolator, currentValue) {
  console.log(`accumolator:${accumolator} and currentValue: ${currentValue}`);
  return accumolator + currentValue;
}, 4);
console.log(res);
