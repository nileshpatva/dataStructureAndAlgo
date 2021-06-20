function Hanoi(n, start, end, moves) {
  if (n === 1) {
    moves.push(`${start} --> ${end}`);
    // arr++;
  } else {
    let other = 6 - (start + end);
    Hanoi(n - 1, start, other, moves);
    moves.push(`${start} --> ${end}`);
    // arr++;
    Hanoi(n - 1, other, end, moves);
  }
}
let arr = []
Hanoi(4, 1, 3, arr)
console.log(arr)