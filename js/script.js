$(document).ready(function(){
    $('#menu_button').on('click',function(){
        $('#menu_button').toggleClass('activ_menu');
        $('#mob_menu').toggleClass('activ');
    });

    //search
    $('.search_icon').on('click',function(){
        $('.search_block').toggleClass('activ_search');
    });


    //main_slider
    $('.main_slider').slick({
        //autoplay:true,
        //autoplaySpeed: 3500,
        prevArrow:"<button type='button' class='slick-prev pull-left'>prev</button>",
    });


    //product_tupes_slider
    $('.product_types_slider').slick({
        slidesToShow: 3,
        prevArrow:"<button type='button' class='slick-prev pull-left'>prev</button>",
    });


    //featured_products_slider
    $('.featured_products_slider').slick({
        slidesToShow:4,
    });

    //news_blog_slider
    $('.blog_news_slider').slick({
        slidesToShow: 2,
    });

    //tab
    $('.tabs-triggers-item').click( function(e){
        e.preventDefault();

        $('.tabs-triggers-item').removeClass('tabs-triggers-item--active');
        $('.item_goods').removeClass('item_goods--active');

        $(this).addClass('tabs-triggers-item--active');

        $($(this).attr('href')).addClass('item_goods--active');
    });

    $('.tabs-triggers-item:first').click();

    //tab 2

    $('.tabs-triggers-item_02').click( function(a){
        a.preventDefault();
        $('.tabs-triggers-item_02').removeClass('tabs-triggers-item_02--active');
        $('.featured_products_item').removeClass('featured_products_item--active');

        $(this).addClass('tabs-triggers-item_02--active');
        $($(this).attr('href')).addClass('featured_products_item--active');
    });
    $('.tabs-triggers-item_02:first').click();
});