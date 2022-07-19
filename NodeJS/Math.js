const calculate_Square = require("./Square");

var Calculate_Square = function(number){
    console.log(number*number);
}

var Calculate_Cube = function(n){
    console.log(n*n*n);
}

module.exports.Calculate_Square = Calculate_Square;
module.exports.Calculate_Cube = Calculate_Cube;


