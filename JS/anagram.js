function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  
  if (str1 === str2) return true;
  
  let str = new Map();
  for(let i = 0; i < str1.length; i++) {
      const char = str1[i].toLowerCase();
      if (str.has(char)) {
          str.set(char, str.get(char)+ 1);
      } else {
          str.set(char, 1);
      }
  }

  for(let i = 0; i < str2.length; i++) {
      const char = str2[i].toLowerCase();
      if(!str.get(char)) {
        return false;
      } else {
        str.set(char, str.get(char) - 1);
      }
  }
  return true;
}

console.log(validAnagram('HSELIN', 'Nilesh'));
console.log(validAnagram('asdasdadaa', 'asdasdadas'));