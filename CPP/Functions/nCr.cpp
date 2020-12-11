#include <iostream>

using namespace std;

int fact(int n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

int main() {
  cout<<"Please enter n & r respectively for nCr:"<<endl;
  int n, r;
  cin>>n>>r;

  int nCr = fact(n) / (fact (n - r) * fact(r));

  cout<<n<<"C"<<r<<" is "<<nCr<<endl;

}