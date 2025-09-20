let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.querySelectorAll('.thumbnail .item');
let autoplayBtn = document.getElementById('autoplayBtn'); 

// config params
let countItem = items.length;
let itemActive = 0;
let refreshInterval;
let isAutoPlay = false; 

// event next click 
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// event prev click 
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// autoplay toggle
autoplayBtn.onclick = function () {
    if (isAutoPlay) {
        clearInterval(refreshInterval);
        autoplayBtn.textContent = "▶"; 
    } else {
        refreshInterval = setInterval(() => {
            next.click();
        }, 3000);
        autoplayBtn.textContent = "⏸"; 
    }
    isAutoPlay = !isAutoPlay;
}

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item 
    items[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');
}

// click thumbnail
thumbnail.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
