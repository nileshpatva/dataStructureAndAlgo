#include <iostream>
#include <math.h>

using namespace std;

bool isPrime(int num) {
  for (int i = 2; i <= sqrt(num); i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

int main() {
  cout<<"Enter two numbers to find out all the primes in between"<<endl;
  int a, b;
  cin>>a>>b;
  cout<<"Primes between "<<a<<" and "<<b<<" are: "<<endl;
  for (int i = a; i <= b; i++) {
    if (isPrime(i)) {
      cout<<i<<endl;
    }
  }
  
  return 0;
}