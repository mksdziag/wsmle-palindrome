export function checkPalindrome(str) {
  if (str.length === 0) return false;

  return str == str.split("").reverse().join("");
}

export default checkPalindrome;
