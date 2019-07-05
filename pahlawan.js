var images = [],
    index = 0;

images[0] = "<img src='https://1.bp.blogspot.com/-60MMHdBRkxM/XR-BIw8o4CI/AAAAAAAEVbI/4Ldo_dcTJ0IDH_DZquYNQntCasiwBK4jwCK4BGAYYCw/s640/Teuku%2BNyak%2BArif.jpg' title='Teuku Nyak Arif'/>";
images[1] = "<img src='https://1.bp.blogspot.com/-GooO_cliNWk/XR-BJ5dIrDI/AAAAAAAEVbk/xeGSdi0xhwE0wGW0x7zFZQlRLoVbm4J1QCK4BGAYYCw/s640/Tjilik%2BRiwut.jpg' title='Tjilik Riwut'/>";
images[2] = "<img src='https://2.bp.blogspot.com/-zlFwbCZxomg/XR-BJJQISOI/AAAAAAAEVbU/exFK9dXfBWQoJfVaR5hdQK9uYExFJpGYwCK4BGAYYCw/s640/Tjoet_Nya%2527_Dhien.jpg' title='Tjoet Nyak Dhien'/>";
images[3] = "<img src='https://4.bp.blogspot.com/-eGtPVUqsk7U/XR-BJgW0XTI/AAAAAAAEVbg/9ktTehPX8rwKkYp-qfWsa1v-wrBOsGCHgCK4BGAYYCw/s640/Tuanku%2BImam%2BBonjol.jpg' title='Tuanku Imam Bonjol'/>";
images[4] = "<img src='https://4.bp.blogspot.com/-PIIiocwNbWw/XR-BJBECX3I/AAAAAAAEVbQ/v26HClngLYwpHzAEcKkdZBRtfnb-oHrZgCK4BGAYYCw/s640/Usman%2BJanatin.jpg' title='Usman Janatin'/>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
