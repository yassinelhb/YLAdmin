$(document).ready(function () {
    $(".yl-menu_nav > li").click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    })
})
