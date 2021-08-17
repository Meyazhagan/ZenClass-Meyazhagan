var reverse = function (x) {
  let negative = false;
  if (x < 0) negative = true;
  x = Math.abs(x);
  let rev = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = Math.floor(x / 10);
    if (
      rev > (Math.pow(2, 31) - 1) / 10 ||
      (rev === (Math.pow(2, 31) - 1) / 10 && pop > 7)
    )
      return 0;
    if (
      rev < -Math.pow(2, -31) / 10 ||
      (rev === -Math.pow(2, -31) / 10 && pop < -8)
    )
      return 0;

    rev = rev * 10 + pop;
  }
  return negative ? rev * -1 : rev;
};
// console.log(reverse(15342));

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let init = x;
  let rev = 0;
  while (x !== 0) {
    if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, -31)) return false;
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (init === rev) return true;
  else return false;
};

isPalindrome(121);
