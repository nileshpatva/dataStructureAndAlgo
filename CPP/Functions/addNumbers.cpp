#include <iostream>
using namespace std;

int add(int a, int b) {
  return a + b;
}

int main() {
  cout<<"Please enter two numbers"<<endl;
  int a, b;
  cin>>a>>b;

  cout<<add(a, b)<<endl;

  return 0;
}