#include <iostream>
#include <cmath>
using namespace std;


int main() {
  cout<<"Please enter a number to check armstrong"<<endl;

  int n;
  cin>>n;
  int original = n;
  int sum = 0;

  while(n > 0) {
    int remainder = n % 10;
    sum += pow(remainder, 3);
    n /= 10;
  }

  if (sum == original) {
    cout<<"Armstrong Number"<<endl;
  } else cout<<"Not an Armstrong Number"<<endl;
  
  return 0;
}