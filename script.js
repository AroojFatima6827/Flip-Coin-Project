
const HeadCoin = document.querySelector(".Head-Coin");
const TailsCoin = document.querySelector(".Tails-Coin");
const randomButton = document.querySelector(".random");
const coinText = document.querySelector(".coin-text");

HeadCoin.style.display = "none";
TailsCoin.style.display = "none";
coinText.textContent = "";

function randomCoinToss() {
  
  HeadCoin.style.display = "none";
  TailsCoin.style.display = "none";
  coinText.textContent = ""; 

  
  if (Math.random() < 0.5) {
    HeadCoin.style.display = "block"; 
    coinText.textContent = "Heads"; 
    coinText.style.color = " #ECEDF1";
    coinText.style.paddingTop = "2rem";
    coinText.style.fontSize = "20px";
    coinText.style.fontWeight = "bolder";

    
  } else {
    TailsCoin.style.display = "block"; 
    coinText.textContent = "Tails";
    coinText.style.color = " #ECEDF1";
    coinText.style.paddingTop = "2rem";
    coinText.style.fontSize = "20px";
    coinText.style.fontWeight = "bolder";
  }
}

randomCoinToss();

HeadCoin.addEventListener("click", randomCoinToss);
TailsCoin.addEventListener("click", randomCoinToss);
randomButton.addEventListener("click", randomCoinToss);