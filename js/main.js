$(function(){

    $('#navigation-menu').localScroll();

    $('#navigation-menu a').click(function(){
        $('a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#navigation-portfolio ul li').click(function(){
        $('li.active-portfolio').removeClass('active-portfolio');
        $(this).addClass('active-portfolio');
    });

});