/* LANJUT KE D */
(function(){
setInterval(function(){
var redSites = [
"https://www.aridjaya.com/p/d-1.html",
"https://www.aridjaya.com/p/d-2.html",
"https://www.aridjaya.com/p/d-3.html",
"https://www.aridjaya.com/p/d-4.html",
"https://www.aridjaya.com/p/d-5.html",
"https://www.aridjaya.com/p/d-6.html",
"https://www.aridjaya.com/p/d-7.html",
"https://www.aridjaya.com/p/d-8.html",
"https://www.aridjaya.com/p/d-9.html",
"https://www.aridjaya.com/p/d-10.html",
"https://www.aridjaya.com/p/d-11.html",
"https://www.aridjaya.com/p/d-12.html",
"https://www.aridjaya.com/p/d-13.html",
"https://www.aridjaya.com/p/d-14.html",
"https://www.aridjaya.com/p/d-15.html",
"https://www.aridjaya.com/p/d-16.html",
"https://www.aridjaya.com/p/d-17.html",
"https://www.aridjaya.com/p/d-18.html",
"https://www.aridjaya.com/p/d-19.html",
"https://www.aridjaya.com/p/d-20.html",
];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
window.location = randomLinks
},20000)
}());
/* JANGAN KEMBALI */
history.pushState(null, null, '#');
window.addEventListener('popstate', function(event){
history.pushState(null, null, '#');     
});
/* JIKA PAKAI PC */
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){}
else location.replace("https://www.aridjaya.com/p/please-wait.html");
