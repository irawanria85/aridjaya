/* LANJUT KE PLEASE WAIT */
function eventualRedirect(redirectTo, timeoutPeriod) {
setTimeout("location.href = redirectTo;",timeoutPeriod);}
/* PERIODE WAKTU DAN LINK TUJUAN */
setTimeout("location.href = 'https://www.aridjaya.com/p/please-wait.html';",30000);
/* JANGAN KEMBALI */
history.pushState(null, null, '#');
window.addEventListener('popstate', function(event){
history.pushState(null, null, '#');     
});
/* JIKA PAKAI PC */
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){}
else location.replace("https://www.aridjaya.com/p/please-wait.html");
