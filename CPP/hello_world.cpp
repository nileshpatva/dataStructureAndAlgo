#include <iostream> // 
using namespace std;

/* 
cout ---- << (insertion operator)
cin  ---- >> (extraction operator)
*/

int main() {

    int a, b, c;
    cin>>a>>b>>c;

    if (a>b) {
        if (a > c) {
            cout<<a<<endl;
        } else {
            cout<<c<<endl;
        }
    } else {
        if (b > c) {
            cout<<b<<endl;
        } else {
            cout<<c<<endl;
        }
    }

    return 0;
}
