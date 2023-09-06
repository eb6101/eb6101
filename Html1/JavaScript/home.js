//Home js

var y = 0;

function hideNav() {
  const nav = document.querySelector(".nav");
  nav.classList.remove("fixed");
  nav.classList.add("header-hide");
}

function showNav() {
  const nav = document.querySelector(".nav");
  nav.classList.remove("header-hide");
  nav.classList.add("fixed");
}

//窗口滚动监听
window.onscroll = function () {
  var diffY = document.documentElement.scrollTop;

  if (y > diffY) {
    // console.log("up")
    showNav();
  } else {
    // console.log('down')
    hideNav();
  }

  setTimeout(function () {
    y = diffY;
  }, 0);
};
