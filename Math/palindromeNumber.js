let main = () => {
  let n = 123;
  console.log("number is :", n);
  let isPalindrome = checkPalindrome(n);
  console.log("given number is ", isPalindrome);
};
let checkPalindrome = (n) => {
  let dup = n;
  let rev = 0;
  while (n > 0) {
    let ld = n % 10;
    rev = rev * 10 + ld;
    n = Math.floor(n / 10);
  }
  if (rev === dup) {
    return "Palindrome";
  } else {
    return "not palindrome";
  }
};
main();
