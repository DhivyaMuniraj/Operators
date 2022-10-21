let num1 = 40;
let num2= 20;
    
// arithmetic operators

    function arithmetic(num1,num2) {
        var sum = num1 + num2;
        var sub = num1-num2
        var product = num1 * num2;
        var division = num2 / num1;
        var modulus = num2 % num1;
        var power = num1 ** 4;

        console.log(`sum:${sum},subtraction:${sub},product:${product},division:${division},modulus:${modulus},power:${power}`)
    }

    // // assignment operators
    function assignment(num1,num2) {
        
        console.log("num1 += num2",num1 += num2)
        
        console.log("num1 -= num2",num1 -= num2)
        
        console.log("num1 *= num2",num1 *= num2)
       
        console.log("num1 /= num2", num1 /= num2)
        
        console.log("num1 %= num2",num1 %= num2)
        
        console.log("a**=2",num2 **= 2)
       
    }
    // // comparison operators
    function comparison(num1,num2) {
        if (num1 > num2) {
            console.log(num1, "is greater");
        }
        else {
            console.log(num1, "is lesser");
        }
    }
    //datatype
    function datatype(num1,num2){
        if (num1 == "10") {
            console.log("data equal datatype different");
        }
       else  if (num1 === "10") {
            console.log("data equal datatype different - not equal");
        }

        else if (num1 === 10) {
            console.log("data same datatype same - equal");
        }

        else {
            console.log("data different datatype different");
        }

        var ternary = num1 >= num2? "num1 is greater" : "num2 is greater";
        console.log(ternary)
    }
//logical operator
    function logical(num1,num2){
        if(num1>5 && num2>10){
            console.log("And operator");
        }
        else if(num1<5 || num2>num1 ){
            console.log("OR Operator")
        }
        else if(!(num1 === true)){
            console.log("Not equal operator");
        }
    }
    //bitwise operator
    function bitwise(num1,num2){
        console.log("bitwise and operator",num1&num2);
        console.log("bitwise or operator",num1|num2);
    }

arithmetic(num1,num2)
assignment(num1,num2)
comparison(num1,num2)
datatype(num1,num2)
logical(num1,num2)
bitwise(2,3)

