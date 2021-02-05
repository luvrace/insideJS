//재귀함수
var factorialVar = function factorial(i){
    if(i==0){
        return 0;
    }
    console.log(i);
    return factorial(i-1);
}

factorialVar(5);