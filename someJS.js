const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is the glorious text-content";
container.appendChild(content);

const redText = document.createElement("p");
container.appendChild(redText);
redText.textContent = "this is some red text";
document.getElementsByTagName("p")[0].id = "redText";
document.getElementById("redText").style.color = "red";

const blueH3 = document.createElement("h3");
container.appendChild(blueH3);
blueH3.textContent = "I'm a blue h3!";
document.getElementsByTagName("h3")[0].id = "blueH3";
document.getElementById("blueH3").style.color = "blue";

const div1 = document.createElement("div");
container.appendChild(div1);
const div1H1 = document.createElement("h1");
div1.appendChild(div1H1);
const div1P = document.createElement("p");
div1.appendChild(div1P);
div1H1.textContent = "I'm in a div";
div1P.textContent = "ME TOO!";
document.getElementsByTagName("div")[2].id = "div1";
document.getElementById("div1").style.backgroundColor = "pink";
document.getElementById("div1").style.borderColor = "black";

const btn = document.querySelector("#btn");

function alertFunction(){
  alert("yay! you did it")
};

btn.addEventListener("click", function (e) {
  console.log(e.target.style.background = "blue");
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () =>{
    alert(button.id);
  });
});
