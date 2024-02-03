/* 
 
//Practical_2.1
console.log('21012021003_AMIT GOSWAMI');
const arg = process.argv;
var a = parseInt(arg[2]);
var b = parseInt(arg[4]);
switch (arg[3]) {
    case '+':
        console.log('Addition ' + (a+b));
        break;
    case '-':
        console.log('Subtract ' + (a-b));
        break;
    case '*':
        console.log('Multiply ' + (a*b));
        break;
    case '/':
        console.log('divide ' + (a/b));
        break;
    default:
        console.log('you enter wrong arithmetic operator'); 
        break;
}



//Practcial_2.2
console.log('21012021003_AMIT GOSWAMI');
const readline = require('readline');
let r1 = readline.createInterface(process.stdin,process.stdout);
r1.question('Enter your name: ', (Name) =>{
    r1.question('Enter your phone number: ', (Contact) => {
        if(Contact.length ==10){
            const array = [Name,Contact]
            console.log('Name ' + array[0]);
            console.log('Phone number ' + array[1]);
        }else{
            console.log('Invalid Contact Number');
        }
        r1.close();
    });
});




//Practcial_2.3

console.log('21012021003_AMIT GOSWAMI');
var book={
    book_title:'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', publish_year: 1997, };
    function print_info(){
        for(i in book){
            console.log(i,"-->",book[i]);
        }
    
    };
    print_info();

*/
//Practical_2.4

var Brands =[
    {Name:'soap',Quantity:2,Per_Qn_Price:50},
    {Name:'Facewash',Quantity:2,Per_Qn_Price:200},
    {Name:'Sampoo',Quantity:2,Per_Qn_Price:380},
    {Name:'tooth-paste',Quantity:1,Per_Qn_Price:120},
    {Name:'Handwash',Quantity:3,Per_Qn_Price:100}
];

var Stock_List =function(n){
    console.log("List of the products")
    for(var temp in Brands){
        console.log(n[temp].Name)
    }
}
    Stock_List(Brands);

    var Total_Cost = function(m){
        var sum=0;
        
        for(var temp in Brands){
            var ans = (m[temp].Quantity*m[temp].Per_Qn_Price)
            sum = sum + parseInt(ans);
        }
        console.log("Total Cost: ",sum);

    }

Total_Cost(Brands);



