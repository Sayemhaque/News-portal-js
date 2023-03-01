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

const fetchAllNews = (categoryId,category_name) => {
  const URL = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showAllNews(data.data , category_name));
};


const showAllNews = (data ,category_name) => {
    const newsCardContainer = document.getElementById("all-news-container");
    document.getElementById("category-name-ui").innerText = category_name;
    document.getElementById("total-news").innerText = data.length;
    newsCardContainer.innerHTML = ""
    data.forEach((news) => {
       newsCardContainer.innerHTML += ` <div class="card mb-3 mt-4 ">
       <div class="row g-0">
         <div class="col-md-4">
           <img src="${news.image_url
           }" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8 d-flex flex-column">
           <div class="card-body">
             <h5 class="card-title">${news.title}</h5>
             <p class="card-text">${news.details.slice(0 , 100)}...</p>
           </div>
           <div class="card-footer border-0 bg-body">
            <p class="card-text">ad</p>
           </div>
         </div>
       </div>
     </div>`
   
    })
    console.log(category_name)
}

