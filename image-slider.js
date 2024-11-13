let nextimg = document.getElementById('next');
let previmg = document.getElementById('prev');
let carouselimg = document.querySelector('.carousel');
let listitemimg = document.querySelector('.carousel .list');
let thumbnailimg = document.querySelector('.carousel .thumbnail');
// let thumbnailitemimg = document.querySelectorAll('.item')
let timeimg = document.querySelector('.carousel .time');
nextimg.onclick = function() {
    showSlider('next');
}
previmg.onclick = function(){
    showSlider('prev')
}
let timeRunning = 1000;
let timeAutonext = 7000;
let runtimeOut;
let runAutoRun;
function showSlider(type){
    let itemslider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listitemimg.appendChild(itemslider[0]);
        thumbnailimg.appendChild(itemthumbnail[0]);
        carouselimg.classList.add('next');
    }else{
        let positionlastitem = itemslider.length - 1;
        listitemimg.prepend(itemslider[positionlastitem]);
        thumbnailimg.prepend(itemthumbnail[positionlastitem]);
        carouselimg.classList.add('prev');
    }


    clearTimeout(runtimeOut);
    runtimeOut = setTimeout( () => {
        carouselimg.classList.remove('next');
        carouselimg.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout( () => {
        nextimg.click();
    },timeAutonext)
}