/*
//Practical_4.1

const fs = require('fs');
const number = [10,20,30,40];
const data = number.join(',');
fs.writeFile('file1.txt', data,(err) => {
    if (err) throw err;
    console.log('The data is saved to file1.txt');
});
fs.readFile('file1.txt','uft8',(err) => {
    if (err) throw err;
    const numbers = data.split(',').map(Number); 
    const Sum = numbers.reduce((paritialsum,a)=>paritialsum+a,0);
    console.log('Sum'+ Sum);
});



//Practical_4.2

const fs = require('fs');

module.exports = {
    countWords: function(filePath){
        const Content = fs.readFileSync(filePath, 'utf8');
        const words = Content.split(/\s+/).filter(Boolean);
        return words.length;
    }
}
*/

const name = 'Ganpat_University';
var result=require('path').join('/', 'users', name, 'node.txt');
console.log(result); 