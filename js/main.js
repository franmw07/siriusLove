const carousel = document.querySelectorAll('.img-nft-grid');
let containerCarousel = document.querySelector('.img-nft');

window.onscroll = function(){ scrollMove() };

const scrollMove = () =>{
    let scrolled = window.scrollY;
    if (scrolled >= 300 && scrolled <= 700) {
        let position = scrolled * 0.01;
        let positionEnd = Math.round(position - 3);
        carousel[0].style.transform = `translateX(${(positionEnd * 25)-100}%)`;
    }
};

