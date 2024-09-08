var x;
x = 5;
var y;
y = true;
var arr;
arr = [];
arr.push(1, "hazem");
//arr.push(true)
var arr2;
arr2 = [[1, 2, 3]];
var str;
str = ["hazem ", "ali"];
arr2.push(str);
console.log(arr2);
var obj = {
    name: "ali",
    age: 25
};
//obj.type = "male"
console.log(obj);
var add;
add = function (x, y) {
    return x + y;
};
console.log(add(22, 25));
var im = document.querySelector('img'); // how we deal with html tags in TS
// 2
var Can_Be_Divided = function (x) {
    if (x % 3 == 0 && x % 4 == 0) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
};
Can_Be_Divided(12);
// 5
var Max_Min_number = function (x, y, z) {
    var max = 0;
    var min = 0;
    if ((x > y && x > z) && (y > z)) {
        max = x;
        min = z;
    }
    else if ((x < y && y > z) && (x < z)) {
        max = y;
        min = x;
    }
    else if ((z > y && x < z) && (x > y)) {
        max = z;
        min = y;
    }
    var arr;
    arr = [max, min];
    return arr;
};
console.log(Max_Min_number(3, 9, 6));
// 6
var Check_Even_Odd = function (x) {
    if (x % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
};
Check_Even_Odd(25);
// 9 
var print_All_Numbers = function (x) {
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
};
print_All_Numbers(10);
// 10 
var print_Mul_12 = function (v) {
    for (var i = 1; i <= 12; i++) {
        console.log(v * i);
    }
};
print_Mul_12(5);
// 11
var print_All_Even = function (x) {
    for (var i = 1; i <= x; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};
print_All_Even(20);
