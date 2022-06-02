
/*
function fetchMeal() {
  return fetch('https://themealdb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((data) => {
    render(data)
  })
}
fetchMeal()

function render(data){
  console.log(data);
}


*/
const app = document.getElementById('app');
const allRecipes = document.getElementById('all-recipes');

async function getMealdb(){
 return fetch('https://themealdb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((data) => render(data))
}

function render(data) {
  const mealArticle = document.createElement('article');
  allRecipes.appendChild(mealArticle);

  const mealTitle = document.createElement('h3');
  mealArticle.appendChild(mealTitle);
  mealTitle.textContent=data.meals[0].strMeal;

  const mealCategory = document.createElement('p');
  mealArticle.appendChild(mealCategory);
  const iFont = document.createElement('i');
  mealCategory.appendChild(iFont);
  iFont.classList.add('fa-solid');
  iFont.classList.add('fa-clock');
  megory.insertAdjacentElement('afterend', mealCategory)
  mealCategory.innerHTML= "Meal type: " + data.meals[0].strCategory;

  const mealImage = document.createElement('img');
  mealArticle.appendChild(mealImage);
  mealImage.src=data.meals[0].strMealThumb;

  const mealArea = document.createElement('p');
  mealArticle.appendChild(mealArea);
  mealArea.textContent="Meal Origin: " + data.meals[0].strArea

  const youtubeVideo = document.createElement('a');
  mealArticle.appendChild(youtubeVideo)
  youtubeVideo.href=data.meals[0].strYoutube;
  youtubeVideo.textContent="Watch this recipe here"

  console.log(data.meals[0])
}

getMealdb()