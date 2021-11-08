// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let change = document.getElementById("text")
    change.textContent = "This is really cool!";
  });

  console.log("dom not loaded yet");