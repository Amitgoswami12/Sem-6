 #include <iostream>
#include <bitset>

 using namespace std;

int main(){
    int a[50],n;
    std::bitset<4>b[50];
    std::bitset<4>c[50];
    cout<<"Enter the number of codeword you want "<<endl;
    cin>>n;
    cout << "Enter the codeword"<<endl;
    for(int i=0; i<n; i++){
    
    cin >> a[i];
    }
    for(int j=0; j<n; j++){
         b[j] = a[0]&a[j+1];
        for(int k=j+1; k<j; k++){
             c[j] = a[j+1]&a[k+1];
        }
    }
 for(int i=0; i<n; i++){
        cout<<b[i]<<endl;
        cout<<c[i]<<endl;
    }
    return 0;
}

 