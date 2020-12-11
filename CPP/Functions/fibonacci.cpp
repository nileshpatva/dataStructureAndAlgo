#include <iostream>

using namespace std;

void fib(int n) {
  int t1 = 0, t2 = 1;
  int next;

  for (int i = 0; i <= n; i++) {
    cout<<t1<<endl;
    next = t1 + t2;
    t1 = t2;
    t2 = next;
  }
  return;

}

int main() {
  cout<<"Please enter number to find all terms of Fibonacci"<<endl;
  int n;
  cin>>n;
  fib(n);
  

  return 0;
}