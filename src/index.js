// Code here
document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/beers")
      .then((resp) => resp.json())
      .then((data) => renderQuotes(data));
  }
  const delbtn = document.querySelectorAll(".btn");
});
