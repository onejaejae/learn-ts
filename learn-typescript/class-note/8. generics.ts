// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("hi");

// function logText(text:string){
//     console.log(text)
//     return text
// }

// function logNumber(num: number){
//     console.log(num)
//     return num
// }

// logText("hello")
// logNumber(10)

// function logText(text: string | number){
//     console.log(text)
//     return text
// }

// logText(10)
// logText("hello")

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const a = logText<string>("a");
a.split("");
const b = logText<number>(10);
b.toLocaleString();

// 인터페이스에 제네릭을 선언하는 방법
// interface DropDown {
//   value: string;
//   selected: boolean;
// }

interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj: DropDown<string> = { value: "10", selected: true };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }

// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
// }
// logTextLength(10);

// 제네릭 타입 제한 3 - keyof

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 이 강의에서 전달하고자 하는 내용은 제네릭에 들어갈 수 있는 타입을 제한할 수 있다입니다.
// keyof를 이용해서 ShoppingItem 인터페이스의 키만 들어갈 수 있게 타입을 제약한 걸 보시면 될 것 같아요.
// getShoppingItemOption()의 반환 값은 크게 의미를 두지 않으셔도 됩니다 :)
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("price");

// 제네릭을 쓴다고 해서 타입 추론의 장점이 사라지는건 아닙니다.
// 오히려 제네릭을 쓰게 되면 일일이 타입을 모든 곳에 정의해 줄 필요가 없어집니다.
// 제네릭은 중복된 타입 정의를 줄일 수 있는 이점이 있기 때문에 일단 이 정도로 이해하시고
// 이후 프로젝트에 어떻게 코드를 적용하는지 살펴보시면 좋을 것 같아요.
// 처음에는 낯설게 느껴지시겠지만 실제 코드에 어떻게 적용되는지 보시면 차츰 이해 되실겁니다 :)
