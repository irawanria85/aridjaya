$(function() {
    $("a").each(function(index, element) {
        var href = $(this).attr("href");
        $(this).attr("hiddenhref", href);
        $(this).removeAttr("href")
    });
    $("a").click(function() {
        url = $(this).attr("hiddenhref");
        window.open(url, '_blank')
    })
});
(function(window,location){
    history.replaceState(null,document.title,location.pathname+"#!/history");
    history.pushState(null,document.title,location.pathname);
    window.addEventListener("popstate",function(){
        if(location.hash==="#!/history"){
        history.replaceState(null,document.title,location.pathname);
            setTimeout(function(){location.replace("/p/please-wait.html");},0);}},false);}(
   window,location));
