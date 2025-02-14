$(document).ready(function() {
    // Fancybox inicializálása képekhez és galériához
    $('[data-fancybox="gallery"]').fancybox({
        loop: true, // Ciklusos megjelenítés
        buttons: ["zoom", "share", "close"], // Elérhető gombok
        animationEffect: "fade", // Fade animáció
        transitionEffect: "slide", // Slide animáció
    });

    // Mmenu inicializálása mobil navigációhoz
    $('#my-menu').mmenu({
        slidingSubmenus: false, // Nincs szétcsúszó almenü
        offCanvas: {
            position: "left" // Bal oldali menü
        },
        navbars: [
            {
                position: 'top',
                content: ['search', 'close']
            }
        ]
    });

    // Árfekvés alapú szűrő
    $('#price-range').on('input', function() {
        var maxPrice = $(this).val(); // Max ár
        $('.product-card').each(function() {
            var productPrice = parseInt($(this).find('.price').text().replace(/\D/g, '')); // Termék árának kiolvasása
            if (productPrice <= maxPrice) {
