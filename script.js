document.write("Hi there");
function sayHello(){
 var response = prompt("would you like two icecreams ?");
 alert("okay " + response + ",I don't have any ice cream");
}
function add(a,b){
 return a + b;
}
console.log(add(20,30));
console.log(add(100,30));
function showTopic(){
 var x = document.getElementById("demo");
 x.style.fontSize = "25px";
 x.style.color = "red";
}
var desserts = [ ];
 for (i=1; i< 5 ; i++){
   desserts[i] = prompt("Enter desserts");
  }
  alert("desserts contains " + desserts);

var desserts = ["icecream","cookies",
 "milkshake", "sorbet"];
 desserts[0]="icecreamn"
 desserts.push("cookies");
 desserts.pop();
 console.log(desserts);

 var desserts={
   title:"milkshake",
   price:"2$"
 }
 alert(dessert.title);
dessert.status = "unavailable";
console.log(dessert);

var dessertDetails = [
{title: "icecream",
 price:"12$",
 status: "available"},
{title: "cookies",
 price:"2$",
 status: "unavailable"},
{title: "milkshake",
 price:"4$",
 status: "available"},
{title: "sorbet",
price:"6$",
 status: "available"}
];

for (var dessert of dessertDetails){
 if (dessert.status === "available"){
 console.log("The dessert " + dessert.title + " plays at " + dessert.price)
 }
else{
 console.log("Sorry, the dessert " + dessert.title + " is sold out.")
 }
};
