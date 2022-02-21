import sidebar from "./components/sidebar.js";

let sidediv = document.getElementById("sidebar");
sidediv.innerHTML = sidebar();


import { apiCall,appendArticles } from "./scripts/main.js";
let articles = await apiCall ("https://shrouded-earth-23381.herokuapp.com/api/headlines/india");

console.log(articles)
//articles, main
let main = document.getElementById("main")

appendArticles (articles, main)


const storeSearchterm = () => {

    let searchTerm  = document.getElementById("searchbar");
    searchTerm.addEventListener("keypress" ,(e) => {
        if(e.key  == "Enter"  && searchTerm.value == "cricket"){
            let searchTerm  = document.getElementById("searchbar").value
               localStorage.setItem("search_term" ,searchTerm);
               window.location.href ="search.html"           
        }
    })
}

storeSearchterm()
