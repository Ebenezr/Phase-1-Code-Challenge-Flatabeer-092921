// Code here
document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/beers")
      .then((resp) => resp.json())
      .then((data) => renderBeers(data));
  }
  //<img src="${q.image_url}">
  //  <blockquote>${q.description} </blockquote>
  //       <li>${q.reviews}</li>
  //       <button class="btn">Learn more</button>
  function renderBeers(data) {
    for (const q of data) {
      //Find the container where we attach everything to
      const quoteUL = document.querySelector("#beer-list");
      //Create necessary elements
      const quoteLi = document.createElement("li");
      quoteLi.dataset.id = q.id;
      //Grab data and insert it into created elements
      quoteLi.innerHTML = `
        <h5>${q.name}</h5>
        `;
      quoteUL.append(quoteLi);
    }
  }
  //Call the function that will automatically run renderBeers)
  fetchData();
});
