console.log("Let's Make some Logic");

let btn = document.querySelectorAll("button");
let display = document.querySelector("input");

let str = "";
let arr = Array.from(btn);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      display.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      display.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      display.value = str;
    } else {
      str += e.target.innerHTML;
      display.value = str;
    }
  });
});
