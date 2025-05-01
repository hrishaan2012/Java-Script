 var choice = prompt(" Welcome to Perimeter Calculator \n choose the shape \n 1. Rectangle \n 2. Circle \n 3. Triangle \n 4. parallelogram");
if (choice == 1) {
    var h = (prompt("Enter the height of rectangle"))
    var b = (prompt("Enter the breadth of rectangle"))
    var result = alert("Perimeter of rectangle is " + (Number(h)*2 + Number(b)*2))
}

if (choice == 2) {
    var r = (prompt("Enter the radius of circle"))
    var result = alert("Perimeter of circle is " + (3.14 * Number(r) * 2))
}
if (choice == 3) {
    var b = (prompt("Enter the side of triangle"))
    
    var result = alert("Perimeter of triangle is " + (Number(b) * 3))
}
if (choice == 4) {
    var bs = (prompt("Enter the base of parallelogram"))
    var ch = (prompt("Enter the height of parallelogram"))
    var result = alert(`Perimeter of parallelogram is ${Number(bs) * 2 + Number(ch) * 2}`)
}  