var Input ="23617";
var arr=[];
for(var i=0;i<=Input.length-1;i++){
    arr.push(parseInt(Input[i]));
}
var even=function(x){
if (x%2==0){
    return x;}}
function sum(sum,num){
    return sum+num;
}
var v=arr.filter(even);
console.log(v.reduce(sum));