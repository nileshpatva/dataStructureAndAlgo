#include <iostream> // 
using namespace std;

/* 
cout ---- << (insertion operator)
cin  ---- >> (extraction operator)
*/


// 1 bytes = 8 bits;
// int - 4 bytes -> 32 bits;

// |0|1|1|0| |.......| |

// 2^32 - 1;



int main() {
  
  double a = 32.0;

  cout<<sizeof(a)<<endl;

}







// int main() {

//     int a, b, c;
//     cin>>a>>b>>c;

//     if (a>b) {
//         if (a > c) {
//             cout<<a<<endl;
//         } else {
//             cout<<c<<endl;
//         }
//     } else {
//         if (b > c) {
//             cout<<b<<endl;
//         } else {
//             cout<<c<<endl;
//         }
//     }

//     return 0;
// }
