/* 
//Practical_3.1

var http = require("http");
var url = require("url");
http.createServer(function(req, res){
    if (req.url=='/'){
        res.write("This is test");
    }
    else if (req.url=='/exam'){
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write('<table border="1">')
        res.write('<tr><th><b>Date</b></th><th><b>Code</b></th><th><b>Subject</b></th></tr>');
        res.write('<tr><td>28/08/2023</td><td>2CEIT501</td><td>Computer Architecture and Organisation</td></tr>');
        res.write('<tr><td>30/08/2023</td><td>2CEIT503</td><td>Computer Network</td></tr>');
        res.write('<tr><td>01/09/2023</td><td>2CEIT5PE4</td><td>Software Packages</td></tr>');
        res.write('</table>')
    }
    else if(req.url=='/exam/semester_end') {
        res.write('Regular Exam');
    }
    res.end();
}).listen(5001);



//Practical_3.2

var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    var qd = url.parse(req.url,true).query;
    var n1 = parseInt(qd.num1);
    var n2 = parseInt(qd.num2);
    if (n1 < n2) {
        res.write(n1 + " is Smallest");
    }
    else if (n1 == n2) {
        res.write("Both are Equal");
    }
    else{
        res.write(n2+ " is Smallest");
    }
    res.end();
}).listen(5002);
*/



//Practical_3

let todo = require("./Practical_3_1.js")
console.log("21012021003_AMIT GOSWAMI")
todo.add_todo("Complete CAO Practical 1,2,3,4")
todo.add_todo("Complete CAO Assignment")
todo.add_todo("Study CAO For Exam")

todo.list_todo()

todo.remove_todo("Complete CAO Notes")
todo.remove_todo("Complete CAO Practical 1,2,3,4")

todo.list_todo()
