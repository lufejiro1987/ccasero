$(function() {

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 1000, function() {
                window.location.hash = gato;
            });
        }
    });
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$('.carousel').carousel({
    interval: 4000
})

