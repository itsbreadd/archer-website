$(document).ready(function() {
    $('.main-container').fadeIn(2500);
});

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    particlesJS.load('particles-div', 'scripts/particles.json',
        function(){
            console.log("particles.json loaded...");
        });
});
