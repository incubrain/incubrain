---
title: test
image: /codewars.png
description: "Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
```javascript
arrayDiff([1,2],[1]) == [2]
```
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]"
---


  ```javascript
  function validBraces(braces){
  //TODO input string
  
  const stack = []
  
  // If string length is odd return false
  if (braces.length % 2 !== 0) return false
  
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ])
  
  // Check each brace in string
  for (let i = 0; i < braces.length; i += 1)
  {
    // Check that string contains pair of braces
    if (map.has(braces[i]))
    {
      // Add to stack if true
      stack.push(map.get(braces[i]))
    }
    // Return false if no pair found
    else if (braces[i] !== stack.pop())
    {
      return false
    }
  }
    
  return stack.length === 0
}
  ```