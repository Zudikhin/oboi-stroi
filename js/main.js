$(document).ready(function () {
    "use strict";

    $(window).scroll(function(){
        if($(this).scrollTop() > 118) {
            $(".os_header").addClass("os_header-fixed");
            $(".os_header_cart").addClass("os_header_cart-fixed");
            $(".os_popup_comparison").addClass("os_popup_comparison-fixed");
            $(".os_popup_comparison_delete").addClass("os_popup_comparison_delete-fixed");
            $(".os_popup_favorites").addClass("os_popup_favorites-fixed");
            $(".os_popup_favorites_delete").addClass("os_popup_favorites_delete-fixed");
        } else {
            $(".os_header").removeClass("os_header-fixed");
            $(".os_header_cart").removeClass("os_header_cart-fixed");
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
        $(".os_popup_delivery_condition").removeClass("active");
        $(".os_popup_main").removeClass("active");
        $(".os_popup_coating").removeClass("active");
        $(".os_popup_type_premises").removeClass("active");
        $(".os_popup_sort").removeClass("active");
        $(".os_popup_review_product").removeClass("active");
        $(".os_popup_product_free").removeClass("active");
        $(".os_popup_video").removeClass("active");
        $(".os_popup_order form").removeClass("invalid");
        $(".os_popup_filter").removeClass("active");
        $(".os_popup_review").removeClass("active");
        $(".os_popup_registration").removeClass("active");
        $(".os_popup_color").removeClass("active");
        $(".os_popup_companion").removeClass("active");
        $(".os_popup_menu_main").children().removeClass("open");
        $(".os_popup_menu_main .parent_drop").children().removeClass("open");
        $(".os_popup_menu_main .parent_drop .parent_drop_block_list_sub").children().removeClass("open");
        $("html").css("overflow", "auto");
    });

    $(".os_back_modal_second").click(function() {
        $(".os_popup_type_premises").removeClass("active");
        $(".os_popup_main").removeClass("active");
        $(".os_popup_coating").removeClass("active");
        $(this).removeClass("active");
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
        $(".os_back_modal_second").addClass("active");
    });

    $("#tooltipMain").click(function() {
        $(".os_popup_main").addClass("active");
        $(".os_back_modal_second").addClass("active");
    });

    $("#tooltipCoating").click(function() {
        $(".os_popup_coating").addClass("active");
        $(".os_back_modal_second").addClass("active");
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
            $(".os_popup_calculation_doors_main").append(`<div class="os_popup_calculation_doors_main_item"><label><span class="os_span">Высота двери <span class="os_span num">${number}</span>, м</span><input class="os_input" type="text"></label><label><span class="os_span">Ширина двери <span class="os_span num">${number}</span>, м</span><input class="os_input" type="text"></label></div>`);
        } else {
            $(".os_popup_calculation_doors_main").append(`<div class="os_popup_calculation_doors_main_item"><label><span class="os_span">Ширина двери <span class="os_span num">1</span>, м</span><input class="os_input" type="text"></label><label><span class="os_span">Ширина двери <span class="os_span num">1</span>, м</span><input class="os_input" type="text"></label></div>`);
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
    });

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

    $('.os_shop_content_block_sidebar input[type="checkbox"]').change(function() {
        
        var id = $(this).parent().attr('id');
        var offsetTop = $("#"+id).offset().top;
        var offsetLeft = $("#"+id).offset().left;
        $(".os_shop_content_block_sidebar_show").css({
            "opacity": "1",
            "top": offsetTop - 310 + "px",
            "left": offsetLeft + 225 + "px"
        });
    });

    $(".os_cart_content_main_list_item_left_quantity_minus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_cart_content_main_list_item_left_quantity_number").text();
        var intValNumber = parseInt(valNumber);
        if(intValNumber > 1) {
            var resultVal = intValNumber - 1;
            $(this).parent().find(".os_cart_content_main_list_item_left_quantity_number").text(resultVal);
        }
    });

    $(".os_cart_content_main_list_item_left_quantity_plus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_cart_content_main_list_item_left_quantity_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".os_cart_content_main_list_item_left_quantity_number").text(resultVal);
    });

    if($(document).width() > 767) {
        var volume = $(".os_cart_content_main_list_item_left").find(".volume");
        volume.each(function() {
            $(this).parent().siblings().find(".os_cart_content_main_list_item_right_cost").css("top", "56px");
        }); 
    }

    $('.os_forget_main_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.os_forget_main_header_btns_prev'),
        nextArrow: $('.os_forget_main_header_btns_next'),
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

    $('.os_popup_buy_block_main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        prevArrow: $('.os_popup_buy_block_main_btns_prev'),
        nextArrow: $('.os_popup_buy_block_main_btns_next')
    });

    $(".os_popup_buy_block_quantity_numbers_minus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_popup_buy_block_quantity_numbers_number").text();
        var intValNumber = parseInt(valNumber);
        if(intValNumber > 1) {
            var resultVal = intValNumber - 1;
            $(this).parent().find(".os_popup_buy_block_quantity_numbers_number").text(resultVal);
        }
    });

    $(".os_popup_buy_block_quantity_numbers_plus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_popup_buy_block_quantity_numbers_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".os_popup_buy_block_quantity_numbers_number").text(resultVal);
    });

    $(".os_popup_buy").click(function(e) {
        if($(this).has(e.target).length === 0) {
            $(this).removeClass("active");
        }
    });

    $(".os_popup_buy_block_close").click(function() {
        $(".os_popup_buy").removeClass("active");
    });


    $('.os_popup_add_block_main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        prevArrow: $('.os_popup_add_block_main_btns_prev'),
        nextArrow: $('.os_popup_add_block_main_btns_next')
    });

    $(".os_popup_add_block_quantity_numbers_minus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_popup_add_block_quantity_numbers_number").text();
        var intValNumber = parseInt(valNumber);
        if(intValNumber > 1) {
            var resultVal = intValNumber - 1;
            $(this).parent().find(".os_popup_add_block_quantity_numbers_number").text(resultVal);
        }
    });

    $(".os_popup_add_block_quantity_numbers_plus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_popup_add_block_quantity_numbers_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".os_popup_add_block_quantity_numbers_number").text(resultVal);
    });

    $(".os_popup_add").click(function(e) {
        if($(this).has(e.target).length === 0) {
            $(this).removeClass("active");
        }
    });

    $(".os_popup_add_block_close").click(function() {
        $(".os_popup_add").removeClass("active");
    });

    $(".os_cart_content_main_list_item .os_cart_content_main_list_item_left .img").click(function() {
        $(".os_popup_add").addClass("active");
    });

    $(".os_cart_content_main_list_item .os_cart_content_main_list_item_right h4").click(function() {
        $(".os_popup_add").addClass("active");
    });

    $(".os_cart_content_main_list_item .os_cart_content_main_list_item_right .article").click(function() {
        $(".os_popup_add").addClass("active");
    });

    $(".os_cart_content_main_list_item .os_cart_content_main_list_item_right .warehouse").click(function() {
        $(".os_popup_add").addClass("active");
    });

    $(".os_cart_content_main_list_item .os_cart_content_main_list_item_right_cost").click(function() {
        $(".os_popup_add").addClass("active");
    });

    $(".os_forget_main_slider .os_forget_main_slider_item_img").click(function() {
        $(".os_popup_buy").addClass("active");
    });

    $(".os_forget_main_slider .os_forget_main_slider_item h4").click(function() {
        $(".os_popup_buy").addClass("active");
    });

    $(".os_forget_main_slider .os_forget_main_slider_item .article").click(function() {
        $(".os_popup_buy").addClass("active");
    });

    $(".os_forget_main_slider .os_forget_main_slider_item .os_forget_main_slider_item_warehouse").click(function() {
        $(".os_popup_buy").addClass("active");
    });

    $(".os_forget_main_slider .os_forget_main_slider_item .os_forget_main_slider_item_sticer").click(function() {
        $(".os_popup_buy").addClass("active");
    });

    $(".os_forget_main_slider .os_forget_main_slider_item .os_forget_main_slider_item_price").click(function() {
        $(".os_popup_buy").addClass("active");
    });

    $(".os_forget_main_slider_item_buy").click(function() {
        $('html, body').animate({
            scrollTop: 0}, 1500);
    });

    $(".os_cart_empty_content_main_bottom_form form input[type=text]").on('input',function(e){
        if($(this).val()) {
            $(this).parent().parent().addClass("filled");
        } else {
            $(this).parent().parent().removeClass("filled");
        }
    });

    $(".os_checkout_content_main_left_method_delivery_current").click(function() {
        $(this).parent().toggleClass('active');
    });

    $(".os_checkout_content_main_left_method_delivery_drop ul li").click(function() {
        var text = $(this).find("span").text();
        $(".os_checkout_content_main_left_method_delivery_current span").text(text);
        $(".os_checkout_content_main_left_method_delivery").removeClass("active");
    });

    $(".os_checkout_content_main_left_method_pay_current").click(function() {
        $(this).parent().toggleClass('active');
    });

    $(".os_checkout_content_main_left_method_pay_drop ul li").click(function() {
        var text = $(this).find("span").text();
        $(".os_checkout_content_main_left_method_pay_current span").text(text);
        $(".os_checkout_content_main_left_method_pay").removeClass("active");
    });

    $(".os_checkout_content_main_left_promo").click(function() {
        $(".os_checkout_content_main_left_promocode").toggleClass('active');
    });

    $(".os_popup_delivery_condition_title_close").click(function() {
        $(".os_popup_delivery_condition").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".os_checkout_content_main_left_delivery").click(function() {
        $(".os_popup_delivery_condition").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_checkout_content_main_left_promocode form button").click(function() {
        $(this).parent().css("display", "none");
        $(".os_checkout_content_main_left_promocode_success").css("display", "block");
    });

    $(".os_nav_item_header").click(function() {
        if($(document).width() < 767) {
            $(this).parent().toggleClass('active');
        } else {
            return false;
        }
    });

    $(".os_popup_buy_block_quantity_math").click(function() {
        $(".os_popup_buy").removeClass("active");
        $(".os_popup_calculation").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $('.os_showroom_main_block_photo_main_slider_block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        prevArrow: $('.os_showroom_main_block_photo_main_slider_btns_prev'),
        nextArrow: $('.os_showroom_main_block_photo_main_slider_btns_next')
    });

    $(".general_btn_showroom button").click(function() {
        $(".os_popup_registration").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_popup_registration form").submit(function() {
        var checkInvalid = true;
        var arrInput = $(this).find('input');
        arrInput.each(function() {
            if($(this).val() == '') {
                $(this).addClass("invalid");
                checkInvalid = false;
            } else {
                $(this).removeClass("invalid");
            }
        });

        if(checkInvalid == false) {
            $(".os_popup_registration_form form").addClass("error");
        } else {
            $(".os_popup_registration_form form").removeClass("error");
            $(".os_popup_registration").removeClass("active");
            $(".os_popup_registation_thank").addClass("active");
        }

        return false;

    });

    $(".os_popup_registation_thank button").click(function() {
        $(".os_popup_registation_thank").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".os_showroom_main_block_registration button").click(function() {
        $(".os_popup_registration").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_popup_registration_title button").click(function() {
        $(".os_popup_registration").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".os_popup_registation_thank_title button").click(function() {
        $(".os_popup_registation_thank").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $('.os_popup_slider_showroom_block_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        prevArrow: $('.os_popup_slider_showroom_block_main_item_prev'),
        nextArrow: $('.os_popup_slider_showroom_block_main_item_next')
    });

    $(".os_showroom_main_block_map button").click(function() {
        $(".os_popup_slider_showroom").addClass("active");
    });

    $(".os_popup_slider_showroom_block_title button").click(function() {
        $(".os_popup_slider_showroom").removeClass("active");
    });

    $(".os_popup_slider_showroom").click(function(e) {
        if($(this).has(e.target).length === 0) {
            $(this).removeClass("active");
        }
    });

    $(".os_delivery_main_block_mo_btns_show").click(function() {
        $(".os_delivery_main_block_mo_drop").addClass("active");
        $(this).removeClass("active");
        $(".os_delivery_main_block_mo_btns_hide").addClass("active");
    });

    $(".os_delivery_main_block_mo_btns_hide").click(function() {
        $(".os_delivery_main_block_mo_drop").removeClass("active");
        $(this).removeClass("active");
        $(".os_delivery_main_block_mo_btns_show").addClass("active");
    });

    $(".os_delivery_main_block_country_btns_show").click(function() {
        $(".os_delivery_main_block_country_drop").addClass("active");
        $(this).removeClass("active");
        $(".os_delivery_main_block_country_btns_hide").addClass("active");
    });

    $(".os_delivery_main_block_country_btns_hide").click(function() {
        $(".os_delivery_main_block_country_drop").removeClass("active");
        $(this).removeClass("active");
        $(".os_delivery_main_block_country_btns_show").addClass("active");
    });


    $(".os_navigation_feature .os_navigation_feature_drop_item_header").click(function() {
        if($(this).parent().hasClass("active")) {
            $(".os_navigation_feature_drop_item").removeClass('active');
        } else {
            $(".os_navigation_feature_drop_item").removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $(".os_navigation_feature_open").click(function() {
        $(this).parent().addClass("active");
    });

    $(".os_navigation_feature_drop_close").click(function() {
        $(".os_navigation_feature").removeClass("active");
    });

    $(".os_delivery_main_block_options_item").click(function() {
        var target = $(this).attr("data-target");
        $('html, body').animate({
            scrollTop: $(`#${target}`).offset().top - $(window).height() / 2
        }, 1500);
    });

    $(".os_return_main_block_proper_btns_show").click(function() {
        $(".os_return_main_block_proper_drop").addClass("active");
        $(this).removeClass("active");
        $(".os_return_main_block_proper_btns_hide").addClass("active");
    });

    $(".os_return_main_block_proper_btns_hide").click(function() {
        $(".os_return_main_block_proper_drop").removeClass("active");
        $(this).removeClass("active");
        $(".os_return_main_block_proper_btns_show").addClass("active");
    });

    $(".os_return_main_block_unproper_btns_show").click(function() {
        $(".os_return_main_block_unproper_drop").addClass("active");
        $(this).removeClass("active");
        $(".os_return_main_block_unproper_btns_hide").addClass("active");
    });

    $(".os_return_main_block_unproper_btns_hide").click(function() {
        $(".os_return_main_block_unproper_drop").removeClass("active");
        $(this).removeClass("active");
        $(".os_return_main_block_unproper_btns_show").addClass("active");
    });

    $(".os_guarantees_main_block_warranty_dealer_btns_show").click(function() {
        $(this).removeClass("active");
        $(".os_guarantees_main_block_warranty_dealer").addClass("active");
        $(".os_guarantees_main_block_warranty_dealer_btns_hide").addClass("active");
    });

    $(".os_guarantees_main_block_warranty_dealer_btns_hide").click(function() {
        $(this).removeClass("active");
        $(".os_guarantees_main_block_warranty_dealer").removeClass("active");
        $(".os_guarantees_main_block_warranty_dealer_btns_show").addClass("active");
    });

    $(".os_guarantees_main_block_warranty_quality_btns_show").click(function() {
        $(this).removeClass("active");
        $(".os_guarantees_main_block_warranty_quality").addClass("active");
        $(".os_guarantees_main_block_warranty_quality_btns_hide").addClass("active");
    });

    $(".os_guarantees_main_block_warranty_quality_btns_hide").click(function() {
        $(this).removeClass('active');
        $(".os_guarantees_main_block_warranty_quality").removeClass("active");
        $(".os_guarantees_main_block_warranty_quality_btns_show").addClass("active");
    });


    $(".os_make_order_main_block_item_drop_btns_show").click(function() {
        $(this).removeClass("active");
        $(".os_make_order_main_block_item_drop_list").addClass("active");
        $(".os_make_order_main_block_item_drop_btns_hide").addClass("active");
    });

    $(".os_make_order_main_block_item_drop_btns_hide").click(function() {
        $(this).removeClass('active');
        $(".os_make_order_main_block_item_drop_list").removeClass("active");
        $(".os_make_order_main_block_item_drop_btns_show").addClass("active");
    });

    $(".os_privacy_policy_main_block_item_header").click(function() {
        $(this).parent().toggleClass('active');
    });

    $(".os_terms_of_use_main_block_item_header").click(function() {
        $(this).parent().toggleClass('active');
    });

    $(".os_navigation_blog_open").click(function() {
        $(this).parent().addClass('active');
    });

    $(".os_navigation_blog_drop_close").click(function() {
        $(this).parent().parent().removeClass('active');
    });

    $(".os_popup_add_block_quantity_math").click(function() {
        $(".os_popup_add").removeClass("active");
        $(".os_popup_calculation").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_popup_add_block_add").click(function() {
        var valNumber = $(this).parent().find(".os_popup_add_block_quantity_numbers_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".os_popup_add_block_quantity_numbers_number").text(resultVal);
    });

    $('.os_reviews_main_block_content_slider_block_list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        prevArrow: $('.os_reviews_main_block_content_slider_block_btns_prev'),
        nextArrow: $('.os_reviews_main_block_content_slider_block_btns_next')
    });

    $(".os_reviews_main_block_content_slider_block_list").on('afterChange', function(event, slick, currentSlide){
        var arrSlider = $('.os_reviews_main_block_content_slider_block_list_item');
        arrSlider.each(function() {
            var indexSlide = $(this).attr("data-slick-index");
            if(indexSlide != currentSlide) {
               var video = $(this).find("iframe")[0].src;
               $(this).find("iframe")[0].src = video;
            }
        });
    });

    $(".os_reviews_main_block_content_audio_list_item").click(function() {
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find('audio')[0].pause();
        } else {
            $('.os_reviews_main_block_content_audio_list_item').find('audio').each(function() {
                $(this)[0].pause();
            });
            $('.os_reviews_main_block_content_audio_list_item').removeClass("active");
            $(this).addClass("active");
            $(this).find('audio')[0].play();
        }
    });

    $(".os_reviews_main_block_content_audio_buttons_show").click(function() {
        $(".os_reviews_main_block_content_audio_list").addClass("open");
        $(this).css("display", "none");
        $(".os_reviews_main_block_content_audio_buttons_hide").css("display", "flex");
    });

    $(".os_reviews_main_block_content_audio_buttons_hide").click(function() {
        $(".os_reviews_main_block_content_audio_list").removeClass("open");
        $(this).css("display", "none");
        $(".os_reviews_main_block_content_audio_buttons_show").css("display", "flex");
    });

    $(".os_reviews_main_block_feedback_btns_show").click(function() {
        $(".os_reviews_main_block_feedback_list").addClass("open");
        $(this).css("display", "none");
        $(".os_reviews_main_block_feedback_btns_hide").css("display", "block");
    });

    $(".os_reviews_main_block_feedback_btns_hide").click(function() {
        $(".os_reviews_main_block_feedback_list").removeClass("open");
        $(this).css("display", "none");
        $(".os_reviews_main_block_feedback_btns_show").css("display", "block");
    });

    $(".os_reviews_main_block_feedback_give").click(function() {
        $(".os_popup_review").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_popup_review_close").click(function() {
        $(".os_popup_review").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".os_guarantees_main_block_warranty_quality ul li button").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_guarantees_main_block_warranty_dealer ul li button").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_back_white").click(function() {
        $(this).removeClass("active");
        $(".os_popup_sertificate").removeClass("active");
        $("html").css("overflow", "auto");
    });

    $('.os_product_main_content_slider_for_block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.os_product_main_content_slider_nav_block'
    });

    $('.os_product_main_content_slider_nav_block').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.os_product_main_content_slider_for_block',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        prevArrow: $('.os_product_main_content_slider_nav_btns_prev'),
        nextArrow: $('.os_product_main_content_slider_nav_btns_next'),
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2,
                }
            }
          ]
    });

    $(".os_specifications_main_default_btns_open").click(function() {
        $(".os_specifications_main_default").addClass("open");
    });

    $(".os_specifications_main_default_btns_hide").click(function() {
        $(".os_specifications_main_default").removeClass("open");
    });

    $(".os_specifications_main_segmented_btns_open").click(function() {
        $(".os_specifications_main_segmented").addClass("open");
    });

    $(".os_specifications_main_segmented_btns_hide").click(function() {
        $(".os_specifications_main_segmented").removeClass("open");
    });


    $(".os_mob_delivery_scroll_item").click(function() {
        var id = $(this).attr('id');
        $(".os_mob_delivery_scroll_item").removeClass("active");
        $(".os_mob_delivery_list_item").removeClass("active");
        $(this).addClass("active");
        $(".os_mob_delivery_list").find(`[data-target='${id}']`).addClass("active");
    });

    $(".os_mob_delivery_btns_show").click(function() {
        $(".os_mob_delivery_scroll").css("display", "flex");
        $(this).css("display", "none");
        $(".os_mob_delivery_list").css("display", "block");
        $(".os_mob_delivery_btns_hide").css("display", "block");
    });

    $(".os_mob_delivery_btns_hide").click(function() {
        $(".os_mob_delivery_scroll").css("display", "none");
        $(this).css("display", "none");
        $(".os_mob_delivery_list").css("display", "none");
        $(".os_mob_delivery_btns_show").css("display", "block");
    });

    $(".os_mob_condition_return_main_btns_show").click(function() {
        $(this).css("display", "none");
        $(".os_mob_condition_return_main_btns_hide").css("display", "block");
        $(".os_mob_condition_return_main_drop").css("display", "block");
    });

    $(".os_mob_condition_return_main_btns_hide").click(function() {
        $(this).css("display", "none");
        $(".os_mob_condition_return_main_btns_show").css("display", "block");
        $(".os_mob_condition_return_main_drop").css("display", "none");
    });

    $(".os_desktop_product_info_main_top_item").click(function() {
        var id = $(this).attr('id');
        $(".os_desktop_product_info_main_top_item").removeClass("active");
        $(".os_desktop_product_info_main_block_item").removeClass("active");
        $(this).addClass("active");
        $(".os_desktop_product_info_main_block").find(`[data-target='${id}']`).addClass("active");
    });

    $('.os_product_review_photo_slider_block_main').slick({
        infinite: true,
        slidesToShow: 14,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.os_product_review_photo_slider_block_btns_prev'),
        nextArrow: $('.os_product_review_photo_slider_block_btns_next'),
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 13,
                }
            }
          ]
    });
    
    $(".os_product_review_list_btns_show").click(function() {
        $(".os_product_review_list").addClass("active");
    });  

    $(".os_product_review_list_btns_hide").click(function() {
        $(".os_product_review_list").removeClass("active");
    });

    $(".os_product_main_content_text_other_color_tooltip").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_color").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_product_main_content_text_other_companion_tooltip").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_companion").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_product_main_content_text_block_order").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_under_order").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_product_main_content_text_block_quantity_calc").click(function() {
        $(".os_popup_calculation").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_product_main_content_text_block_btns_order").click(function() {
        $(".os_popup_order").addClass("active");
        $(".os_back_modal").addClass("active");
    });


    $(".os_product_main_content_text_block_btns_comparison").click(function() {
        $(".os_popup_favorites").removeClass("active");
        $(".os_popup_favorites_delete").removeClass("active");
        $(".os_popup_comparison").addClass("active");
        $(".os_popup_comparison_delete").removeClass("active");
        $(this).parent().parent().parent().addClass("addcomparison");
    });

    $(".os_product_main_content_text_block_btns_comparison_delete").click(function() {
        $(".os_popup_favorites").removeClass("active");
        $(".os_popup_favorites_delete").removeClass("active");
        $(".os_popup_comparison").removeClass("active");
        $(".os_popup_comparison_delete").addClass("active");
        $(this).parent().parent().parent().removeClass("addcomparison");
    });

    $(".os_product_main_content_text_block_btns_favorite").click(function() {
        $(".os_popup_comparison").removeClass("active");
        $(".os_popup_comparison_delete").removeClass("active");
        $(".os_popup_favorites_delete").removeClass("active");
        $(".os_popup_favorites").addClass("active");
        $(this).parent().parent().parent().addClass("addfavorite");
    });

    $(".os_product_main_content_text_block_btns_favorite_delete").click(function() {
        $(".os_popup_favorites_delete").addClass("active");
        $(".os_popup_comparison").removeClass("active");
        $(".os_popup_comparison_delete").removeClass("active");
        $(".os_popup_favorites").removeClass("active");
        $(this).parent().parent().parent().removeClass("addfavorite");
    });
    
    $(".os_product_main_content_text_block_btns_buy").click(function() {
        $(".os_popup_cart").addClass("active");
    });

    $(".os_product_main_content_text_block_quantity_amount_minus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_product_main_content_text_block_quantity_amount_number").text();
        var intValNumber = parseInt(valNumber);
        if(intValNumber > 1) {
            var resultVal = intValNumber - 1;
            $(this).parent().find(".os_product_main_content_text_block_quantity_amount_number").text(resultVal);
        }
    });

    $(".os_product_main_content_text_block_quantity_amount_plus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".os_product_main_content_text_block_quantity_amount_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".os_product_main_content_text_block_quantity_amount_number").text(resultVal);
    });

    $(".os_mob_delivery_main_block_list_item_description_free").click(function() {
        $(".os_popup_product_free").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    var defaultTextDescription = $(".os_mob_description_main > p").text();
    var modifyTextDescription;
    $(".os_mob_description_main > p").text(function(i, text) {

        if (text.length >= 200) {
          text = text.substring(0, 205);
          var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
          text = text.substring(0, lastIndex); // обрезаем до последнего слова
        }
        modifyTextDescription = text;
        
        $(this).text(text);
        
    });

    $(".os_mob_description_main_btns_open").click(function() {
        $(this).css("display", "none");
        $(".os_mob_description_main_btns_hide").css("display", "block");
        $(".os_mob_description_main > p").text(defaultTextDescription);
    });

    $(".os_mob_description_main_btns_hide").click(function() {
        $(this).css("display", "none");
        $(".os_mob_description_main_btns_open").css("display", "block");
        $(".os_mob_description_main > p").text(modifyTextDescription);
    });

    $(".os_mob_description_main_sertificate").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });
      
    $(".os_desktop_product_info_main_block_item_description_sertificate").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_product_review_title_block_feedback").click(function() {
        $(".os_popup_review").addClass("active");
        $(".os_back_modal").addClass("active");
    });


    $(".os_product_review_photo_list_block_item").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_product_review_photo_slider_block_main_item").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_product_review_list_item_photo_scroll_img").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_product_main_content_slider_for_block_item").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });
  
     $(".os_product_main_title_info_rating").click(function() {
        $('html, body').animate({
            scrollTop: $(".os_product_review").offset().top - $(window).height() / 2}, 2000);
     });

    $(".os_product_main_content_text_block_all_characteristic").click(function() {
        $('html, body').animate({
            scrollTop: $(".os_specifications_main").offset().top - $(window).height() / 2}, 2000);
    });

    // $(".os_product_main_content_text_block_all_characteristic").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $(".os_specifications_main_default").offset().top - $(window).height() / 2}, 2000);
    // });

    $(".os_product_main_content_text_other_ways").click(function() {
        $('html, body').animate({
            scrollTop: $(".os_desktop_product_info").offset().top - $(window).height() / 2
        }, 2000);
        $(".os_desktop_product_info_main_top_item").removeClass("active");
        $("#desktopDelivery").addClass("active");
        $(".os_desktop_product_info_main_block_item").removeClass("active");
        $(".os_desktop_product_info_main_block").find(`[data-target='desktopDelivery']`).addClass("active");
    });

    $(".os_product_main_content_img").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $('.os_related_block_list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchMove: false,
        dots: false,
        draggable: false,
        swipe: false,
        arrows: true,
        prevArrow: $('.os_related_block_header_btns_prev'),
        nextArrow: $('.os_related_block_header_btns_next'),
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

    $('.os_related_block_list').on('init', function() {
        if($(document).width() < 1025) {
            $(this).find('.slick-slide[data-slick-index="'+ 3 +'"]').addClass('last_slide');
        } else if($(document).width() > 1025 && $(document).width() < 1920) {
            $(this).find('.slick-slide[data-slick-index="'+ 4 +'"]').addClass('last_slide');
        } else {
            $(this).find('.slick-slide[data-slick-index="'+ 5 +'"]').addClass('last_slide');
        }
        
    });

    $('.os_related_block_list').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var numberSlide = currentSlide + slick.options.slidesToShow - 1;
        $(".os_related_block_list_item").removeClass("last_slide");
        $(this).find('.slick-slide[data-slick-index="'+ numberSlide +'"]').addClass('last_slide');
    });

    $(".os_related_block_list_item .os_top .os_top_slider_block").each(function() {
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

    $('.os_another_collection_block_list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchMove: false,
        dots: false,
        draggable: false,
        swipe: false,
        arrows: true,
        prevArrow: $('.os_another_collection_block_header_btns_prev'),
        nextArrow: $('.os_another_collection_block_header_btns_next'),
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

    $('.os_another_collection_block_list').on('init', function() {
        if($(document).width() < 1025) {
            $(this).find('.slick-slide[data-slick-index="'+ 3 +'"]').addClass('last_slide');
        } else if($(document).width() > 1025 && $(document).width() < 1920) {
            $(this).find('.slick-slide[data-slick-index="'+ 4 +'"]').addClass('last_slide');
        } else {
            $(this).find('.slick-slide[data-slick-index="'+ 5 +'"]').addClass('last_slide');
        }
        
    });

    $('.os_another_collection_block_list').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var numberSlide = currentSlide + slick.options.slidesToShow - 1;
        $(".os_another_collection_block_list_item").removeClass("last_slide");
        $(this).find('.slick-slide[data-slick-index="'+ numberSlide +'"]').addClass('last_slide');
    });

    $(".os_another_collection_block_list_item .os_top .os_top_slider_block").each(function() {
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

    $(".os_product_main_content_text_other_videos_product").click(function() {
        $(".os_popup_video").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_product_main_content_text_other_videos_collection").click(function() {
        $(".os_popup_video").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_product_main_content_slider_for_videos_product").click(function() {
        $(".os_popup_video").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_product_main_content_slider_for_videos_collection").click(function() {
        $(".os_popup_video").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $(".os_popup_video_close").click(function() {
        $(".os_popup_video").removeClass("active");
        $(".os_back_modal").removeClass("active");
    });

    $(".product_fixed_btns_main_amount_minus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".product_fixed_btns_main_amount_number").text();
        var intValNumber = parseInt(valNumber);
        if(intValNumber > 1) {
            var resultVal = intValNumber - 1;
            $(this).parent().find(".product_fixed_btns_main_amount_number").text(resultVal);
        }
    });

    $(".product_fixed_btns_main_amount_plus").on( "click", function(e) {
        var valNumber = $(this).parent().find(".product_fixed_btns_main_amount_number").text();
        var intValNumber = parseInt(valNumber);
        var resultVal = intValNumber + 1;
        $(this).parent().find(".product_fixed_btns_main_amount_number").text(resultVal);
    });

    $(".product_fixed_btns_main_buy").click(function() {
        $(".os_popup_cart").addClass("active");
    });

    $(".product_fixed_btns_main_order").click(function() {
        $(".os_popup_order").addClass("active");
        $(".os_back_modal").addClass("active");
    });

    $('.os_similar_block_list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchMove: false,
        dots: false,
        draggable: false,
        swipe: false,
        arrows: true,
        prevArrow: $('.os_similar_block_header_btns_prev'),
        nextArrow: $('.os_similar_block_header_btns_next'),
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

    $('.os_similar_block_list').on('init', function() {
        if($(document).width() < 1025) {
            $(this).find('.slick-slide[data-slick-index="'+ 3 +'"]').addClass('last_slide');
        } else if($(document).width() > 1025 && $(document).width() < 1920) {
            $(this).find('.slick-slide[data-slick-index="'+ 4 +'"]').addClass('last_slide');
        } else {
            $(this).find('.slick-slide[data-slick-index="'+ 5 +'"]').addClass('last_slide');
        }
        
    });

    $('.os_similar_block_list').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var numberSlide = currentSlide + slick.options.slidesToShow - 1;
        $(".os_related_block_list_item").removeClass("last_slide");
        $(this).find('.slick-slide[data-slick-index="'+ numberSlide +'"]').addClass('last_slide');
    });

    $(".os_similar_block_list_item .os_top .os_top_slider_block").each(function() {
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

    $(".os_product_main_content_slider_for_out").click(function() {
        $(".os_back_white").addClass("active");
        $(".os_popup_sertificate").addClass("active");
        $("html").css("overflow", "hidden");
        if($(".os_popup_sertificate_block_for_content_item").length > 11) {
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });
        
            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 11,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                prevArrow: $('.os_popup_sertificate_block_nav_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_nav_btns_next'),
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 11,
                        }
                    },
                     {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 6,
                        }
                      },
                      {
                        breakpoint: 416,
                        settings: {
                            slidesToShow: 5,
                        }
                      },
                      {
                        breakpoint: 368,
                        slidesToShow: 4,
                      }
                  ]
            });
        } else {
            $(".os_popup_sertificate_block_nav").addClass("os_popup_sertificate_block_nav_before");
            $('.os_popup_sertificate_block_for_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $('.os_popup_sertificate_block_for_btns_prev'),
                nextArrow: $('.os_popup_sertificate_block_for_btns_next'),
                asNavFor: '.os_popup_sertificate_block_nav_content'
            });

            $('.os_popup_sertificate_block_nav_content').slick({
                slidesToShow: 12,
                slidesToScroll: 1,
                asNavFor: '.os_popup_sertificate_block_for_content',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: false
            });
        }
    });

    $(".os_another_collection_block_list_item_block .os_top_info_order").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_under_order").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_another_collection_block_list_item_block .os_top_info_wait").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_wait").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_related_block_list_item_block .os_top_info_order").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_under_order").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_related_block_list_item_block .os_top_info_wait").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_wait").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_similar_block_list_item_block .os_top_info_order").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_under_order").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_similar_block_list_item_block .os_top_info_wait").click(function() {
        if($(document).width() < 1024) {
            $(".os_popup_wait").addClass('active');
            $(".os_back_modal").addClass("active");
        }
    });

    $(".os_checkout_content_main_left_method_pay_drop").overlayScrollbars({ });

    $(".os_checkout_content_main_left_method_delivery_drop").overlayScrollbars({ });

    $(".os_cart_empty_content_main_bottom_form_droplist").overlayScrollbars({ });

    $(".os_popup_calculation_select_list").overlayScrollbars({ });

    $(".os_popup_filter_item_body_list").overlayScrollbars({ });

    $(".os_popup_collection_list_block").overlayScrollbars({ });

    $(".os_popup_cart_recommend_list").overlayScrollbars({ });
        
    $(".os_shop_content_block_sidebar_item_body_list").overlayScrollbars({ });
    
    $(".sub_menu_drop_child").overlayScrollbars({ });

    $(".os_search_mobile_content_form_droplist").overlayScrollbars({ });

    $(".os_header_desktop_top_form_droplist").overlayScrollbars({ });


});