/* PERGI KE LAMAN SEBENTAR */
function eventualRedirect(redirectTo, timeoutPeriod) {
setTimeout("location.href = redirectTo;",timeoutPeriod);}
setTimeout("location.href = '/p/sebentar.html';",30000);
/* JIKA MENGGUNAKAN PC */
if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.indexOf('Android')!=-1)){}
else location.replace("/p/please-wait.html");
/* ANTI BACK */
history.pushState(null,null,'#');
window.addEventListener('popstate',function(event)
{history.pushState(null,null,'#');});
