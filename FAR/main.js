function palindrome(myString) {
    var input = myString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
var reversedinput=input.split('').reverse().join('');
if (input===reversedinput) {
    document.write("<div>"+myString+" is a palindrome.</div>");
}
else {
    document.write("<div>"+myString+" is not a palindrome.</div>");
}
}
palindrome("madam")