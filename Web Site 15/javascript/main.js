var go = document.getElementById('go');

window.onscroll = function () {
  if(scrollY >= 1800){
    go.classList.remove('hide');
    go.classList.add('show');
  }else{
    go.classList.remove('show');
    go.classList.add('hide');
  }

};

go.onclick = function () {
  var last = scrollY;
  var id = setInterval(function () {
    last-=20;
    if(last <= 0) {
      clearInterval(id);
      return;
    }
    window.scrollTo(0,last);
  }, 10);
};
