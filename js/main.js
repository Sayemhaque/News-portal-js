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

const fetchAllNews = (categoryId, category_name) => {
  const URL = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showAllNews(data.data, category_name));
};

const showAllNews = (data, category_name) => {
  displayCardUi(data, category_name);
  console.log(category_name);
};


const displayCardUi = (data, category_name) => {
  const newsCardContainer = document.getElementById("all-news-container");
  document.getElementById("category-name-ui").innerText = category_name;
  document.getElementById("total-news").innerText = data.length;
  newsCardContainer.innerHTML = "";
  data.forEach((news) => {
    const { image_url, title, details, total_view, author, _id } = news;
    newsCardContainer.innerHTML += ` <div class="card mb-3 mt-4 ">
       <div class="row g-0">
         <div class="col-md-4">
           <img src="${image_url}" class="img-fluid w-10 h-10 rounded-start" alt="...">
         </div>
         <div class="col-md-8 d-flex flex-column">
           <div class="card-body">
             <h5 class="card-title">${title}</h5>
             <p class="card-text">${details.slice(0, 100)}...</p>
           </div>
           
           <div class="card-footer border-0 bg-body">
         <div class="d-flex justify-content-between align-items-center">
           <div  class="d-flex gap-2">
               <img src="${
                 author.img
               }" class="img-fluid rounded-circle" alt="..." height="30" width="40">
               <div>
               <p class="m-0 p-0">${author.name}</p>
               <p class="m-0 p-0">${author.published_date}</p>
               </div>
               </div>
               <!--  -->
               <div class="d-flex justify-content-between align-items-center gap-2">
               <i class=" m-0 p-0 fa fa-eye"></i>
              <small class="m-0 p-0 text-muted">${total_view} views</small>
               </div>
               <!--  -->
               <div>
               <i class=" m-0 p-0 fa fa-star"></i>
               </div>
               <!--  -->
               <div>
               <i class=" m-0 p-0 fa fa-arrow-right" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="fetchNewsDetails('${_id}')"></i>
               </div>
         </div>
           </div>
         </div>
       </div>
     </div>`;
     console.log(news)
  });
  
};




const fetchNewsDetails = (newsId) => {
      const URL = `https://openapi.programming-hero.com/api/news/${newsId}`;
      fetch(URL)
      .then(res => res.json())
      .then(data => showNewsDetails(data.data))
} 



const showNewsDetails = (newsDetail) => {
    const modelContainer = document.getElementById("modal-body")
    const { image_url, title, details, total_view, author, _id } = newsDetail[0];
    console.log(newsDetail)
    modelContainer.innerHTML = `  <div class="d-flex flex-column">
    <div >
      <img src="${image_url}" class="img-fluid w-10 h-10 rounded-start" alt="...">
    </div>
    <div >
      <div class="card-body mt-2">
        <h5 class="card-title">${title}</h5>
        <p class="card-text mt-2 text-muted">${details}</p>
      </div>
  </div>
</div>`
            }
