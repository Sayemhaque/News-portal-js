const  loadData = () => {
    const URL = "https://openapi.programming-hero.com/api/news/categories";
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCetegories(data.data))
}


const displayCetegories = (data) => {
  return console.log(data)
}

displayCetegories()