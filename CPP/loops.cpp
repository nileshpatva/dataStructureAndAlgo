#include <iostream>
using namespace std;


int main() {

    // for loop
    for (int i = 0; i < 10; i++) {
        cout<<"number i: "<<i<<endl;
    }
    
    // while
    int n;
    cin>>n;

    while (n > 0) {
        cout<<"is positive"<<endl;
        cin>>n;
    }

    // do...while
    do {
        cout<<"number "<<n<<endl;
        cin>>n;
    } while(n > 0);


    return 0;
}
