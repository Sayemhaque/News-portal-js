const loadData = () => {
  const URL = "https://openapi.programming-hero.com/api/news/categories";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayCetegories(data.data.news_category));
};

const displayCetegories = (data) => {
  const cateContainer = document.getElementById("categories-container");

  data.forEach((category) => {
    cateContainer.innerHTML += `<a class="nav-link" href="#" onclick="fetchAllNews('${category.category_id}', '${category.category_name}')">${category.category_name}</a>`;
  });
};

const fetchAllNews = (categoryId) => {
  const URL = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showAllNews(data.data));
};


const showAllNews = (data) => {
    const newsCardContainer = document.getElementById("news-card-container");
    data.forEach((news) => {
        console.log(news)
    })
}