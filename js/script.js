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

        responsive: [
            {
                breakpoint:956,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:618,
                settings:{
                    slidesToShow: 1,
                }
            },
        ]
    });


    //featured_products_slider
    $('.featured_products_slider').slick({
        slidesToShow:4,

        responsive: [
            {
                breakpoint:1000,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:804,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 615,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });

    //news_blog_slider
    $('.blog_news_slider').slick({
        slidesToShow: 2,

        responsive:[
            {
                breakpoint: 830,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });


    //img_sliders
    $('.big_img_slider').slick({
        slidesToShow: 1,
        arrows:false,
        fade:true,
        asNavFor: ".lit_img_slider",
    });

    $('.lit_img_slider').slick({
        slidesToShow: 3,
        focusOnSelect: true,
        asNavFor: ".big_img_slider",
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

    //footer

    $('.name_mob').on('click',function(){
        //$('.list').togglelist('list_active');
        $(this).next('.list').slideToggle();
        $(this).closest('.item').toggleClass('item_active');

    });
});
