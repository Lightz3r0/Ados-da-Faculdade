var myCarousel = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, 
    ride: "carousel",
    pause: false,
    wrap: true 
});