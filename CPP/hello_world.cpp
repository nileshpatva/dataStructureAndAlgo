#include <iostream> // 
using namespace std;

int main() {
  
  // cout << "Enter three numbers to find max:"<<endl;
  // int a, b, c;
  // cin >> a >> b >> c;


  // boolean - true or false
  // if (false) {
  //   cout<< "IF COND EXECUTED"<<endl;
  // } else if (false) {
  //   cout<< "ELSE IF COND EXECUTED"<<endl;
  // } else {
  //   cout<< "ELSE COND EXECUTED"<<endl;
  // }

  // if (false) {
  //   cout<< "IF COND EXECUTED"<<endl;
  // }

  // if(false) {
  //   cout<<"second if"<<endl;
  // } else {
  //   cout<<"second else"<<endl;
  // }

  // else {
  // cout<<"only else" <<endl;
  // }

  int a = 4; // normal integer
  int *p = &a; // storing memory address - pointer to a variable

  cout << a << " " << p << endl;

  *p = 10; //modifying the value @ that address

  cout << a << " " << p << endl;


  int arr[5] = {1, 3, 5, 7, 9 };
  cout<<arr<<endl; // address
  cout<<*arr<<endl; // 1
  cout<<*(arr + 2)<<endl; // 5
}
