str='comsats';
var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var new_str="";


for(var i=0;i<alpha.length;i++){
    for(var j=0;j<str.length;j++){
        if(alpha[i]==str[j]){
            new_str=new_str+alpha[i];
        }
    }

}
console.log(new_str);




