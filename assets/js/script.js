const playPauseBtn = document.querySelector(".playBtn");

playPauseBtn.addEventListener("click", () => {
  alert("hi");
});

function showHideCards() {
  let leftCards = document.querySelector(".mainCard");
  let cardContainer = leftCards.querySelectorAll(".buttonBox");
  let videoMainBox = document.querySelector(".videoMain");
  let video = videoMainBox.querySelectorAll(".cardVideo");
  let playPauseBtn = videoMainBox.querySelectorAll('.playBtn');
  console.log(playPauseBtn);

  for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].addEventListener("click", function () {
      cardContainer[i].classList.toggle("showMe");

      if (cardContainer[i].classList.contains("showMe")) {
        for (let j = 0; j < cardContainer.length; j++) {
          if (j !== i) {
            cardContainer[j].classList.remove("showMe");
          }
        }
      }
    });
  }
}
showHideCards(".shopify");



// LOGIN PAGE


