var Input="572738";
var arr=[];
for(var i=0;i<=Input.length-1;i++){
    arr.push(parseInt(Input[i]));
}
var square=function(x){
return x*x;
}
var Cube=function(x){
return x*x*x;
}
console.log("square is "+arr.map(square))
console.log("cube is "+arr.map(Cube))