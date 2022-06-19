// Code here
document.addEventListener("DOMContentLoaded", () => {
  //Call the function that will automatically run renderBeers)
  fetchData();
});
//fetch beers
function fetchData() {
  fetch("http://localhost:3000/beers")
    .then((resp) => resp.json())
    .then((data) => renderBeers(data));
}
//Find the container where we attach everything to
const beerUl = document.querySelector("#beer-list");
let beerName = document.getElementById("beer-name");
let beerImage = document.getElementById("beer-image");
let beerDescription = document.getElementById("beer-description");
function renderBeers(data) {
  data.forEach((data) => {
    const list = document.createElement("li");
    list.innerText = data.name;

    beerUl.appendChild(list);
    list.addEventListener("click", () => {
      beerName.textContent = data.name;
      beerImage.setAttribute("src", data.image_url);
      beerDescription.textContent = data.description;
    });
  });
}
