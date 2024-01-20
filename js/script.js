"use strict";

const generateRandom = () => {
  document.querySelector(".custom-loader").style.display = "none";
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
      function copyToClipboard() {
        // Get the text from the input field
        var inputElement = document.querySelector("myInput");
        inputElement.select();

        // Create a range and select the text
        var range = document.createRange();
        range.selectNode(inputElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // Execute the copy command
        document.execCommand("copy");

        // Clear the selection
        window.getSelection().removeAllRanges();

        // Optionally, provide user feedback (e.g., alert or display a message)
        alert("Text has been copied to clipboard!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// Initialize
generateRandom();

// Handle click event for random
document
  .querySelector(".switch__regroup img")
  .addEventListener("click", generateRandom);

// fetch("https://api.quotable.io/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
