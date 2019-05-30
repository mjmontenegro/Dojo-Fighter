$('.arena').hover(function (){
    var loc = $(this).attr( 'loc');
    $('.container').css('background-image', "url('" + loc + "')");
    $('.container').css('background-size', 'cover');
} );

$('.arena').click( function () {
    $('.select-arena').hide();
    $('.select-players, .player1, .player2').show();
    $('audio')[0].play();
});

$('select').change( function() {
    var value = $(this).val();
    var player = $(this).attr("name");
    $("."+ player).css("background-image", "url('" + value + "')");
})
$('.ready').click( function() {
    $('.container').fadeOut();
})
