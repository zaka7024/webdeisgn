
var box = document.getElementById('info');
var mainBack = document.getElementById('mb');
var isShow = false;
var lastHeight = mainBack.style.height;
var strings = [
  "INTRO",
  "WORK",
  "ABOUT",
  "CONTACT"
];

function showBox(key){

  isShow = true;

  box.style.display = "block";
  box.style.animationName = "show";
  box.style.animationPlayState = "running";

  mainBack.style.animationName = "showBackground";
  mainBack.style.animationPlayState = "running";
  mainBack.style.zIndex = 1;
  mainBack.style.width = "100%";
  mainBack.style.height = "1000px";

  document.getElementById('type').textContent = strings[key - 1];
}

function hideBox(){
  mainBack.style.height = lastHeight;
  isShow = false;

  box.style.animationName = "hide";
  mainBack.style.animationName = "hideBackground";
  setTimeout(function () {
    box.style.display = "none";
    mainBack.style.zIndex = -2;
  }, 500);
}

mainBack.onclick = function (){
  hideBox();
};
