$(document).ready(function () {
    "use strict";

    $(window).scroll(function(){
        if($(this).scrollTop() > 118) {
            $(".os_header").addClass("os_header-fixed");
        } else {
            $(".os_header").removeClass("os_header-fixed");
        }
    });

    $(".os_header_mobile_content_left_burger").click(function() {
        $(".os_back_modal").addClass("active");
        $(".os_popup_menu").addClass("active");
        $("html").css("overflow", "hidden");
        $("html").css("positin", "hidden");
    });

    $(".os_back_modal").click(function() {
        $(".os_back_modal").removeClass("active");
        $(".os_popup_menu").removeClass("active");
        $("html").css("overflow", "auto");
    });

    $('.os_popup_menu_main_location').click(function() {
        $(this).toggleClass("open");
    });

    $(".os_popup_menu_main_catalog_drop ul .parent_drop .parent_drop_link").click(function(e) {
        e.preventDefault();
        $(this).siblings().addClass("open");
    });

    $(".parent_drop_block_back").click(function() {
        $(this).parent().removeClass("open");
    });

    $(".parent_drop_block_list_sub_link").click(function(e) {
        e.preventDefault();
        $(this).siblings().addClass("open");
    });

    $(".parent_drop_block_list_sub_block_back").click(function() {
        $(this).parent().removeClass("open");
    });

    $('.os_search_mobile_content form input[type=text]').focusin(function() {
        $(this).parent().addClass("focus");
    });

    $('.os_search_mobile_content form input[type=text]').focusout(function() {
        $(this).parent().removeClass("focus");
    });

    $('.os_header_desktop_top_form form input[type=text]').focusin(function() {
        $(this).parent().addClass("focus");
    });

    $('.os_header_desktop_top_form form input[type=text]').focusout(function() {
        $(this).parent().removeClass("focus");
    });

    $('.os_banner_slider_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.os_banner_slider_prev'),
        nextArrow: $('.os_banner_slider_next')
    });

    $(".os_footer_mob_top_accordion_title").click(function () {
        $(this).parent().toggleClass("active");
    });

    $(".os_header_desktop_bottom_catalog").hover(function() {
        $(this).toggleClass("drop");
    });

    var widthParentDrop = $(".os_header_desktop_bottom_catalog_drop").width();
    var widthResultChildMenu = widthParentDrop - 401;
    $(".sub_menu_drop_child").css("width", widthResultChildMenu + "px");

    $(".os_search_mobile_content_form form input[type=text]").on('input',function(e){
        if($(this).val()) {
            $(this).parent().parent().addClass("filled");
        } else {
            $(this).parent().parent().removeClass("filled");
        }
    });

    $(".os_header_desktop_top_form form input[type=text]").on('input',function(e){
        if($(this).val()) {
            $(this).parent().parent().addClass("filled");
        } else {
            $(this).parent().parent().removeClass("filled");
        }
    });
    
    $(".sub_menu_drop_child").overlayScrollbars({ });

    $(".os_search_mobile_content_form_droplist").overlayScrollbars({ });

    $(".os_header_desktop_top_form_droplist").overlayScrollbars({ });


});