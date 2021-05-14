#include <iostream>
#include <math.h>

using namespace std;

/*
1. Sum of first `n` natural numbers
*/
int sumOfNaturals(int n) {
  return n * (n+1) / 2; 
}

/*
2. Check Pythagorean Triplet
*/
bool checkPythagoreanTriplet(int x, int y, int z) {
  int a = max(x, max(y, z));
  int b, c;

  if (a == x) {
    b = y;
    c = z;
  } else if (a == y) {
    b = x;
    c = z;
  } else {
    b = x;
    c = y;
  }
  return a * a == b * b + c * c;
}

int main() {
  int n;
  cout<<"Please enter a natural number to find sums upto it :"<<endl;
  cin >> n;
  cout<<"Sum of " << n <<" naturals: "<<sumOfNaturals(n)<<endl;


  cout << "Please enter three numbers to check Pythagorean Triplets"<< endl;
  int x, y, z;
  cin >> x>> y>> z;

  cout<< x <<", " <<y <<", " << z << " are " << (checkPythagoreanTriplet(x, y, z) ? "" : "not ") << "Pythagorean Triplets"<<endl;


  return 0;
}