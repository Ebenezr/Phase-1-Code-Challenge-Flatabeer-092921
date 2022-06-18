// Code here
document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/beers")
      .then((resp) => resp.json())
      .then((data) => renderBeers(data))
      .then((data) => selectBeers(data));
  }
  //Find the container where we attach everything to
  const beerUl = document.querySelector("#beer-list");
  function renderBeers(data) {
    for (const q of data) {
      //Create necessary elements
      const beerLi = document.createElement("li");
      beerLi.dataset.id = q.id;
      //Grab data and insert it into created elements
      beerLi.innerHTML = `
        <h5>${q.name}</h5>
        `;
      beerUl.append(beerLi);
    }
  }
  function selectBeers(data) {
    let name = document.getElementById("beer-name");
    let image = document.getElementById("beer-image");
    let description = document.getElementById("beer-description");
    //click list event

    beerUl.addEventListener("click", (event) => {
      if (event.target.matches("li")) {
        event.target.style.background = "#3493D5";
        event.target.style.color = "#ffff";
        event.target.style.display = "block";
        console.log(event.target.innerText);
        // name.innerText = data.name;
        // image.src = data.image_url;
        // description.innerText = data.description;
      }
    });
  }
  //Call the function that will automatically run renderBeers)
  fetchData();
});
