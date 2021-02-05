let add = new Function('x','y','return x+y');


let func1 = function (x) {
    return x*2;
};

let func2 = function (y){
    return y*3;
}  

console.log(add(func1(2), func2(2)));

