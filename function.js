//자바스크립트는 일급객체다 

//1.리터럴에 의해 생성
function func1(x,y){
    return x+y; 
}

//2.변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능

//2-1.변수
let let1 = function (x,y){
    return x+y;
}


//2-2.배열의 요소

let arr = [];
arr[0] = func1;


//2-3.객체의 프로퍼티 등에 할당 가능


function add(x,y){
    return x+y;
}

let obj = {};

obj.func = add;
obj.arr = [1,2,3];




//3.함수의 인자로 전달 가능???
function func3(argumentFunc){
    argumentFunc();
}

func3(function(){
    console.log("send arguments");
});



//4.함수의 리턴 값으로 리턴 가능

let let2 = function (x,y) {
    return add(x,y);
}



//5.동적으로 프로퍼티 생성 및 할당 가능

let arr2 = {};

arr2.let3 = add;

//console.log(arr2['let3'](2,3));
