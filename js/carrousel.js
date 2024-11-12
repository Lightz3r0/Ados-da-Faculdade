var myCarousel = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, // Intervalo de 2 segundos
    ride: "carousel",
    pause: false,
    wrap: true // Permite loop contínuo
});