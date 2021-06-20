let str = "my name is Nilesh";
reverseWordsInString(str)


function reverseWordsInString(str) {
  let chars = str.split('');

  chars = reverse(chars, 0, chars.length - 1);

  let i = 0;
  let j = 0;

  while (j <= chars.length) {
    if (chars[j] === " " || j === chars.length) {
      reverse(chars, i, j - 1);
      i = j + 1;
    }
    j++;
  }
  return chars.join('');
}


function reverse(charArr, start, end) {
  while(start <= end) {
    let temp = charArr[start];
    charArr[start] = charArr[end];
    charArr[end] = temp;
    start++;
    end--;
  }
  return charArr;
}
