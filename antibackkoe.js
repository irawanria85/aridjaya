    history.pushState(null, null, '#');
    window.addEventListener('popstate', function(event)
    {
        history.pushState(null, null, '#');
    });;
    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){}else location.replace("https://keepopedia.blogspot.com/p/tunggu-sebentar.html");
