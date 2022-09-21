// 타입 단언(type assertion)
var a;
a = 10;
a = "a";
var b = a as string;

// DOM API 조작
const div = document.querySelector("div") as HTMLDivElement;
if (div) {
  div.innerHTML;
}
