enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes);

// 예제
function askQuestion(answer: string) {
  if (answer === "YES") {
    console.log("정답");
  }
  if (answer === "NO") {
    console.log("오답");
  }
}
askQuestion("yes");
askQuestion("예스");

enum Answer {
  Yes = "YES",
  No = "NO",
}

function askQuestion2(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
}

askQuestion2(Answer.Yes);
