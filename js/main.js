
function loadData () {
    const URL = "https://openapi.programming-hero.com/api/news/categories";
    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data.data))
}

loadData()