#include <iostream>

using namespace std;
class Parent{
    private:
        int x;
    public:
        int y,z;
};
class Child: public Parent {
    private:
        int m;
    public:
        int n;
        void setValue(int a, int b, int c, int d){
            y = a;
            z = b;
            m = c;
            n = d;

        }
void printValue(void){
    cout << y << " " << z << " " << m <<" "<< n << endl;
}
};


int main() {
  Parent a;
  a.y = 10;
  cout << a.y <<endl;
  Child b;
 b.setValue (1,2,3,4);
 b.printValue();
    return 0;
}