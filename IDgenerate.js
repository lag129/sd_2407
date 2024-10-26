export function generateID() {
  // 100000から999999までのランダムな整数を作成
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  return randomNum.toString();
}

const id = generateID();
console.log(id);