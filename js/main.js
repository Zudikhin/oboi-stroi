$(document).ready(function () {
    "use strict";

    $(window).scroll(function(){
        if($(this).scrollTop() > 118) {
            $(".os_header").addClass("os_header-fixed");
            $(".os_popup_comparison").addClass("os_popup_comparison-fixed");
            $(".os_popup_comparison_delete").addClass("os_popup_comparison_delete-fixed");
            $(".os_popup_favorites").addClass("os_popup_favorites-fixed");
            $(".os_popup_favorites_delete").addClass("os_popup_favorites_delete-fixed");
        } else {
            $(".os_header").removeClass("os_header-fixed");
            $(".os_popup_comparison").removeClass("os_popup_comparison-fixed");
            $(".os_popup_comparison_delete").removeClass("os_popup_comparison_delete-fixed");
            $(".os_popup_favorites").removeClass("os_popup_favorites-fixed");
            $(".os_popup_favorites_delete").removeClass("os_popup_favorites_delete-fixed");
        }
    });

    $(document).mouseup(function (e){
        var divListItem = $('.os_shop_content_block_main_catalog_list_item');
        if (!divListItem.is(e.target) && divListItem.has(e.target).length === 0) {
            $('.os_shop_content_block_main_catalog_list_item').removeClass("open");
        }
        if($(document).width() < 767) {
            $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
        }
    });

    $(".os_popup_order_close").click(function() {
        $(".os_popup_order").removeClass("active");
        $(".os_back_modal").removeClass("active");
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
        $(".os_popup_order").removeClass("active");
        $(".os_popup_wait").removeClass("active");
        $(".os_popup_under_order").removeClass("active");
        $(".os_popup_order_maked").removeClass("active");
        $(".os_popup_collection").removeClass("active");
        $(".os_popup_calculation").removeClass("active");
        $(".os_popup_main").removeClass("active");
        $(".os_popup_coating").removeClass("active");
        $(".os_popup_type_premises").removeClass("active");
        $(".os_popup_sort").removeClass("active");
        $(".os_popup_order form").removeClass("invalid");
        $(".os_popup_filter").removeClass("active");
        $(".os_popup_menu_main").children().removeClass("open");
        $(".os_popup_menu_main .parent_drop").children().removeClass("open");
        $(".os_popup_menu_main .parent_drop .parent_drop_block_list_sub").children().removeClass("open");
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

    $('.os_partners_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
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

    $(".os_shop_content_block_main_categories_show").click(function() {
        $(this).css("display", "none");
        $(this).parent().addClass("active");
    });

    $(".os_popup_filter_item_header").click(function(event) {
        var target = event.target.parentNode.className;
        if(target != 'os_popup_filter_item_header_tooltip') {
            $(this).parent().toggleClass("active");
        }        
    });

    $("#tooltipPremises").click(function() {
        $(".os_popup_type_premises").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $("#tooltipMain").click(function() {
        $(".os_popup_main").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $("#tooltipCoating").click(function() {
        $(".os_popup_coating").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    if($(document).width() < 767) {
        $(".os_shop_content_block_main_collection_list > a:lt(5)").each(function() {
            $(this).css("display", "block");
        });
    } else if($(document).width() > 767 && $(document).width() < 1365) {
        $(".os_shop_content_block_main_collection_list > a:lt(10)").each(function() {
            $(this).css("display", "block");
        });
    } else if($(document).width() > 1365 && $(document).width() < 1919) {
        $(".os_shop_content_block_main_collection_list > a:lt(20)").each(function() {
            $(this).css("display", "block");
        });
    } else {
        $(".os_shop_content_block_main_collection_list > a:lt(25)").each(function() {
            $(this).css("display", "block");
        });
    }

    var mobFilterCheckboxes = $(".os_popup_filter").find(':checkbox');
    mobFilterCheckboxes.each(function() {
        $(this).change(function() {
            if(mobFilterCheckboxes.is(':checked')) {
                $(".os_popup_filter_btns_drop").addClass("active");
                $(".os_popup_filter_btns_show").addClass("active");
                $(".os_popup_filter_btns_drop").removeAttr("disabled");
                $(".os_popup_filter_btns_show").removeAttr("disabled");
            } else {
                $(".os_popup_filter_btns_drop").removeClass("active");
                $(".os_popup_filter_btns_show").removeClass("active");
                $(".os_popup_filter_btns_drop").attr("disabled", true);
                $(".os_popup_filter_btns_show").attr("disabled", true);
            }
        });
    });

    var mobSortCheckboxes = $(".os_popup_sort").find(':checkbox');
    mobSortCheckboxes.each(function() {
        $(this).change(function() {
            mobSortCheckboxes.prop('checked', false);
            $(this).prop('checked', true);
            $(".os_popup_sort").removeClass("active");
            $(".os_back_modal").removeClass("active");
        });
    });

    $(".os_popup_filter_btns_show").click(function() {
        if($(this).hasClass("active")) {
            $(".os_popup_filter").removeClass("active");
            $(".os_back_modal").removeClass("active");
        }
    });

    
    $(".os_popup_filter_btns_drop").click(function() {
        if($(this).hasClass("active")) {
            $(this).removeClass('active');
            $(".os_popup_filter_btns_show").removeClass('active');
            mobFilterCheckboxes.each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    $(".filter_btns_sort").click(function() {
        $(".os_popup_sort").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".filter_btns_filter").click(function() {
        $(".os_popup_filter").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_shop_content_block_sidebar_item_header").click(function() {
        $(this).parent().toggleClass("active");
    });

    if($(document).width() < 767) {
        $(".os_shop_content_block_main_top_left .view .view_icon").removeClass("active");
        $(".os_shop_content_block_main_catalog_list").removeClass("module detail photo list");
        $(".os_shop_content_block_main_catalog_list").addClass("module");
        $("#viewModule").addClass("active");
    } else {
        $(".os_shop_content_block_main_top_left .view .view_icon").removeClass("active");
        $(".os_shop_content_block_main_catalog_list").removeClass("module detail photo list");
        $(".os_shop_content_block_main_catalog_list").addClass("list");
        $("#viewList").addClass("active");
    }

    $(".os_shop_content_block_main_top_left .view .view_icon").click(function() {
        $(".os_shop_content_block_main_top_left .view .view_icon").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr('id');
        $(".os_shop_content_block_main_catalog_list").removeClass("active");
        $(".os_shop_content_block_main_catalog").find(`[data-target='${id}']`).addClass("active");
        $(".os_shop_content_block_main_catalog").find(`[data-target='${id}']`).find(".os_top_slider_block").slick('refresh');
    });

    $(".os_shop_content_block_main_top_right_sort").hover(function() {
        $(this).toggleClass("active");
    });

    $(".os_shop_content_block_main_top_right_sort ul li").click(function() {
        $(".os_shop_content_block_main_top_right_sort ul li").removeClass("active");
        $(this).addClass("active");
        var changeText = $(this).text();
        $("#currentSort span").text(changeText);
    });

    $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").each(function() {
        if($(this).children().length > 1) {
            $(this).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
				fade: true,
                prevArrow: '<button type="button" class="os_button os_top_slider_block_button os_top_slider_block_button_prev"><img src="img/shop/slider/arrow_prev.svg" alt=""></button>',
	            nextArrow: '<button type="button" class="os_button os_top_slider_block_button os_top_slider_block_button_next"><img src="img/shop/slider/arrow_next.svg" alt=""></button>',
            });
        }
    });

    $('.os_watched_block_list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchMove: false,
        dots: false,
        draggable: false,
        swipe: false,
        arrows: true,
        prevArrow: $('.os_watched_block_header_btns_prev'),
        nextArrow: $('.os_watched_block_header_btns_next'),
        responsive: [
            {
              breakpoint: 1919,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 577,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
          ]
    });

    $('.os_watched_block_list').on('init', function() {
        if($(document).width() < 1025) {
            $(this).find('.slick-slide[data-slick-index="'+ 3 +'"]').addClass('last_slide');
        } else if($(document).width() > 1025 && $(document).width() < 1920) {
            $(this).find('.slick-slide[data-slick-index="'+ 4 +'"]').addClass('last_slide');
        } else {
            $(this).find('.slick-slide[data-slick-index="'+ 5 +'"]').addClass('last_slide');
        }
        
    });

    $('.os_watched_block_list').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var numberSlide = currentSlide + slick.options.slidesToShow - 1;
        $(".os_watched_block_list_item").removeClass("last_slide");
        $(this).find('.slick-slide[data-slick-index="'+ numberSlide +'"]').addClass('last_slide');
    });

    $(".os_watched_block_list_item .os_top .os_top_slider_block").each(function() {
        if($(this).children().length > 1) {
            $(this).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
				fade: true,
                prevArrow: '<button type="button" class="os_button os_top_slider_block_button os_top_slider_block_button_prev"><img src="img/shop/slider/arrow_prev.svg" alt=""></button>',
	            nextArrow: '<button type="button" class="os_button os_top_slider_block_button os_top_slider_block_button_next"><img src="img/shop/slider/arrow_next.svg" alt=""></button>',
            });
        }
    });

    $("#viewModule").click(function() {
        $(".os_shop_content_block_main_catalog_list").removeClass("module detail photo list");
        $(".os_shop_content_block_main_catalog_list").addClass("module");
        $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
    });

    $("#viewPhoto").click(function() {
        $(".os_shop_content_block_main_catalog_list").removeClass("module detail photo list");
        $(".os_shop_content_block_main_catalog_list").addClass("photo");
        $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
    });

    $("#viewList").click(function() {
        $(".os_shop_content_block_main_catalog_list").removeClass("module detail photo list");
        $(".os_shop_content_block_main_catalog_list").addClass("list");
        $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
    });

    $("#viewDetail").click(function() {
        $(".os_shop_content_block_main_catalog_list").removeClass("module detail photo list");
        $(".os_shop_content_block_main_catalog_list").addClass("detail");
        $(".os_shop_content_block_main_catalog_list").children().addClass("open");
        $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
    });

    if($(document).width() < 1025) {
        $('.os_shop_content_block_main_catalog_list_item').each(function() {

            var parent = $(this);
            var arraySlider = $(this).find('.os_top_slider_block_img');
            arraySlider.each(function() {
                $(this).click(function() {
                    $('.os_shop_content_block_main_catalog_list_item').removeClass("open");
                    parent.addClass("open");
                    $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
                });
            });
            var arrayLink = $(this).find("a");
            arrayLink.each(function() {
                $(this).on( "click", function(e) {
                    if(parent.hasClass("open")) {
                        var targetLink = $(this).attr('href'); 
                        window.open(targetLink, '_self');
                    } else {
                        e.preventDefault();
                        $('.os_shop_content_block_main_catalog_list_item').removeClass("open");
                        $(".os_shop_content_block_main_catalog_list_item_block .os_top .os_top_slider_block").slick('refresh');
                        parent.addClass("open");
                    }
                });
            });
            var btnComparison = $(this).find(".os_bottom_btns_comparison");
            btnComparison.click(function() {
                $(".os_popup_favorites").removeClass("active");
                $(".os_popup_favorites_delete").removeClass("active");
                $(".os_popup_comparison").addClass("active");
                $(".os_popup_comparison_delete").removeClass("active");
                parent.addClass("addcomparison");
            });
            var btnDeleteComparison = $(this).find(".os_bottom_btns_comparison_delete");
            btnDeleteComparison.click(function() {
                $(".os_popup_favorites").removeClass("active");
                $(".os_popup_favorites_delete").removeClass("active");
                $(".os_popup_comparison").removeClass("active");
                $(".os_popup_comparison_delete").addClass("active");
                parent.removeClass("addcomparison");
            });
    
            var btnFavorite = $(this).find(".os_bottom_btns_favorite");
            btnFavorite.click(function() {
                $(".os_popup_comparison").removeClass("active");
                $(".os_popup_comparison_delete").removeClass("active");
                $(".os_popup_favorites_delete").removeClass("active");
                $(".os_popup_favorites").addClass("active");
                parent.addClass("addfavorite");
            });
    
            var btnDeleteFavorite = $(this).find(".os_bottom_btns_favorite_delete");
            btnDeleteFavorite.click(function() {
                $(".os_popup_favorites_delete").addClass("active");
                $(".os_popup_comparison").removeClass("active");
                $(".os_popup_comparison_delete").removeClass("active");
                $(".os_popup_favorites").removeClass("active");
                parent.removeClass("addfavorite");
            });
    
            var btnOrder = $(this).find(".os_bottom_btns_order");
            btnOrder.click(function() {
                $(".os_popup_order").addClass("active");
                $(".os_back_modal").addClass("active");
            });
    
            var btnBuy = $(this).find(".os_bottom_btns_buy");
            btnBuy.click(function() {
                $(".os_popup_cart").addClass("active");
            });

            var btnUnderOrder = $(this).find(".os_top_info_order");
            btnUnderOrder.click(function() {
                $(".os_popup_under_order").addClass("active");
                $(".os_back_modal").addClass("active");
            });

            var btnWait = $(this).find(".os_top_info_wait");
            btnWait.click(function() {
                $(".os_popup_wait").addClass("active");
                $(".os_back_modal").addClass("active");
            });

        });
    } else {
        $('.os_shop_content_block_main_catalog_list_item').hover(function() {
            if($(this).parent().hasClass("list")) {
                $(this).toggleClass("open");
            }
        });

        $('.os_shop_content_block_main_catalog_list_item').each(function() {
            var parent = $(this); 
            var btnComparison = $(this).find(".os_bottom_btns_comparison");
            btnComparison.click(function() {
                $(".os_popup_favorites").removeClass("active");
                $(".os_popup_favorites_delete").removeClass("active");
                $(".os_popup_comparison").addClass("active");
                $(".os_popup_comparison_delete").removeClass("active");
                parent.addClass("addcomparison");
            });
            var btnDeleteComparison = $(this).find(".os_bottom_btns_comparison_delete");
            btnDeleteComparison.click(function() {
                $(".os_popup_favorites").removeClass("active");
                $(".os_popup_favorites_delete").removeClass("active");
                $(".os_popup_comparison").removeClass("active");
                $(".os_popup_comparison_delete").addClass("active");
                parent.removeClass("addcomparison");
            });
    
            var btnFavorite = $(this).find(".os_bottom_btns_favorite");
            btnFavorite.click(function() {
                $(".os_popup_comparison").removeClass("active");
                $(".os_popup_comparison_delete").removeClass("active");
                $(".os_popup_favorites_delete").removeClass("active");
                $(".os_popup_favorites").addClass("active");
                parent.addClass("addfavorite");
            });
    
            var btnDeleteFavorite = $(this).find(".os_bottom_btns_favorite_delete");
            btnDeleteFavorite.click(function() {
                $(".os_popup_favorites_delete").addClass("active");
                $(".os_popup_comparison").removeClass("active");
                $(".os_popup_comparison_delete").removeClass("active");
                $(".os_popup_favorites").removeClass("active");
                parent.removeClass("addfavorite");
            });

            var btnOrder = $(this).find(".os_bottom_btns_order");
            btnOrder.click(function() {
                $(".os_popup_order").addClass("active");
                $(".os_back_modal").addClass("active");
            });
    
            var btnBuy = $(this).find(".os_bottom_btns_buy");
            btnBuy.click(function() {
                $(".os_popup_cart").addClass("active");
            });

            $(this).find(".os_bottom_quantity_minus").on( "click", function(e) {
                var valNumber = $(this).parent().find(".os_bottom_quantity_number").text();
                var intValNumber = parseInt(valNumber);
                console.log(intValNumber);
                if(intValNumber > 1) {
                    var resultVal = intValNumber - 1;
                    $(this).parent().find(".os_bottom_quantity_number").text(resultVal);
                }
            });

            $(this).find(".os_bottom_quantity_plus").on( "click", function(e) {
                var valNumber = $(this).parent().find(".os_bottom_quantity_number").text();
                var intValNumber = parseInt(valNumber);
                console.log(intValNumber);
                var resultVal = intValNumber + 1;
                $(this).parent().find(".os_bottom_quantity_number").text(resultVal);
            });
            
        });

    }

    if($(document).width() < 1025) {
        $('.os_watched_block_list_item').each(function() {
            var btnUnderOrder = $(this).find(".os_top_info_order");
            btnUnderOrder.click(function() {
                $(".os_popup_under_order").addClass("active");
                $(".os_back_modal").addClass("active");
            });
            var btnWait = $(this).find(".os_top_info_wait");
            btnWait.click(function() {
                $(".os_popup_wait").addClass("active");
                $(".os_back_modal").addClass("active");
            });
        });
    }

    $(".os_bottom_calculation").click(function() {
        $(".os_popup_calculation").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_popup_calculation_select_current").click(function() {
        $(this).parent().toggleClass("active");
    });

    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
          if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
          } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          } else {
            this.value = "";
          }
        });
    };

    $(".os_popup_calculation").find("input").inputFilter(function(value) {
        return /^\d*\.?\d*$/.test(value);
    });

    $(".os_popup_calculation_walls_btn").on( "click", function() {
        var num = $(".os_popup_calculation_walls_main > label").last().find(".num").text();
        var intNum = parseInt(num);
        intNum++;
        $(".os_popup_calculation_walls_main").append( `<label><span class="os_span">Ширина стены <span class="os_span num">${intNum}</span>, м</span><input type="text"></label>`);
    });

    $(".os_popup_calculation_doors_btn").on( "click", function() {
        var arrayLabel = $(".os_popup_calculation_doors_main > .os_popup_calculation_doors_main_item").last().find("label");
        if(arrayLabel.length != 0) {
            var number;
            arrayLabel.each(function() {
                var num = $(this).find(".num").text();
                var intNum = parseInt(num);
                intNum++;
                number = intNum;
            });
            $(".os_popup_calculation_doors_main").append(`<div class="os_popup_calculation_doors_main_item"><label><span class="os_span">Высота двери <span class="os_span num">${number}</span>, м</span><input type="text"></label><label><span class="os_span">Ширина двери <span class="os_span num">${number}</span>, м</span><input type="text"></label></div>`);
        } else {
            $(".os_popup_calculation_doors_main").append(`<div class="os_popup_calculation_doors_main_item"><label><span class="os_span">Ширина двери <span class="os_span num">1</span>, м</span><input type="text"></label><label><span class="os_span">Ширина двери <span class="os_span num">1</span>, м</span><input type="text"></label></div>`);
        } 
    });

    $(".os_popup_calculation_window_btn").on( "click", function() {
        var arrayLabel = $(".os_popup_calculation_window_main > .os_popup_calculation_window_main_item").last().find("label");
        if(arrayLabel.length != 0) {
            var number;
            arrayLabel.each(function() {
                var num = $(this).find(".num").text();
                var intNum = parseInt(num);
                intNum++;
                number = intNum;
            });
            $(".os_popup_calculation_window_main").append(`<div class="os_popup_calculation_window_main_item"><label><span class="os_span">Высота окна <span class="os_span num">${number}</span>, м</span><input type="text"></label><label><span class="os_span">Ширина двери <span class="os_span num">${number}</span>, м</span><input type="text"></label></div>`);
        } else {
            $(".os_popup_calculation_window_main").append(`<div class="os_popup_calculation_window_main_item"><label><span class="os_span">Ширина двери <span class="os_span num">1</span>, м</span><input type="text"></label><label><span class="os_span">Ширина двери <span class="os_span num">1</span>, м</span><input type="text"></label></div>`);
        } 
    });

    $(".os_popup_calculation_header_close").click(function() {
        $(".os_popup_calculation").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".os_popup_cart").click(function(e) {
        if($(this).has(e.target).length === 0) {
            $(this).removeClass("active");
        }
    });

    $(".os_popup_cart_block_btns_button").click(function() {
        $(".os_popup_cart").removeClass("active");
    });

    $(".os_popup_cart_block_header_btn").click(function() {
        $(".os_popup_cart").removeClass("active");
    });

    $(".os_popup_cart_block_body_item_quantity_minus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_popup_cart_block_body_item_quantity_number").text();
        var intValNumber = parseInt(valNumber);
        if(intValNumber > 1) {
            var resultVal = intValNumber - 1;
            $(this).parent().find(".os_popup_cart_block_body_item_quantity_number").text(resultVal);
        }
    });

    $(".os_popup_cart_block_body_item_quantity_plus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_popup_cart_block_body_item_quantity_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".os_popup_cart_block_body_item_quantity_number").text(resultVal);
    });

    $(".os_popup_order form").submit(function() {
        if($(this).find('input[type="tel"]').val() == '' ) {
            $(this).addClass("invalid");
            return false;
        } else {
            $(".os_popup_order").removeClass("active");
            $(".os_popup_order_maked").addClass("active");
            return false;
        }
    })

    $(".os_popup_order_maked button").click(function() {
        $(".os_popup_order_maked").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".os_shop_content_block_main_collection_show").click(function() {
        if($(document).width() < 1365) {
            $(".os_popup_collection").addClass("active");
            $(".os_back_modal").addClass("active");
        } else {
            $(".os_shop_content_block_main_collection_list > a").css("display", "block");
            $(this).css("display", "none");
            $(".os_shop_content_block_main_collection_hide").css("display", "block");
        }
    });

    $(".os_shop_content_block_main_collection_hide").click(function() {
        $(this).css("display", "none");
        $(".os_shop_content_block_main_collection_show").css("display", "block");
        if($(document).width() > 1365 && $(document).width() < 1919) {
            $(".os_shop_content_block_main_collection_list > a").css("display", "none");
            $(".os_shop_content_block_main_collection_list > a:lt(20)").css("display", "block");
        } else {
            $(".os_shop_content_block_main_collection_list > a").css("display", "none");
            $(".os_shop_content_block_main_collection_list > a:lt(25)").css("display", "block");
        }
    });

    $(".os_popup_calculation_outcome_block_btn").click(function() {

        var detectEmptyWalls = true;
        $(".os_popup_calculation_walls").find("input").each(function() {
            if(!$(this).val()) {
                $(this).addClass("error");
                detectEmptyWalls = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if(detectEmptyWalls == false) {
            $(".os_popup_calculation_walls").addClass("error");
        } else {
            $(".os_popup_calculation_walls").removeClass("error");
        } 

        var detectEmptyDoors = true;
        $(".os_popup_calculation_doors").find("input").each(function() {
            if(!$(this).val()) {
                $(this).addClass("error");
                detectEmptyDoors = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if(detectEmptyDoors == false) {
            $(".os_popup_calculation_doors").addClass("error");
        } else {
            $(".os_popup_calculation_doors").removeClass("error");
        } 
        

        var detectEmptyWindow = true;
        $(".os_popup_calculation_window").find("input").each(function() {
            if(!$(this).val()) {
                $(this).addClass("error");
                detectEmptyWindow = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if(detectEmptyWindow == false) {
            $(".os_popup_calculation_window").addClass("error");
        } else {
            $(".os_popup_calculation_window").removeClass("error");
        }

        var detectEmptySizes = true;
        $(".os_popup_calculation_sizes").find("input").each(function() {
            if(!$(this).val()) {
                $(this).addClass("error");
                detectEmptySizes = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if(detectEmptySizes == false) {
            $(".os_popup_calculation_sizes").addClass("error");
        } else {
            $(".os_popup_calculation_sizes").removeClass("error");
        }

        if($(".os_popup_calculation").find(".error").length == 0) {
            $(".os_popup_calculation").removeClass("active");
            $(".os_back_modal").removeClass("active");
        }

    });

    $(".os_brands_block_anchors_list_item").click(function() {
        var target = $(this).attr("data-target");
        $('html, body').animate({
            scrollTop: $(`#${target}`).offset().top - $(window).height() / 2
        }, 1500);
    });

    $(".os_popup_calculation_select_list").overlayScrollbars({ });

    $(".os_popup_filter_item_body_list").overlayScrollbars({ });

    $(".os_popup_collection_list_block").overlayScrollbars({ });

    $(".os_popup_cart_recommend_list").overlayScrollbars({ });
        
    $(".os_shop_content_block_sidebar_item_body_list").overlayScrollbars({ });
    
    $(".sub_menu_drop_child").overlayScrollbars({ });

    $(".os_search_mobile_content_form_droplist").overlayScrollbars({ });

    $(".os_header_desktop_top_form_droplist").overlayScrollbars({ });


});