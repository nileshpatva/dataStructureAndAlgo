#include <iostream>
#include <cmath>
using namespace std;

int main() {
  
  cout<<"Please enter a number: "<<endl;
  int n;
  cin>>n;
  for (int i = 2; i < sqrt(n); i++) {
    if (n % i == 0) {
      cout<<"Non-prime"<<endl;
      return 0;
    }
  }
  cout<<"Prime"<<endl;
  return 0;
}