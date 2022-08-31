// const myHeading = document.querySelector("h1");
// myHeading.textContent = "hello purna! ";

// let iceCream = "chocolate";
// if (iceCream === "choco") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }
// alert("hey hi ... my dear purna");
const m = document.querySelector("img");
m.onclick = () => {
  if (m.getAttribute("src") === "./bgpic.jpg") {
    m.setAttribute("src", "./bgpic2.jpg");
  } else {
    m.setAttribute("src", "./bgpic.jpg");
  }
};

let myheading = document.querySelector("h1");
let mybutton = document.querySelector("button");

function setUser() {
  const myname = prompt("enter the user Name");
  if (!myname) {
    setUser();
  }
  localStorage.setItem("name", myname);
  myheading.textContent = `${myname} is cool boy with hot attitude`;
}
if (!localStorage.getItem("name")) {
  setUser();
} else {
  const storedName = localStorage.getItem("name");
  myheading.textContent = `${storedName} is cool boy with hot attitude`;
}
mybutton.onclick = () => {
  setUser();
};
