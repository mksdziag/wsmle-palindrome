export function checkPalindrome(
  str = "",
  { trim, caseSensitive } = { trim: true, caseSensitive: false }
) {
  if (str.length === 0) return false;

  str = trim ? str.trim() : str;
  str = caseSensitive ? str : str.toLowerCase();

  return str == str.split("").reverse().join("");
}

export default checkPalindrome;
