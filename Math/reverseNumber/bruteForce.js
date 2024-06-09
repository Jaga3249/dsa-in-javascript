const main = () => {
  let n = 1234;
  console.log("original no :", n);

  let num = reverseNumber(n);
  console.log("reverse Number is :", num);
};
let reverseNumber = (n) => {
  let reverseNum = 0;

  while (n > 0) {
    let ld = n % 10;
    reverseNum = reverseNum * 10 + ld;
    n = Math.floor(n / 10);
  }
  return reverseNum;
};
main();
