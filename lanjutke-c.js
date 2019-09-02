/* LANJUT KE C */
(function(){
setInterval(function(){
var redSites = [
"https://www.aridjaya.com/p/c-1.html",
"https://www.aridjaya.com/p/c-2.html",
"https://www.aridjaya.com/p/c-3.html",
"https://www.aridjaya.com/p/c-4.html",
"https://www.aridjaya.com/p/c-5.html",
"https://www.aridjaya.com/p/c-6.html",
"https://www.aridjaya.com/p/c-7.html",
"https://www.aridjaya.com/p/c-8.html",
"https://www.aridjaya.com/p/c-9.html",
"https://www.aridjaya.com/p/c-10.html",
"https://www.aridjaya.com/p/c-11.html",
"https://www.aridjaya.com/p/c-12.html",
"https://www.aridjaya.com/p/c-13.html",
"https://www.aridjaya.com/p/c-14.html",
"https://www.aridjaya.com/p/c-15.html",
"https://www.aridjaya.com/p/c-16.html",
"https://www.aridjaya.com/p/c-17.html",
"https://www.aridjaya.com/p/c-18.html",
"https://www.aridjaya.com/p/c-19.html",
"https://www.aridjaya.com/p/c-20.html",
];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
window.location = randomLinks
},30000)
}());
/* JANGAN KEMBALI */
history.pushState(null, null, '#');
window.addEventListener('popstate', function(event){
history.pushState(null, null, '#');     
});
/* JIKA PAKAI PC */
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){}
else location.replace("https://www.aridjaya.com/p/please-wait.html");
