$(document).ready(function() {
    $('.greeting').fadeIn(2500, function() {
        $('.greeting').fadeOut(2500, function() {
            $('.main-container').fadeIn(2500);
        });
    });
});


$('.sidebarform').fadeOut('slow', function() {
    $('.sidebarsuccess').fadeIn('slow');
});



$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    particlesJS.load('particles-div', 'scripts/particles.json',
        function(){
            console.log("particles.json loaded...");
        });
});
