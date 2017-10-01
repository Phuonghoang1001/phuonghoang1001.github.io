$(document).ready(function() {
    $("#owl-brand-slider ").owlCarousel({
        loop: true,
        items: 6,
        itemsDesktop: [1000, 6],
        itemsDesktopSmall: [900, 4],
        itemsTablet: [600, 3],
        itemsMobile: [320, 2],
        navigation: false,
        pagination: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});
