//count digit
const main = () => {
  let N = 123;
  console.log("N:", N);
  const digit = countDigit(N);
  console.log("count digit: ", digit);
};
const countDigit = (N) => {
  let cnt = 0;
  while (N > 0) {
    cnt = cnt + 1;
    N = Math.floor(N / 10);
  }
  return cnt;
};
main();
