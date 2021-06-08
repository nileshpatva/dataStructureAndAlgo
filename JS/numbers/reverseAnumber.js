function main() {

  const num = parseInt(prompt('Please entere a number to reverse it'))

  let reverse = 0;

  while(num > 0) {
    const last = num % 10;
    reverse = reverse * 10 + last;
    num = parseInt(num/10)
  }
  print(reverse)

}

main()