import { Quotes } from "./quotes";

const ListQuotes = Quotes(); 
let random = Math.trunc(Math.random() * ListQuotes.length); 

const texte = document.querySelector(".text"); 
texte.textContent = ListQuotes[random].text; 

const author = document.querySelector(".author"); 
author.textContent = ListQuotes[random].author; 

const button_right = document.querySelector(".button_right");  
button_right.addEventListener("click",() => { 
    random = Math.trunc(Math.random() * ListQuotes.length);  
    texte.textContent = ListQuotes[random].text; 
    author.textContent = ListQuotes[random].author;
})

const button_left = document.querySelector(".button_left");  
button_left.addEventListener("click",() => {
     alert("Vous êtes un Mouton !"); 
})