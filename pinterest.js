function El($){
return document .createElement ($)
}
function iE($){
return document .getElementById ($)
}
function iC($){ 
return document .getElementsByClassName($)[0]; 
}
var img = new Image;
var audio = new Audio
var video = El("video");
var url = new String(location).split("?q=");
(new function(){
if (url[1].split("/").length > 2){
document.title = "Image Social Pinterest";
if (url[1].split("/rh").length == 2){
video.src = "//lh3.googleusercontent.com/" + url[1] + "/Pixel.gif";
video.controls = true;
video.style = "display:block; width:auto; height:auto;"
iE("outers").innerHTML = video.outerHTML; 
// video.playbackRate
} else {
img.src = "//lh3.googleusercontent.com/" + url[1] + "/s1600/Pixel.jpg";
img.style = "display:block; width:auto; height:auto;"
iE("outers").innerHTML = img.outerHTML; 
}
img.onerror = function(){alert("Sorry data is not provided")}
} else if (url[1].length > 20){
document.title = "Mp3 Social Proposals";
audio.controls = "true";
audio.src = "//drive.google.com/uc?id=" + url[1].replace("&m=1", "");
iE("outers").innerHTML = audio.outerHTML;
audio.onerror = function() {
document.title = "Image Social Pinterest";
img.src = ["//i.pinimg.com/736x/", url[1][0], url[1][1], "/", url[1][2], url[1][3], "/", url[1][4], url[1][5], "/", url[1].replace("&m=1", ""),  ".jpg"].join("");
img.style = "display:block; width:100%; height:auto;"
iE("outers").innerHTML = img.outerHTML;
img.onerror = function(){alert("Sorry data is not provided")}
};
  }
var valued = true
document.onclick = function(){
    if (valued){
window.open("https://lapakrecehan.blogspot.com/", "target=blank");
valued = false;
    }
  }
});
function iparse(e){
  var $E; // try object
  if (e.entry != undefined){
$E = e.entry.content.$t; 
  } else {
$E = e.feed;
  }
  if (isNaN(url[1])){
    for (i=0;i<6;i++){
    iE("outers").innerHTML += ["<b><code>", e.feed.entry[i].title.$t, "</code></b><p>", $E.entry[i].content.$t].join("") + "<div style=\"clear: both;margin:11px 0\"></div><hr>";
    }
  }else{
var ob = JSON.parse($E);
iE("outers").innerHTML = ob.name;}
 };
function AddScript(){
var e = document .createElement("script");
  if(isNaN(url[1])){
e.src = ["//setahunbaru.blogspot.com/feeds/posts/default?q=", url[1], "&alt=json-in-script&callback=iparse&max-results=6"].join("");
  } else {
e.src = ["//yurisehat.blogspot.com/feeds/posts/default/", url[1], "?alt=json-in-script&callback=iparse"].join(""); }
e.type = "text/javascript";
    Jsc.appendChild(e); 
}; 
window.onload = function(){
img.onerror = (new AddScript) 
};
