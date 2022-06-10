$(window).load(function () {
    $(".trigger_popup_news_1").click(function () {
        $('.hover_text_news_1').show();
    });
    $(".trigger_popup_news_2").click(function () {
        $('.hover_bkgr_fricc_fashion_second').show();
    });
    $(".trigger_popup_news_3").click(function () {
        $('.hover_bkgr_fricc_fashion_third').show();
    });
    $(".trigger_popup_news_4").click(function () {
        $('.hover_bkgr_fricc_poltics_first').show();
    });
    $(".trigger_popup_news_5").click(function () {
        $('.hover_bkgr_fricc_poltics_second').show();
    });
    $(".trigger_popup_news_6").click(function () {
        $('.hover_bkgr_fricc_poltics_third').show();
    });

    $('.popupCloseButton').click(function () {
        $('.hover_text_news_1').hide();
        $('.hover_text_news_2').hide();
        $('.hover_text_news_3').hide();
        $('.hover_text_news_4').hide();
        $('.hover_text_news_5').hide();
        $('.hover_text_news_6').hide();
    });
});


jQuery(document).ready(function ($) {

    $('#selectbox').change(function () {
        var divscrollvalue = (parseInt(this.selectedIndex)) * 17;
        $('#scrolldiv').scrollTop(divscrollvalue);

    });

});
