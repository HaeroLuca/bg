let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");


// color1.addEventListener("input", function() {
//   body.style.background = "linear-gradient(to right,"
//   +color1.value + "," + color2.value + ")";
// })

// color2.addEventListener("input", function() {
//   body.style.background = "linear-gradient(to right,"
//   +color1.value + "," + color2.value + ")";
// })


function setGradient() {
  body.style.background = "linear-gradient(to right,"
  +color1.value + "," + color2.value + ")";

  css.textContent = body.style.background + ";";

}


color1.addEventListener("input", setGradient);
//the code breaks if we add() after the function setGradient because event triggers automatically and runs a function, we want setGradient to be called when input is selected
color2.addEventListener("input", setGradient);

//we could have said in html
//<input onclick="setGradient()"class="color1" type="color" name="color1" value="#00ff00">
