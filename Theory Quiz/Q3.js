// In JavaScript when any number is concatenated with or therer a + sign between a string and a number or
// string and string then the result will be a string.
// if there is - sign between two numbers which are of type string, then java script intreprets them as number and 
// performs the subtraction operation because we know that subtraction operation can only be performed to numbers.

console.log(1+"2"+"2");
//simply it concatenates 1 with 2 which is string the typeof result will be string which furthur adds with 2 to make 122
console.log(1+ +"2"+"2");
// A very good technique is used here, we know that if we multiply + with + we get +,interprets it as  
//addition operation because by using + only we make look like a concatenation operation, 1+ +"2" operates to
// 3 which is type number then we add it to string by + operator which finalizes to 32.
console.log(1+ - "1"+ "2");
// Same as above, but here we have used - sign with the along with the + sign and + xply - = - so 1+ -"1" results to 0 
//which is a type number but then we again use + with a string which result to a string with output 02
console.log("A"-"B" +"2");
// - sign is used between string which is not a number so, "A"-"B" results to Nan which is a typeof number but it means 
//not a number then we concatenate it by + to "2" a string, which results to NaN2
console.log("A"-"B" +2);
//lastly again "A"-"B" result to Nan a type number, we then add it to 2 which is not a string but a number 
//so Nan + (any number) results to again Nan.



