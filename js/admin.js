$(function () {
    $('ul.nav li').on('click', function(){

        $(this).parent().find('li').each(function(){
            $(this).removeClass('active');
        });

        $(this).addClass('active');
    })
});