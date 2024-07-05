$(document).ready(function() {
    var joe = $("#joe")[0];
    $(".flip-card").hover(
        function() {
            joe.play();
        },
        function() { 
            joe.pause();
            joe.currentTime = 0;
        }
    );
});
