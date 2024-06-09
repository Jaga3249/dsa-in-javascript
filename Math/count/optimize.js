//count digit
const main = () => {
  let N = 12345;
  console.log("N:", N);
  const digit = countDigit(N);
  console.log("count digit: ", digit);
};
const countDigit = (N) => {
  let cnt = Math.floor(Math.log10(N) + 1);
  return cnt;
};
main();
