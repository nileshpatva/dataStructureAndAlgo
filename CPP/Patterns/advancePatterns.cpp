#include <iostream>
using namespace std;


int main() {

  cout<<"Please enter a number: "<<endl;
  int n;
  cin>>n;
  
  /*
  Inverted Pyramid
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2 
  1
  */
  cout<<"Inverted Pyramid: (n = "<<n<<")"<<endl;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n+1-i; j++) {
      cout<<j<<" ";
    }
    cout<<endl;
  }
  /*
  0-1 Pattern
  1
  0 1
  1 0 1
  0 1 0 1
  1 0 1 0 1
  */
  cout<<"0-1 Pattern: (n = "<<n<<")"<<endl;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      int p = ((i + j)%2 == 0) ? 1 : 0;
      cout<<p<<" ";
    }
    cout<<endl;
  }

  /*
  Rhombus Pattern
          * * * * *
        * * * * *
      * * * * *
    * * * * *
  * * * * *
  
  */
  cout<<"Rhombus Pattern: (n = "<<n<<")"<<endl;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout<<"  ";
    }
    for (int j = 1; j <= n; j++) {
      cout<<"* ";
    }
    cout<<endl;
  }

  /*
  Number Pattern
      1
     1 2
    1 2 3
   1 2 3 4
  1 2 3 4 5
  */
  cout<<"Number Pattern: (n = "<<n<<")"<<endl;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout<<" "; // single space here
    }
    for (int j = 1; j <= i; j++) {
      cout<<j<<" ";
    }
    cout<<endl;
  }
  /*
  Palindromic Pattern
          1
        2 1 2
      3 2 1 2 3
    4 3 2 1 2 3 4
  5 4 3 2 1 2 3 4 5
  */
  cout<<"Palindromic Pattern: (n = "<<n<<")"<<endl;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout<<"  "; // double spaces
    }
    for (int j = i; j >= 1; j--) {
      cout<<j<<" ";
    }
    for (int j = 2; j <= i; j++) {
      cout<<j<<" ";
    }
    cout<<endl;
  }
  /*
  Star Pattern (n = 4)
        *
      * * * 
    * * * * *
  * * * * * * *
  * * * * * * *
    * * * * *
      * * * 
        *
  */
  cout<<"Star Pattern (n = "<<n<<")"<<endl;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout<<"  ";
    }
    for (int j = 1; j <= 2*i - 1; j++) {
      cout<<"* ";
    }
    cout<<endl;
  }
  for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= n - i; j++) {
      cout<<"  ";
    }
    for (int j = 1; j <= 2*i - 1; j++) {
      cout<<"* ";
    }
    cout<<endl;
  }

  /*
  Zig-Zag Pattern (n = 9, rows will be always 3)
    *   *
   * * * *
  *   *   *

  */
  for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= n; j++) {
      // if ((i + j) % 4 == 0  || (i == 2 && j % 4 == 0)) cout<<"* ";
      // else cout<<"  ";

      cout<<(((i + j) % 4 == 0  || (i == 2 && j % 4 == 0)) ? "* " : "  ");
    }
    cout<<endl;
  }
  return 0;
}
