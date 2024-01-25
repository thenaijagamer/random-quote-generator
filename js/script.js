"use strict";

// Initialize
generateRandom();

// Handle click event for random and Copy
document
  .querySelector(".switch__regroup")
  .addEventListener("click", generateRandom);
document
  .querySelector(".switch__link")
  .addEventListener("click", copyToClipboard);

// Generate random functionality
function generateRandom() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".custom-loader").style.display = "none";
      document.querySelector(".card__name").textContent = data.author;
      document.querySelector(".card__quote").textContent = `"${data.content}"`;
      document.querySelector(".card__btn-box").innerHTML = "";
      for (let i = 0; i < data.tags.length; i++) {
        document
          .querySelector(".card__btn-box")
          .insertAdjacentHTML(
            "afterbegin",
            `<button class="btn">${data.tags[i]}</button>`
          );
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Copy to clipboard functionality
function copyToClipboard() {
  const textToCopy = document.querySelector(".card__quote").textContent;
  const textToCopyWithoutQuote = textToCopy.replace(/"/g, "");

  // Create a temporary input element
  const tempInput = document.createElement("input");
  tempInput.value = textToCopyWithoutQuote;
  document.body.appendChild(tempInput);

  // Select the text and execute the copy command
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  alert("Text copied to clipboard");
}
