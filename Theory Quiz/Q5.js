var myObj=["a","b","c","a,b,c","d,e,f"];
var splited = [];
for (var i = 0; i < myObj.length; i++) 
{
  splited = splited.concat(myObj[i].split(','));
}
var string="",unique=[];
for(var i=0;i<splited.length;i++){
  if(!string.includes(splited[i])){
    string+=splited[i];
    unique.push(splited[i]);
  }
}
console.log(unique);