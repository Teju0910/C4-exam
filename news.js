import sidebar from "./components/sidebar.js";

let sidediv = document.getElementById("sidebar");
sidediv.innerHTML = sidebar();


let main = document.getElementById("main")
let data = JSON.parse(localStorage.getItem("article"));

console.log(data)

// function printNews(data){
const printNews = (data) => {

    let div = document.createElement("div")
    div.setAttribute("id", "news")

    let title = document.createElement("h2")
    title.innerHTML = data.title

    let info = document.createElement("p")
    info.innerHTML = data.description

    let date = document.createElement("p")
    date.innerHTML ="Published on-" + data.publishedAt;
    
    let image = document.createElement("img")
    image.setAttribute("id","oneimg")
    image.src = data.urlToImage

    main.append(title,image,date,info)
}
printNews(data)

