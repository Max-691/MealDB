

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


