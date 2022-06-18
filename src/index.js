// Code here
document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/beers")
      .then((resp) => resp.json())
      .then((data) => renderBeers(data));
  }
  //select beers
  function fetchBeer() {
    fetch("http://localhost:3000/beers")
      .then((resp) => resp.json())
      .then((data) => selectBeers(data));
  }

  //Find the container where we attach everything to
  const beerUl = document.querySelector("#beer-list");

  function renderBeers(data) {
    //console.log(data);
    for (const beer of data) {
      //console.log(beer.name);
      //Create necessary elements
      const beerLi = document.createElement("li");
      beerLi.dataset.id = beer.id;
      //Grab data and insert it into created elements
      beerLi.innerHTML = `
        <h5>${beer.name}</h5>
        `;
      beerUl.append(beerLi);
    }
  }
  function selectBeers(data) {
    for (const beer of data) {
      console.log(beer.name);

      let name = document.getElementById("beer-name");
      let image = document.getElementById("beer-image");
      let description = document.getElementById("beer-description");
      // console.log(beer.name);
      //click list event

      beerUl.addEventListener("click", (event) => {
        if (event.target.matches("li")) {
          event.target.style.background = "#3493D5";
          event.target.style.color = "#ffff";
          event.target.style.display = "block";

          //console.log(event.target.innerText);
          name.innerText = beer.name;
          image.src = beer.image_url;
          //console.log(data.description);
          description.innerText = beer.description;
        }
      });
    }
  }
  //Call the function that will automatically run renderBeers)
  fetchData();
  fetchBeer();
});
