
var string="rotator";
var palindrome=string.split('');
var q=true;
for(var i=0;i<palindrome.length;i++){
    if(palindrome[i]!=palindrome.reverse()[i]){
        console.log('The string is not a palindrome');
        break;
    }
    else if(i==palindrome.length-1){
        console.log("Yes the string is a palindrome");
    }
}


