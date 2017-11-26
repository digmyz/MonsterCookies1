// document.addEventListener("DOMContentLoaded",function(){
//   // when page loads,
//   // update the counter_count with the value of the 
//   // cookie's count...
// document.getElementById("cookie_count").innerText = Cookies.get("cookie");


//   // wait for click on our counter button...
//   document.getElementById("counter").addEventListener("click",function(){
   var lemon = 0;
    function clickME() {
        lemon += 1;
        document.getElementById("lemon").innerHTML = lemon;
        Cookies.set("lemon",lemon);
 };

var sugar = 0;
    function clickME2() {
        sugar += 1;
        document.getElementById("sugar").innerHTML = sugar;
        Cookies.set("sugar",sugar);

 };

var chocolate = 0;
    function clickME3() {
        chocolate += 1;
        document.getElementById("chocolate").innerHTML = chocolate;
        Cookies.set("chocolate",chocolate);
 };

document.getElementById("clear").addEventListener("click", function(){
  Cookies.expire("lemon");
  Cookies.expire("sugar");
  Cookies.expire("chocolate");
  document.getElementById("lemon").innerText = 0;
  document.getElementById("sugar").innerText = 0;
  document.getElementById("chocolate").innerText = 0;
});



