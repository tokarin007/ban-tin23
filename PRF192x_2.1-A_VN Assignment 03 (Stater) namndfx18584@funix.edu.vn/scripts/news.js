"use strict";
const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
let page = 1;
let pageSize = 5;
let category = "Business";
const getNewsData = async function (country, page, pageSize, category) {
  // fetch(
  //   `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=4aacf0d7a778429ca34adc5e2d888921`
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  try {
    const responseNews = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&category=${category}&apiKey=4aacf0d7a778429ca34adc5e2d888921`
    );
    const dataNews = await responseNews.json();
    console.log(dataNews);

    pageEle(dataNews);
    displayNews(dataNews);
  } catch (e) {
    alert("Error load ling API");
  }
};

function displayNews(data) {
  // display dữ liệu
  newsContainer.innerHTML = "";
  // console.log("run News start....");
  data.articles.forEach((news) => {
    newsContainer.innerHTML += `<div class="card flex-row flex-wrap">
    <div class="card mb-3" style="">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src=${news.urlToImage}
            class="card-img"
            alt=${news.title}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
            ${news.title}
            </h5>
            <p class="card-text">
              ${news.description}
            </p>
            <a
              href=${news.url}
              class="btn btn-primary"
              >View</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
}

btnNext.addEventListener("click", function () {
  getNewsData("us", ++page, pageSize, categoryList[2]);
});
btnPrev.addEventListener("click", function () {
  if (page > 1) {
    getNewsData("us", --page, pageSize, categoryList[2]);
  }
});

//page element
function pageEle(data) {
  if (page == 1) {
    btnPrev.style.display = "none";
  } else if (page * pageSize >= data.totalResults) {
    btnNext.style.display = "none";
  } else if (1 < page && page * pageSize < data.totalResults) {
    btnPrev.style.display = "block";
    btnNext.style.display = "block";
  }
  pageNum.textContent = page;
}
console.log(currentUser);
if (currentUser.pagesize && currentUser.category) {
  pageSize = currentUser.pagesize;
  category = currentUser.category;
}

console.log(currentUser.pagesize + " " + currentUser.category);
getNewsData("us", page, pageSize, category);
