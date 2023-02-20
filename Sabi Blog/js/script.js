// Footer date start
document.querySelector('.date').innerHTML = new Date().getFullYear();
// Footer date end



// Import start
import * as langdata from '../data/langData.js'
// Import end



// Selectors start
const btnLang = document.querySelector('#lang')
const navLink = document.querySelectorAll('.nav-link');
const cardTitle = document.querySelectorAll('h3');
const cardHref = document.querySelectorAll('.cardHref');
const cardP = document.querySelectorAll('.p');
const secTwo = document.querySelectorAll('.stay');
const footerOne = document.querySelectorAll('.foot');
// Selectors end




// Function Change Language start
const changeLang = () => {
    if (btnLang.innerHTML === "Azərbaycan") {

        for (let x in langdata.headerdata.az) {
            navLink[x].innerHTML = langdata.headerdata.az[x];
        }

        for (let x in langdata.cardTitle.az) {
            cardTitle[x].innerHTML = langdata.cardTitle.az[x];
        }

        for (let x in langdata.cardHref.az) {
            cardHref[x].innerHTML = langdata.cardHref.az[x];
        }

        for (let x in langdata.cardP.az) {
            cardP[x].innerHTML = langdata.cardP.az[x];
        }

        for (let x in langdata.secTwo.az) {
            secTwo[x].innerHTML = langdata.secTwo.az[x];
        }

        for (let x in langdata.footerOne.az) {
            footerOne[x].innerHTML = langdata.footerOne.az[x];
        }

        document.querySelectorAll('#readBtn i').innerHTML = "Salam";

        btnLang.innerHTML="English"

    }else{
        for (let x in langdata.headerdata.en) {
            navLink[x].innerHTML=langdata.headerdata.en[x];
        }
    
        for (let x in langdata.cardTitle.en) {
            cardTitle[x].innerHTML=langdata.cardTitle.en[x];
        }
    
        for (let x in langdata.cardHref.en) {
            cardHref[x].innerHTML=langdata.cardHref.en[x];
        }
    
        for(let x in langdata.cardP.en){
            cardP[x].innerHTML=langdata.cardP.en[x];
        }
    
    
        for(let x in langdata.secTwo.en){
            secTwo[x].innerHTML=langdata.secTwo.en[x];
        }
    
        for(let x in langdata.footerOne.en){
            footerOne[x].innerHTML=langdata.footerOne.en[x];
        }
    

    
        btnLang.innerHTML="Azərbaycan"
    }
}
btnLang.onclick = changeLang;
// Function Change Language end