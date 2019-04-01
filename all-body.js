    function addEvent(obj, eventName, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventName, func);
        } else if (obj.addEventListener) {
            obj.addEventListener(eventName, func, true);
        } else {
            obj["on" + eventName] = func;
        }
    }
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://yurisehat.blogspot.com/p/yurisehat.html');
            window.focus();
    });
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('http://pejuangpramuka.blogspot.com/p/lanjut.html');
            window.focus();
    });
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://tusafelink.blogspot.com/p/lanjut.html');
            window.focus();
    });	
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://bikinmasakan.blogspot.com/p/lanjut.html');
            window.focus();
    });	
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://keepopedia.blogspot.com/p/keepoin.html');
            window.focus();
    });
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://dagelanpedia.blogspot.com/p/lanjut.html');
            window.focus();
    });
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://hasdukmerahputih.blogspot.com/p/lanjut.html');
            window.focus();
    });
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://www.aridjaya.com/p/play-video.html');
            window.focus();
    });	
}); 