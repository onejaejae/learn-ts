interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 10,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
// const capt = {
//   name: "캡틴",
//   age: 100,
// };
// getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface sumFunc {
  (a: number, b: number): number;
}

var sum: sumFunc;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface stringArray {
  [index: number]: string;
}

var arr: stringArray = ["a", "b", "c"];
// arr[0] = 10

// 딕셔너리 패턴
interface stringRegexDictionary {
  [key: string]: RegExp;
}

var obj: stringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
// interface Person {
//   name: string;
//   age: number;
// }

// interface Developer extends Person {
//   language: string;
// }

var capt: Developer = {
  language: "korean",
  name: "wonjae",
  age: 26,
};
