$(function(){
    $("#tabCity .tabCityOptions").on("mouseover","a",function(){
        console.log($(this).index())
        $(this).tab("show");
        var $Index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabCityContent>div').eq($Index).addClass('active in').siblings().removeClass('active in');
    })
    $("#footerLinkTab").on("mouseover","a",function(){
        $(this).tab("show");
        var $Index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.footerLinkContent>div').eq($Index).addClass('active in').siblings().removeClass('active in');
    })
})
