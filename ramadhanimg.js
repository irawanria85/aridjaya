var images = [],
index = 0;

images[0] = "<a href='https://saldogojek.blogspot.com/'><img src='https://1.bp.blogspot.com/-1I_zsgSLoAU/XpI4t95oXoI/AAAAAAAEwM8/t7CIb4_h0g8bvuwt7nPdqestxWUOz-weQCLcBGAsYHQ/s320/2.jpg' /></a>";
images[1] = "<a href='https://bebastagihan.blogspot.com/'><img src='https://1.bp.blogspot.com/-3N23pVdAoGs/XpI4uKHJtiI/AAAAAAAEwNA/vcEPACFiZFwH_09DZJvIZIHuAjNdGtIzACLcBGAsYHQ/s320/20.gif' /></a>";
images[2] = "<a href='https://blangkonkuota.blogspot.com/'><img src='https://1.bp.blogspot.com/-4c0ZsbB-JDc/XpI4nERXAqI/AAAAAAAEwMY/Yhjo_fW8MowGrm7N-Dnw5lpNA6Cx8sBDgCLcBGAsYHQ/s320/11.gif' /></a>";
images[3] = "<a href='https://lapakrecehan.blogspot.com/'><img src='https://1.bp.blogspot.com/-8jc2p8Oi-iY/XpI4o1PNQvI/AAAAAAAEwMc/5ofkDyn60KcJaKfjVb656jvZ4ac0XsyiQCLcBGAsYHQ/s1600/13.gif' /></a>";
images[4] = "<a href='https://saldoppob.blogspot.com/'><img src='https://1.bp.blogspot.com/-aHDuEdyge9w/XpI4zpqMKxI/AAAAAAAEwNk/X1Nh4q6Oy7Yws54ftiHcoHVy1Oe4zIyJACLcBGAsYHQ/s1600/4.gif' /></a>";
images[5] = "<a href='https://solawatpulsa.blogspot.com/'><img src='https://1.bp.blogspot.com/-BUcwRhK86qs/XpI4qOtuV_I/AAAAAAAEwMg/ZQse6Av7RZcZVfdASv_HptnXoYWgs6yOACLcBGAsYHQ/s1600/12.gif' /></a>";
images[6] = "<a href='https://tawontube.blogspot.com/'><img src='https://1.bp.blogspot.com/-dgPYM6aerQU/XpI4nKhtC1I/AAAAAAAEwMU/uhRCkzRcMREwfGJR01bOSEw7fU5fmIRsgCLcBGAsYHQ/s320/10.gif' /></a>";
images[7] = "<a href='https://tempatagenpulsa.blogspot.com/'><img src='https://1.bp.blogspot.com/-eFfMR_DTwhY/XpI4spC0x4I/AAAAAAAEwMs/sE460kIM9A45yoinOYaX6JwgzwVPp-fugCLcBGAsYHQ/s320/17.gif' /></a>";
images[8] = "<a href='https://travelppob.blogspot.com/'><img src='https://1.bp.blogspot.com/-exq1jzWxWPU/XpI4xPcCuCI/AAAAAAAEwNQ/XoH5bLh6ev46WfgT0vXV0n7U8cteJuC3gCLcBGAsYHQ/s1600/24.gif' /></a>";
images[9] = "<a href='https://webbayar.blogspot.com/'><img src='https://1.bp.blogspot.com/-FyQ63XffHPE/XpI4rAXSDyI/AAAAAAAEwMk/MIiZosqClrs_nP3nezU27-3c7-KtKJGqACLcBGAsYHQ/s1600/15.gif' /></a>";
images[10] = "<a href='https://topkuota.blogspot.com/'><img src='https://1.bp.blogspot.com/-fz7pxyleppw/XpI4nMxKIXI/AAAAAAAEwMQ/W9ZsOHyaMLEeqN-49WzojG9wf3d5FSuVQCLcBGAsYHQ/s1600/1.gif' /></a>";
images[11] = "<a href='https://saldogojek.blogspot.com/'><img src='https://1.bp.blogspot.com/-fzXLcZ7GwBs/XpI4vSDU1jI/AAAAAAAEwNI/rGCTCiNxZTkDCKnc0M7MmkgovoO7iXRUwCLcBGAsYHQ/s320/22.gif' /></a>";
images[12] = "<a href='https://bebastagihan.blogspot.com/'><img src='https://1.bp.blogspot.com/-ih3tlDtvWL4/XpI4y7otIzI/AAAAAAAEwNg/aSQf4ENU2HQ2Fm2OzU1kE9quIHR1FhisQCLcBGAsYHQ/s1600/25.gif' /></a>";
images[13] = "<a href='https://blangkonkuota.blogspot.com/'><img src='https://1.bp.blogspot.com/-jfnCitS526g/XpI4xTsZtyI/AAAAAAAEwNU/7sgmwyCGDLgxYn6UqJBqij6MKrL3mrCJgCLcBGAsYHQ/s1600/26.gif' /></a>";
images[14] = "<a href='https://lapakrecehan.blogspot.com/'><img src='https://1.bp.blogspot.com/-jUSdwT8iIIs/XpI4snaoE_I/AAAAAAAEwM0/zKOCEnL497wiJui9-UMNjVCN9VMyJNAyACLcBGAsYHQ/s1600/14.gif' /></a>";
images[15] = "<a href='https://saldoppob.blogspot.com/'><img src='https://1.bp.blogspot.com/-K0k-j7Q8XFs/XpI45mIAeAI/AAAAAAAEwN4/Za35s08VSAA4BB1a-pohru_kgz7X322VACLcBGAsYHQ/s1600/8.gif' /></a>";
images[16] = "<a href='https://solawatpulsa.blogspot.com/'><img src='https://1.bp.blogspot.com/-kd2XzKtd_t0/XpI4vCu2ZfI/AAAAAAAEwNE/8vfuxVVSdJMqHGRdv2SxXJJfVkYIKCbXACLcBGAsYHQ/s1600/21.gif' /></a>";
images[17] = "<a href='https://tawontube.blogspot.com/'><img src='https://1.bp.blogspot.com/-PjfhYvmTocM/XpI40l-klsI/AAAAAAAEwNw/uwcKQ2Y4NQcM7ACG7Y3GkHkNBk0qnt3kwCLcBGAsYHQ/s320/7.gif' /></a>";
images[18] = "<a href='https://tempatagenpulsa.blogspot.com/'><img src='https://1.bp.blogspot.com/-PZ5B2U4rB7w/XpI4ycwEKuI/AAAAAAAEwNY/TkLed8VXJD0E0q8GkfdJTty0U2NyRkUdwCLcBGAsYHQ/s1600/27.gif' /></a>";
images[19] = "<a href='https://travelppob.blogspot.com/'><img src='https://1.bp.blogspot.com/-s6a0PjTOUbQ/XpI40iye7NI/AAAAAAAEwNs/YgsBeleggmAWa-RB8r41DD3EmyR-3Sb6wCLcBGAsYHQ/s1600/5.gif' /></a>";
images[20] = "<a href='https://webbayar.blogspot.com/'><img src='https://1.bp.blogspot.com/-sX48evThh2s/XpI4vzykACI/AAAAAAAEwNM/gKTLZhNLtBg080O2SdkxDzFAETL_tFn6ACLcBGAsYHQ/s1600/23.gif' /></a>";
images[21] = "<a href='https://topkuota.blogspot.com/'><img src='https://1.bp.blogspot.com/-uQaGi4YJhFg/XpI42sQM_pI/AAAAAAAEwN0/PR67M-2LDwkn7mCGLkkmS7sU9JehbWpKgCLcBGAsYHQ/s1600/9.gif' /></a>";
images[22] = "<a href='https://saldogojek.blogspot.com/'><img src='https://1.bp.blogspot.com/-w2xmp93RuEw/XpI40dJFm8I/AAAAAAAEwNo/XVjEY4qJqoU7wnXbLQQAXbIXNRVfEdypwCLcBGAsYHQ/s1600/6.gif' /></a>";
images[23] = "<a href='https://bebastagihan.blogspot.com/'><img src='https://1.bp.blogspot.com/-xA2xXia_ze0/XpI4t1vBXOI/AAAAAAAEwM4/_I6flVx9hZM0_yjEE8unwZOyChd8NnrygCLcBGAsYHQ/s1600/19.gif' /></a>";
images[24] = "<a href='https://blangkonkuota.blogspot.com/'><img src='https://1.bp.blogspot.com/-yGxzUs0ZUnk/XpI4yYb2SvI/AAAAAAAEwNc/MHJ1BVOLsRcKvUjmuad67gK0Bgg_RmJoACLcBGAsYHQ/s1600/3.gif' /></a>";
images[25] = "<a href='https://lapakrecehan.blogspot.com/'><img src='https://1.bp.blogspot.com/-ZiM4765RiWk/XpI4sthHPNI/AAAAAAAEwMw/nrChqdHsVccUOU2osLi_Ov5yo1TXJHXhgCLcBGAsYHQ/s320/18.gif' /></a>";
images[26] = "<a href='https://saldoppob.blogspot.com/'><img src='https://1.bp.blogspot.com/-ZLST-yBas7U/XpI4rpbwUhI/AAAAAAAEwMo/lpK3bZuX3sEBPtPOTqhsgOIWCqNRyqK_gCLcBGAsYHQ/s320/16.gif' /></a>";


index = Math.floor(Math.random() * images.length);
document.write(images[index]);
