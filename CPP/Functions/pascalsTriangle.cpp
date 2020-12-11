#include <iostream>

using namespace std;

int fact(int n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

int nCr(int n, int r) {
  return fact(n) / (fact (n - r) * fact(r));
}

/*
  Pascal's Triangle (n=5)
  1
  1 1
  1 2 1
  1 3 3 1
  1 4 6 4 1

      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
*/
int main() {
  cout<<"Please enter number 'n' for Pascal's Triangle"<<endl;
  int n;
  cin>>n;
  cout<<"Pascal's Triangle(n = "<<n<<")"<<endl;
  for (int i = 0; i < n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout<<" ";
    }
    for (int j = 0; j <= i; j++) {
      cout<<nCr(i, j)<<" ";
    }
    cout<<endl;
  }
}