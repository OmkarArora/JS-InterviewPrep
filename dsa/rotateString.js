/**
 * From LeetCode 796- https://leetcode.com/problems/rotate-string/
 * We are given two strings, A and B
 * Example 1:
 * Input: A="abcde", B="cdeab"
 * Output: true
 *
 * Example 2:
 * Input: A = "abcde", B="abced"
 * Output: false
 */

/**
 * Brute force approach - O(n2) - space and time
 *
 * Doubling the original string approach
 * 		Time and Space - O(n)
 * 	eg: A = "abcde"
 * 		B = "cdeab"
 *  Solution: A = A+A
 * 	now, A = "abcdeabcde"
 * now just check if the new A includes B.
 */

/**
 *
 * @param {atring} A
 * @param {atring} B
 * @return {boolean}
 */
function rotateString(A, B) {
  if (A.length !== B.length) return false;
  if (A.length === 0 && B.length === 0) return true;

  A = A + A;
  return A.includes(B);
}

//Tests
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
