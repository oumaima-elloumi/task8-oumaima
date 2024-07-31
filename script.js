function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }

 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });/*
 lightmode,purplemode
 let lightModeBtn = document.querySelector(".lightMode");
let purpelModeBtn = document.querySelector(".purplemode");

document.body.appendChild(lightModeBtn); 

ajouter un event listener
lightModeBtn.addEventListener("click", function () {
   lightModeBtn.style.backgroundColor = "white"
            lightModeBtn.style.color = "white" 
 });*/
 /*selectithom el koll*/ 
 let mostatil = document.body.querySelector(".rectangle"); 
 let lfo9 = document.querySelector(".lfo9");
 let zwei = document.querySelector(".zwei");
let  content =document.querySelector("#content") ;
let  res =document.querySelector("#res") ;
let  ott =document.querySelector(".ott") ;
let  doc =document.querySelector(".ysar") ;
let  theme =document.querySelector(".theme") ;
let  c1  =document.querySelector("#c1") ;
let  c2  =document.querySelector("#c2") ;
let  c3  =document.querySelector("#c3") ;
let  visible  =document.querySelector(".visible") ;
let  hide  =document.querySelector(".hide") ;
let  ktiba  =document.querySelector(".ktiba") ;
/*fonction*/ 

c1.addEventListener("click", function() {
   document.body.classList.toggle("light-mode");
   lfo9.classList.toggle("light-mode");
   res.classList.toggle("light-mode");
   content.classList.toggle("light-mode");
   ott.classList.toggle("light-mode");
   doc.classList.toggle("light-mode");
   theme.classList.toggle("light-mode");
mostatil.classList.toggle("light-mode");
c1.classList.toggle("hide");
c2.classList.toggle("visible");
;})
/*mode move*/
   
   c2.addEventListener("click",function(){
      document.body.classList.toggle("move-mode");
      lfo9.classList.toggle("move-mode");
      res.classList.toggle("move-mode");
      res.classList.toggle("move-mode");
      content.classList.toggle("move-mode");
      ott.classList.toggle("move-mode");
      doc.classList.toggle("move-mode");
      theme.classList.toggle("move-mode");
   rectangle.classList.toggle("move-mode");
   ktiba.classList.toggle("move-mode");
   mostatil.classList.toggle("move-mode");
   c2.classList.toggle("hide");
   c3.classList.toggle("hide");
   c3.classList.toggle("visible");
   })