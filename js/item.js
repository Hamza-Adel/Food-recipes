var category = document.getElementById("category");
var categoryItml = location.search.substring(3);
var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
  "GET",
  `https://forkify-api.herokuapp.com/api/search?q=${categoryItml}`
);
xmlhttp.send();

var cartona = `      <div class="container">
<div class="title">
    <h2 class="text-light">Our Special ${categoryItml}</h2>
    <p class="text-light">Order two and get third for free</p>
</div>`;

xmlhttp.addEventListener("readystatechange", function () {
  if (xmlhttp.readyState === 4) {
    var response = JSON.parse(xmlhttp.responseText);

    for (let index = 0; index < response.count; index++) {
      cartona += `


      <div class="menu-item  my-5 text-start">
            <div class="d-flex justify-content-center align-items-center">
            <img  src="${response.recipes[index].image_url}">
                <h3 class="text-light my-0">${response.recipes[index].title} 
              <a href="/Details-item.html?recipe=${response.recipes[index].recipe_id} " class="btn btn-secondary  m-5">View Ingredients</a></h3>
            </div>
                        </div>`;
    }

    category.innerHTML = cartona;
  }
});