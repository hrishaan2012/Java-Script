var MyForm= document.getElementById("myForm");
var MyForm2= document.getElementById("MyForm");
var MyForm3= document.getElementById("MyList");
MyForm.addEventListener("submit", function(event){
event.preventDefault();
createitem(MyForm2.value)});
MyForm.addEventListener("submit", function(event){
    event.preventDefault();
    createitem(Inputitem)});
    function createitem(Inputitem) {
        var list = '<li>${Inputitem}<button onclick="deleteitem(this)">delete</button></li>'
        MyForm2.insertAdjacentHTML("beforeend", list);   
        MyForm2.value = "";
        MyForm2.focus();
    }