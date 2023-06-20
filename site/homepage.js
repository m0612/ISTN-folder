news_button = document.getElementById("news-button");
news_button.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./postlist.html";
});

transfer_button = document.getElementById("transfer-button");
transfer_button.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./highlights_page.html";
});

games_button = document.getElementById("games-button");
games_button.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./gamespage.html";
});

