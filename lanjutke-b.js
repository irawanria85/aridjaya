/* LANJUT KE B */
(function(){
setInterval(function(){
var redSites = [
"https://www.aridjaya.com/p/b-1.html",
"https://www.aridjaya.com/p/b-2.html",
"https://www.aridjaya.com/p/b-3.html",
"https://www.aridjaya.com/p/b-4.html",
"https://www.aridjaya.com/p/b-5.html",
"https://www.aridjaya.com/p/b-6.html",
"https://www.aridjaya.com/p/b-7.html",
"https://www.aridjaya.com/p/b-8.html",
"https://www.aridjaya.com/p/b-9.html",
"https://www.aridjaya.com/p/b-10.html",
"https://www.aridjaya.com/p/b-11.html",
"https://www.aridjaya.com/p/b-12.html",
"https://www.aridjaya.com/p/b-13.html",
"https://www.aridjaya.com/p/b-14.html",
"https://www.aridjaya.com/p/b-15.html",
"https://www.aridjaya.com/p/b-16.html",
"https://www.aridjaya.com/p/b-17.html",
"https://www.aridjaya.com/p/b-18.html",
"https://www.aridjaya.com/p/b-19.html",
"https://www.aridjaya.com/p/b-20.html",
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
