const imgURL = document.getElementById("meme-url");
const topLine = document.getElementById("top-line");
const botLine = document.getElementById("bottom-line");
const btn = document.querySelector(".btn");
const memeContainer = document.querySelector(".meme-container");

// meme maker function
// first makes div to hold meme img and text
// then makes img and paragraphs to hold text
// last makes section with "X" so it can look like a remove button
function makeMeme(e) {
  e.preventDefault();
  if (imgURL.value !== "") {
    memeContainer.appendChild(document.createElement("div"));
    let imgSpot = document.querySelector(".meme-container div:last-child");
    imgSpot.appendChild(document.createElement("p"));
    imgSpot.appendChild(document.createElement("p"));
    imgSpot.appendChild(document.createElement("img"));
    document.querySelector("div:last-child img").src = imgURL.value;
    let topText = document.querySelector("div:last-child p");
    let botText = document.querySelector("div:last-child p:last-of-type");
    topText.innerText = topLine.value.toUpperCase();
    botText.innerText = botLine.value.toUpperCase();
    topLine.value = "";
    botLine.value = "";
    imgURL.value = "";
    imgSpot.appendChild(document.createElement("section"));
    let remove = document.querySelector("div:last-child section");
    remove.setAttribute("class", "remove");
    remove.innerText = "X";
  }
}

// meme maker function being called and prevent default on submit button
btn.addEventListener("click", function (e) {
  e.preventDefault();
  makeMeme(e);
});

// button style
btn.addEventListener("mousedown", function (e) {
  btn.style.color = "aliceblue";
  btn.style.backgroundColor = "blue";
});
btn.addEventListener("mouseup", function (e) {
  btn.style.color = "blue";
  btn.style.backgroundColor = "aliceblue";
});

// click on meme to remove as long as you aren't clicking the whole div which holds memes
let meme = document.querySelector(".meme-container");
meme.addEventListener("click", function (e) {
  if (e.target !== memeContainer) {
    console.log(e.target);
    e.target.parentNode.remove();
  }
});
