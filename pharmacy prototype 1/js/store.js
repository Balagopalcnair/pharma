const products=[

{ name:"Paracetamol", price:30, img:"images/paracetamol.jpg" },
{ name:"Vitamin C Tablets", price:120, img:"images/vitaminc.jpg" },
{ name:"Cough Syrup", price:85, img:"images/coughsyrup.jpg" },
{ name:"Pain Relief Gel", price:95, img:"images/painrelif.jpg" },
{ name:"Antibiotic Capsules", price:150, img:"images/antibiotic.jpg" },
{ name:"Diabetes Tablets", price:200, img:"images/diabetestablet.jpg" },
{ name:"Calcium Supplement", price:140, img:"images/calcium.jpg" },
{ name:"Multivitamin Tablets", price:160, img:"images/multivitamin.jpg" }

];

const grid=document.getElementById("products");

function loadProducts(){

grid.innerHTML="";

products.forEach(p=>{

let card=document.createElement("div");
card.className="product-card";

card.innerHTML=`

<img src="${p.img}" onerror="this.src='images/med1.jpg'">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
<button onclick="addToCart('${p.name}')">Add to Cart</button>

`;

grid.appendChild(card);

});

}

function addToCart(product){

let popup=document.getElementById("cartPopup");

popup.innerText=product + " added to cart ✔";

popup.classList.add("show");

setTimeout(()=>{
popup.classList.remove("show");
},2000);

}

function filterProducts(){

let search=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

let name=card.querySelector("h3").innerText.toLowerCase();

if(name.includes(search)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}

document.addEventListener("DOMContentLoaded",loadProducts);
