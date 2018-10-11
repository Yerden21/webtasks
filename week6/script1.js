let arr = new Array();
let tasks = document.querySelector("#tasks")
let divs = tasks.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  let but = divs[i].querySelector("button");
  but.addEventListener("click", function(e){
    divs[i].dataset.status = 'done';
  });
}