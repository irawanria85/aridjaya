eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('p f="";b 7(){1(g.h==2){5 4}}b c(e){1(0.6||0.9&&!0.a){1(e.d==2||e.d==3){5 4}}}1(0.6){0.j(k.i);0.8=c}l 1(0.a&&!0.9){0.8=7}0.m=n o("5 4");',26,26,'document|if|||false|return|layers|clickIE4|onmousedown|getElementById|all|function|clickNS4|which||message|event|button|MOUSEDOWN|captureEvents|Event|else|oncontextmenu|new|Function|var'.split('|'),0,{}));;
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
