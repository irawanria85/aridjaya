function insertAfter(tbh, tgt) {
    var prt = tgt.parentNode;
    if (prt.lastChild == tgt) {
        prt.appendChild(tbh);
    } else {
        prt.insertBefore(tbh, tgt.nextSibling);
    }
}
var tgt = document.getElementById("tgtp");
var ad1 = document.getElementById("ad-script1");
var ad2 = document.getElementById("ad-script2");
var tg1 = tgt.getElementsByTagName("p");
var tg2 = tgt.getElementsByTagName("br");
var pt1 = tg1.length;
var pt2 = tg2.length;
var ps1 = pt1 * 30 / 100;
var ps2 = pt1 * 60 / 100;
var br1 = pt2 * 30 / 100;
var br2 = pt2 * 60 / 100;
var bl1 = Math.round(ps1);
var bl2 = Math.round(ps2);
var bk1 = Math.round(br1);
var bk2 = Math.round(br2);
if (pt1 > 2) {
    insertAfter(ad1, tg1[bl1 - 1]);
    insertAfter(ad2, tg1[bl2 - 1]);
} else if (br2 > 1) {
    insertAfter(ad1, tg2[bk1 - 1]);
    insertAfter(ad2, tg2[bk2 - 1]);
} else {}
