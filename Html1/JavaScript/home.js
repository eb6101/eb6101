//Home js

// 获取 .sec3_scrolling-wrapper-flexbox 元素
const scrollingWrapper = document.querySelector('.sec3_scrolling-wrapper-flexbox');

// 获取向左滚动按钮和向右滚动按钮
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');

// 向左滚动按钮点击事件监听器
scrollLeftButton.addEventListener('click', () => {
  scrollingWrapper.scrollBy({
    left: -270, // 向左滚动距离
    behavior: 'smooth', // 平滑滚动
  });
});

// 向右滚动按钮点击事件监听器
scrollRightButton.addEventListener('click', () => {
  scrollingWrapper.scrollBy({
    left: 270, // 向右滚动距离
    behavior: 'smooth', // 平滑滚动
  });
});

//nav动效

const under_bar = document.querySelector('.nav_under');
const items = document.querySelectorAll('.nav_item');

function handle(e) {
    items.forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    })

    under_bar.style.width = `${e.offsetWidth}px`;
    under_bar.style.left = `${e.offsetLeft}px`;
    under_bar.style.backgroundColor = e.getAttribute('active-color');

    e.classList.add('is-active');
    e.style.color = e.getAttribute('active-color');
}

items.forEach((item, index) => {
    item.addEventListener('click', (e) => { handle(e.target) });
    item.classList.contains('is-active') && handle(item);
})

//nav隐藏显示
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
