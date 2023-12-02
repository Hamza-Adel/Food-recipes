var id = location.search.substring(8);
var recipeEle = document.querySelector("#recipe");
console.log(id);
var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${id}`);
xmlhttp.send();

function recipeDiv(img, title, ingredients) {
  var ingredientsList = "<ul class='m-3 '>";

//   for (const ingredient in ingredients) {
//     let index = parseInt(ingredient) + 1;

//     ingredientsList += `
//           <li>
//               ${index} - ${ingredients[ingredient]}
//           </li>
//       `;
//   }

  for (let index = 0; index < ingredients.length; index++) {
    const ingredient = ingredients[index];

    ingredientsList += `
                <li>
                    ${index+1} - ${ingredients[index]}
                </li>
            `;
  }

  ingredientsList += "</ul>";

  return `
  
  
  <div class="menu-item ">
                <img src="${img}">
                <div>
                    <h3 class="text-light my-0">${title}</h3>
                    ${ingredientsList}
                </div>
            </div>`;
}

xmlhttp.addEventListener("readystatechange", function () {
  if (xmlhttp.readyState === 4) {
    var response = JSON.parse(xmlhttp.responseText);

    recipeEle.innerHTML = recipeDiv(
      response.recipe.image_url,
      response.recipe.title,
      response.recipe.ingredients
    );
  }
});
