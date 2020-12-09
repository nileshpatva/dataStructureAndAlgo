#include<iostream>
using namespace std;

int main() {
    char option;

    cout<<"Please select a language:"<<endl;

    cin>>option;

    switch (option)
    {
    case 'A':
        cout<<"Hello"<<endl;
        break;
    
    default:
        cout<<"Ciao"<<endl; 
        break;
    }
    
    return 0;
}
