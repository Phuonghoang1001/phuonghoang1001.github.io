$(document).ready(function() {
    $("#owl-brand-slider ").owlCarousel({
        loop: true,
        items: 5,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [320, 2],
        navigation: true,
        pagination: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.body.style.overflow = "hidden";
    document.getElementById("wrapper--middle").style.opacity="0.5";
    document.getElementById("wrapper--middle").style.display="block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
     document.body.style.backgroundColor = "white";
     document.body.style.overflow = "scroll";
     document.getElementById("wrapper--middle").style.opacity="0";
     document.getElementById("wrapper--middle").style.display="none";
}
function openCart() {
    document.getElementById("myCart").style.width = "300px";
    document.body.style.overflow = "hidden";
    document.getElementById("wrapper--middle").style.opacity="0.5";
    document.getElementById("wrapper--middle").style.display="block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeCart() {
    document.getElementById("myCart").style.width = "0";
     document.body.style.backgroundColor = "white";
     document.body.style.overflow = "scroll";
     document.getElementById("wrapper--middle").style.opacity="0";
     document.getElementById("wrapper--middle").style.display="none";
}

