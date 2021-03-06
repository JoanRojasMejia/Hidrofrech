window.addEventListener('scroll', function(){
    const header = document.querySelector ('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Contactanos//

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//Contactanos//

//Menu hamburguesa//

function toggleMenu () {
  const menutoggle = document.querySelector('.menutoggle');
  const navegation = document.querySelector('.navegation');
  menutoggle.classList.toggle('active');
  navegation.classList.toggle('active');
}

//Menu hamburguesa//