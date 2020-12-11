#include <iostream>

using namespace std;

int fact(int n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

int main() {
  cout<<"Please enter a number to find it's factorial:"<<endl;
  int n;
  cin>>n;
  cout<<n<<" Factorial is "<<fact(n)<<endl;
  

  return 0;
}