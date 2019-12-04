$(function() {
    locationofgl = $('#grade-levels').offset().top;
    console.log(locationofgl);

    $(".mouse").click(function() {
        console.log('dduwocj di');
        $('body, html').animate({ scrollTop: locationofgl });
        return false;
    })
})