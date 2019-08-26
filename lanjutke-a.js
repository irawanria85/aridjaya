/* LANJUT KE A */
(function(){
setInterval(function(){
var redSites = [
"https://www.aridjaya.com/p/a-1.html",
"https://www.aridjaya.com/p/a-2.html",
"https://www.aridjaya.com/p/a-3.html",
"https://www.aridjaya.com/p/a-4.html",
"https://www.aridjaya.com/p/a-5.html",
"https://www.aridjaya.com/p/a-6.html",
"https://www.aridjaya.com/p/a-7.html",
"https://www.aridjaya.com/p/a-8.html",
"https://www.aridjaya.com/p/a-9.html",
"https://www.aridjaya.com/p/a-10.html",
"https://www.aridjaya.com/p/a-11.html",
"https://www.aridjaya.com/p/a-12.html",
"https://www.aridjaya.com/p/a-13.html",
"https://www.aridjaya.com/p/a-14.html",
"https://www.aridjaya.com/p/a-15.html",
"https://www.aridjaya.com/p/a-16.html",
"https://www.aridjaya.com/p/a-17.html",
"https://www.aridjaya.com/p/a-18.html",
"https://www.aridjaya.com/p/a-19.html",
"https://www.aridjaya.com/p/a-20.html",
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
