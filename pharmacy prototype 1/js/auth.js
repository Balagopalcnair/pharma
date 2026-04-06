
function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="balagopal" && p==="pharma123"){
window.location="pages/dashboard.html";
}else{
alert("Incorrect login.");
}
}
