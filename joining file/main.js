var choice =prompt (" Welcome to Area Calculator \n choose the shape \n 1. Rectangle \n 2. Circle \n 3. Triangle \n 4. parallelogram");
if (choice == 1) {
var h =(prompt("Enter the height of rectangle"))
var b =(prompt("Enter the breadth of rectangle"))
var result =alert("Area of rectangle is " + (Number(h)*Number(b)))
}

if (choice == 2) {
var r =(prompt("Enter the radius of circle"))
var result =alert("Area of circle is " + (3.14*Number(r)*Number(r)))
}
if (choice == 3) {
var b =(prompt("Enter the base of triangle"))
var h =(prompt("Enter the height of triangle"))
var result =alert("Area of triangle is " + (0.5*Number(b)*Number(h)))
}
if (choice == 4) {
var bs =(prompt("Enter the base of parallelogram"))
var ch =(prompt("Enter the height of parallelogram"))
var result =alert("Area of parallelogram is " + (Number(bs)*Number(ch)))}