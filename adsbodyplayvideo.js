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
            var w = window.open('https://www.aridjaya.com/p/play-video.html');
            window.focus();
    });
}); 
