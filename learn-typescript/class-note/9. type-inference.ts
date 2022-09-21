// 타입 추론 기본 1
var a = 10;

function getB(b = 10) {
  var c = "hi";
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: "abc",
//   title: "hello",
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<k> extends Dropdown<k> {
  description: string;
  tag: k;
}

var detailedItem: DetailedDropdown<string> = {
  description: "asd",
  tag: "1",
  title: "asd",
  value: "sad",
};

// Best Common Type
var arr = [1, 2, 3];
var arr2 = [1, 2, true, "asd"];
