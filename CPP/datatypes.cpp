#include<iostream>
using namespace std;

/*
    TYPE MODIFIERS
    
    signed   ---- 4 bytes ---- (-2,147,483,648 to 2,147,483,647)
    unsigned ---- 4 bytes ---- (0 to 4,294,967,295)
    long     ---- 8 bytes ---- (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
    short    ---- 2 bytes ---- (-32,768 to 32,767)
*/ 

int main() {
    
    int intA; // declaration
    intA = 12; // initialisation

    cout<<"size of int: "<<sizeof(intA)<<endl;

    float floatB;
    cout<<"size of float: "<<sizeof(floatB)<<endl;

    char charC;
    cout<<"size of char: "<<sizeof(charC)<<endl;
    
    bool boolD;
    cout<<"size of bool: "<<sizeof(boolD)<<endl;

    short int intS;
    cout<<"size of shortint: "<<sizeof(intS)<<endl;

    long int intL;
    cout<<"size of longint: "<<sizeof(intL)<<endl;

    return 0;
}
