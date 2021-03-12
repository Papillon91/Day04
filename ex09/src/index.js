function main(){

    var firstNum = 6;
    var secondNum = 25;
    var thirdNum = 5.2;


 // Only change code below this line
   
      firstNum *= 9;
      secondNum /= 5;
      thirdNum *= 10;
     
 // Only change code above this line

    return {
        firstNum,
        secondNum,
        thirdNum
    };


 }
 
 console.log(main());

module.exports = main;