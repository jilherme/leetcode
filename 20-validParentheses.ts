/* 
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
 */
type StackChars = "(" | "[" | "{"
function isValid(s: string): boolean {
    const stack:  StackChars[] = []
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (const char of s) {
       if (char === "(" || char === "[" || char === "{") {
        stack.push(char)
       } else {
        const curStackChar = stack.pop()

        if (curStackChar !== pairs[char]) return false 
       }
    }

    if (stack.length>0) return false

    return true
};

// console.log(isValid("()[]{}"))
console.log(isValid("("))