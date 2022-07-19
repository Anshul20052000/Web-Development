console.log("Hey There!")

setTimeout(function(){
    console.log("Hello World! 5000ms has Passed...")
},500);

function DisplayMessage(){
    console.log("This is a Display Message Function...");
}
DisplayMessage();

var display_message = function(){
    console.log("Hello!...");
}
display_message();

var calculateSquare = function(number){
    return number*number;
}
console.log(calculateSquare(5));

var makeDouble = function(n){
    return n*2;
}
console.log(makeDouble(calculateSquare(10)));

var calculate_Square = require('./Square');
calculate_Square(10);

var Math = require('./Math');
Math.Calculate_Square(10);
Math.Calculate_Cube(123);


var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('PublishVideo',function(message){
    console.log(message);
});
emitter.emit('PublishVideo',"ABC has Uploaded a Video");

var fs = require('fs');
var r = fs.readFileSync('Demo.txt');
console.log(r);
var r = fs.readFileSync('Demo.txt','utf8');
console.log(r);
fs.writeFileSync('Demo.txt',"This is a New Line");
console.log(r);

var f = require('fs');
f.readFile('Demo.txt','utf8',function(err,data){
    console.log(data)
});
console.log('Hey There');

var fsy = require('fs');    
fsy.unlink('Temp.txt',function(){});
console.log('Temp.txt Deleted');
fsy.mkdir('abc', { recursive: true }, (err) => {
    if (err) throw err;
  });
console.log('Created abc.txt');
fsy.mkdirSync('abc1', { recursive: true }, (err) => {
    if (err) throw err;
  });
console.log('created abc1.txt');
fsy.rmdir('abc', { recursive: true }, (err) => {
    if (err) throw err;
  });
console.log('deleted abc.txt');
fsy.rmdirSync('abc1', { recursive: true }, (err) => {
    if (err) throw err;
  });
console.log('deleted abc1.txt');




