var images = [],
    index = 0;

images[0] = "<a href='https://zupedia.blogspot.com/p/lanjut.html'><img src='https://3.bp.blogspot.com/-cl8SaB7LEsQ/XSB06QRXNmI/AAAAAAAEVqs/w_aexy4cxDciRskshrsvXvGjN5wmlvdiACK4BGAYYCw/s400/74-b.jpg'/></a>";
images[1] = "<a href='https://nyinyirnews77.blogspot.com/p/lanjut.html'><img src='https://2.bp.blogspot.com/-i3TTDRs3TB4/XSB07-2YjlI/AAAAAAAEVq0/q_Idz-EBe6MULE1VToQOUklBfSvJkPflACK4BGAYYCw/s400/74-a.jpg'/></a>";
images[2] = "<a href='https://keepopedia.blogspot.com/p/keepoin.html'><img src='https://4.bp.blogspot.com/-_ed1-rUrKB0/XSB4omVXbCI/AAAAAAAEVrI/y4gNHMLUmPQWnLBJCSbti1QfqAbkPYIBQCK4BGAYYCw/s400/garuda-b.jpg'/></a>";
images[3] = "<a href='https://setahunbaru.blogspot.com/p/lanjut.html'><img src='https://4.bp.blogspot.com/-MM0Xslh74tM/XSB4ooxPWzI/AAAAAAAEVrM/Cghi-8no82QIoTjlxaZd_SaOMft_RUiuQCK4BGAYYCw/s400/garuda-a.jpg'/></a>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
