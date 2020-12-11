#include <iostream>
using namespace std;

int main() {
    
    int col, row;

    cout<<"Enter number of rows:"<<endl;
    cin>>row;

    cout<<"Enter number of columns:"<<endl;
    cin>>col;

    /*
    Rectangle Pattern: 
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    */
    cout<<"Rectangle Pattern: "<<endl;
    for (int i = 0; i < row; i++) { // rows
        for (int j = 0; j < col; j++) { // columns
            cout<<"* ";
        }
        cout<<endl;
    }
    
    /*
    Hollow Rectangle Pattern:
    * * * * *
    *       *
    *       *
    *       * 
    * * * * *
    */
    cout<<"Hollow Rectangle Pattern: "<<endl;
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) { // columns
           if (i == 0 || i == row - 1 || j == 0 || j == col - 1) cout<<"* ";
           else cout<<"  ";
        }
        cout<<endl;
    }

    /*
    Inverted Half Pyramid
    * * * * *
    * * * *
    * * *
    * *
    *
    */
    cout<<"Inverted Hald Pyramid: "<<endl;
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < row - i; j++) {
            // cout<<"* ";
            cout<<j<<" ";
        }
        cout<<endl;
    }

    /*
    Half Pyramid
    *
    * *
    * * *
    * * * * 
    * * * * *
    */
    cout<<"Half Pyramid: "<<endl;
    for (int i = 1; i <= row; i++) {
        for (int j = 1; j <= i; j++) {
            cout<<"* ";
        }
        cout<<endl;
    }
    
    /*
    Half Pyramid after 180 Degree rotation
             *
           * * 
         * * *
       * * * *
     * * * * *
    */
    cout<<"Half Pyramid after 180 rotation:"<<endl;
    for (int i = row; i >= 1; i--) {
        for (int j = 1; j <= row; j++) {
            if (j >= i) cout<<" *";
            else cout<<"  ";
        }
        cout<<endl;
    }
    /*
    Half Pyramid using numbers
    1
    2 2
    3 3 3
    4 4 4 4 
    5 5 5 5 5
    */
    cout<<"Half Pyramid: "<<endl;
    for (int i = 1; i <= row; i++) {
        for (int j = 1; j <= i; j++) {
            cout<<i<<" ";
        }
        cout<<endl;
    }

    /*
    Floyd Triangle
    1
    2 3
    4 5 6
    7 8 9 10
    11 12 13 14 15
    */
    cout<<"Floyd Triangle: "<<endl;
    int count = 1;
    for (int i = 1; i <= row; i++) {
        for (int j = 1; j <= i; j++) {
            cout<<count<<" ";
            count++;
        }
        cout<<endl;
    }

    /*
    Butterfly Pattern (n = 4)

    *             *
    * *         * *
    * * *     * * *
    * * * * * * * *
    * * * * * * * *
    * * *     * * *
    * *         * *
    *             *

    */
    cout<<"Butterfly Pattern for n = "<<row<<endl;
    for (int i = 1; i <= row; i++) {
      for (int j = 1; j <= i; j++) {
        cout<<"* ";
        // cout<<i<<" ";
      }
      int space = 2*row - 2*i;
      for (int j = 1; j <= space; j++) {
        cout<<"  ";
      }
      for(int j = 1; j <= i; j++) {
        cout<<"* ";
        // cout<<i<<" ";
      }
      cout<<endl;
    }
    for (int i = row; i >= 1; i--) {
      for (int j = 1; j <= i; j++) {
        cout<<"* ";
        // cout<<i<<" ";
      }
      int space = 2*row - 2*i;
      for (int j = 1; j <= space; j++) {
        cout<<"  ";
      }
      for(int j = 1; j <= i; j++) {
        cout<<"* ";
        // cout<<i<<" ";
      }
      cout<<endl;
    }


    return 0;
}

