type test = {
    name : string,
    age : number , 
    address ? : string
}

var x : number ;

x=5;

var y : (number | boolean);

y=true;


var arr : (number | string)[];

arr = []

arr.push(1 , "hazem")

//arr.push(true)

var arr2 : (number [] | string [])[];

arr2 = [[1,2,3]]

var str : (string[] );

str = ["hazem " , "ali"]

arr2.push( str)
console.log(arr2);


var obj : test = {
    name : "ali", 
    age : 25 

}

//obj.type = "male"

console.log(obj);


let add :(x : number , y : number)=>number;

add = (x : number , y:number)=>{
    return x+y;
}


console.log(add(22 , 25));


let im = <HTMLImageElement> document.querySelector('img')  // how we deal with html tags in TS



// 2

var Can_Be_Divided = (x : number )=>{
    if(x%3==0 && x%4==0){
        console.log("YES");
    }else{
        console.log("NO");
    }
}

Can_Be_Divided(12);

// 5

var Max_Min_number = ( x : number , y:number , z:number) =>{
    let max=0;
    let min =0;
    if((x>y && x>z) && (y>z)){
      max = x ;
      min = z; 
    }else if((x<y && y>z) && (x<z)){
        max=y;
        min=x;
    }else if((z>y && x<z) && (x>y)){
        max = z;
        min = y;
    }

    let arr : number[];
    arr = [max , min]
    return arr;
}


console.log(Max_Min_number(3,9,6));


// 6

var Check_Even_Odd =(x : number )=>{
     if(x%2==0){
        console.log("Even");
     }else{
        console.log("Odd");
     }
}

Check_Even_Odd(25);

// 9 

var print_All_Numbers = (x :number)=>{
    for(var i =1 ; i<=x ; i++){
        console.log(i);
    }
    
}

print_All_Numbers(10);


// 10 

var print_Mul_12 = ( v : number) =>{
    for(var i = 1 ; i<=12 ; i++){
        console.log(v*i);
    }
}

print_Mul_12(5);


// 11

var print_All_Even = (x : number) =>{
   
        for(var i = 1 ; i<=x ; i++){
            if(i%2==0){
                console.log(i);
            }
            
        }

}

print_All_Even(20);





