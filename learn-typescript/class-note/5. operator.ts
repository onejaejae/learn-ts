var seho: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }

  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {}

askSomeone({ name: "wonjae", skill: "웹" });
askSomeone({ name: "wonjae", age: 26 });

function askSomeone2(someone: Developer & Person) {}

askSomeone2({ name: "wonjae", skill: "웹", age: 21 });
