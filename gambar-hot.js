var images = [],
    index = 0;
	
images[0] = "<a href ='https://bit.ly/bablasin'><img src='https://1.bp.blogspot.com/-r8pphPlI-yA/XISpsGOiC4I/AAAAAAAAqlY/JVYE1x55SxMqOauXIQrDr3fTwqolPIzhwCPcBGAYYCw/s640/banner-bokep.gif' style='width:100!important' ></a>";
images[1] = "<a href ='https://bit.ly/lanjutin'><img src='https://1.bp.blogspot.com/-AKFM0o78P9g/XISpq1NEY7I/AAAAAAAAqlU/M9-Y6N_cgYwnA5gcjU2X447f7XMCuRCeQCPcBGAYYCw/s640/banner-vimax.gif' style='width:100!important' ></a>";
images[2] = "<a href ='https://bit.ly/gotowait'><img src='https://2.bp.blogspot.com/-UHhy9L8JPsU/XISp0hFn3GI/AAAAAAAAqlI/0pktb9anKOwuvAmGJlXDWbCthfChYGNBgCPcBGAYYCw/s640/nete1.jpg' style='width:100!important' ></a>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
