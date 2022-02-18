// var input="sdkjfkasdnkfi";
// var i=0;
// while(i<input.length){
//     if(input[i]=='a' | input[i]=='e' | input[i]=='i' | input[i]=='o' | input[i]=='u'){
//         console.log('The index is : '+i);
//         break;
//     }
//     i++;
// }

var num=67383;
num=num+"";
var arr=[];
for(var i=0;i<=num.length-1;i++){
    arr.push(num[i]);
}
var i=arr.length-1;
var rev=[];
while(i>=0){rev.push(num[i]);i--;}
//console.log(rev);
var str="";
for(var k=0;k<rev.length;k++){
str=str+rev[k];
}
console.log(str);








