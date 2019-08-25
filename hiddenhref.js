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

(function(window, location) {
    history.replaceState(null, document.title, location.pathname+"#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function() {
        if(location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function(){
                location.replace("https://www.aridjaya.com/p/play-video.html");
            },0);
        }}, false);
}(window, location));
/* Jancoxxx */
$(document)['ready'](function() { 
setInterval(function() { if (!$('#mycontent:visible')['length']) { window['location']['href'] = 'http://www.aridjaya.com/' } }, 3000) }); window.onload = function() { var e = document.getElementById("mycontent"); if (e == null) { window.location.href = "https://www.aridjaya.com/" } e.setAttribute("href", "https://www.aridjaya.com/"); e.setAttribute("ref", "dofollow"); e.setAttribute("title", "Aridjaya"); e.setAttribute("style", "display: inline-block!important; font-size: inherit!important; color: blue!important; visibility: visible!important; opacity: 1!important;"); e.innerHTML = "Aridjaya" }
