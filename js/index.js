var log_wechat=document.getElementsByClassName("log_wechat")[0];
    wechat=document.getElementsByClassName("wechat")[0];
    wechat1=document.getElementsByClassName("wechat1")[0];
    wechat2=document.getElementsByClassName("wechat2")[0];
    blank=document.getElementsByClassName("blank")[0];
    setting_wechat=document.getElementsByClassName("setting_wechat")[0];

var log_phone=document.getElementsByClassName("log_phone")[0];
    phone=document.getElementsByClassName("phone")[0];
    phone1=document.getElementsByClassName("phone1")[0];
    phone2=document.getElementsByClassName("phone2")[0];
    blank1=document.getElementsByClassName("blank1")[0];
    setting_phone=document.getElementsByClassName("setting_phone")[0];

var log_home=document.getElementsByClassName("log_home")[0];
    yt_gg=document.getElementsByClassName("yt_gg")[0];
    blank2=document.getElementsByClassName("blank2")[0];
    link_home=document.getElementsByClassName("link_home")[0];
    link_home1=document.getElementsByClassName("link_home1")[0];

var icart=document.getElementsByClassName("icart")[0];
    yt_buy=document.getElementsByClassName("yt_buy")[0];

icart.onmouseover=function(){
	yt_buy.style.display="block";
}
icart.onmouseout=function(){
	yt_buy.style.display="none";
}

log_home.onmouseover=function(){
	blank2.style.display="block";
	link_home1.style.display="block";
	link_home.classList.add("yt_aa");
	yt_gg.classList.add("yt_bb");
}
log_home.onmouseout=function(){
	blank2.style.display="none";
	link_home1.style.display="none";
	link_home.classList.remove("yt_aa");
	yt_gg.classList.remove("yt_bb");
}    

log_wechat.onmouseover=function(){
	blank.style.display="block";
	setting_wechat.style.display="block";
	wechat.style.color="#e5004f"
	wechat2.classList.add("wechat7");
	log_wechat.classList.add("wechat5");
	wechat1.classList.add("wechat6");
}
log_wechat.onmouseout=function(){
	blank.style.display="none";
	setting_wechat.style.display="none";
	wechat.style.color="#666"
	wechat2.classList.remove("wechat7");
	log_wechat.classList.remove("wechat5");
	wechat1.classList.remove("wechat6");
}
log_phone.onmouseover=function(){
	blank1.style.display="block";
	setting_phone.style.display="block";
	phone.style.color="#e5004f"
	log_phone.classList.add("phone5");
	phone1.classList.add("phone6");
	phone2.classList.add("phone7");	
}
log_phone.onmouseout=function(){
	blank1.style.display="none";
	setting_phone.style.display="none";
	phone.style.color="#666"
	log_phone.classList.remove("phone5");
	phone1.classList.remove("phone6");
	phone2.classList.remove("phone7");
}

var dts=document.querySelectorAll(".menu_all dt");
var dds=document.querySelectorAll(".menu_all dd");
    for(var i=0,el ; i<dts.length ; i++){
       dts[i].index=i;
       dts[i].onmouseover=function(){
       	dts[this.index].classList.add("fire");
       	dds[this.index].classList.add("chose");
       }
       dts[i].onmouseout=function(){
       	dts[this.index].classList.remove("fire");
       	dds[this.index].classList.remove("chose");
       }
    }

// banner 轮播
 var  tab_nav=document.querySelector(".tab_nav");
 var  left=document.querySelector(".left");
 var  right=document.querySelector(".right");
 var  pics=document.querySelectorAll(".content img");
 var  liss=document.querySelectorAll(".nav_trriger1 li");
 var num=0;
 var timerid=setInterval(move,2000);

 tab_nav.onmouseover=function(){
 	left.style.display="block"
 	right.style.display="block"
 }
 tab_nav.onmouseout=function(){
 	left.style.display="none"
 	right.style.display="none"
 }
 left.onclick=function(){
 	move();
 } 
 right.onclick=function(){
 	moveR();
 }     
function move(){
 	num++;
 	if(num==pics.length){
       num=0;
 	}
  for(var i=0;i<pics.length;i++){
 	pics[i].style.display="none";
 	lis[i].classList.add("colora");
  }
 	pics[num].style.display="block";
 	lis[num].classList.add("colorb");
 }
function moveR(){
 	num--;
 	if(num<0){
       num=pics.length-1;
 	}
  for(var i=0;i<pics.length;i++){
 	pics[i].style.display="none";
 	lis[i].classList.add("colora");
  }
 	pics[num].style.display="block";
 	lis[num].classList.add("colorb");
 }


// chaozhitemai
var panels1=document.querySelector(".panels1");
    panels1_1=document.querySelector(".panels1_1");
    panels1_2=document.querySelector(".panels1_2");
    font_1=document.querySelector(".font_1");
    font_2=document.querySelector(".font_2");
    font_3=document.querySelector(".font_3");
 font_1.onmouseover=function(){
 	panels1.style.display="block";
 	panels1_1.style.display="none";
 	panels1_2.style.display="none";
 }
  font_1.onmouseout=function(){
 	panels1.style.display="block";
 	panels1_1.style.display="none";
 	panels1_2.style.display="none";
 }
 font_2.onmouseover=function(){
 	panels1.style.display="none";
 	panels1_1.style.display="block";
 	panels1_2.style.display="none";
 }
  font_2.onmouseout=function(){
 	panels1.style.display="none";
 	panels1_1.style.display="block";
 	panels1_2.style.display="none";
 }
 font_3.onmouseover=function(){
 	panels1.style.display="none";
 	panels1_1.style.display="none";
 	panels1_2.style.display="block";
 }
  font_3.onmouseout=function(){
 	panels1.style.display="none";
 	panels1_1.style.display="none";
 	panels1_2.style.display="block";
 }

 var zuo=document.querySelectorAll(".zuo"),
     you=document.querySelectorAll(".you"),
     banner_slide=document.querySelector(".banner_slide"),
     pictures=document.querySelectorAll(".one img"),
     // var aW=banner_slide1.offsetWidth*pictures.length;
     lis=document.querySelectorAll(".floor_try li");
     var num=0;

   
   	banner_slide.onmouseover=function(){
   		for(var i=0;i<zuo.length;i++){
   		zuo[i].style.opacity="0.7";
   		you[i].style.opacity="0.7";
   	}}
   	banner_slide.onmouseout=function(){
   		for(var i=0;i<zuo.length;i++){
   		zuo[i].style.opacity="0.4";
   		you[i].style.opacity="0.4";
   	}}

   var floorlunbo=function(el,el1,pic){
     el.onclick=function(){
     	num++;
         if(num==pic.length){
         	num=pic.length-1;
         }
     	for(var i=0;i<pic.length;i++){
         pic[i].style.left=-390*pic.length+"px"; 
         lis[i].classList.add("posi2") 
     	}
     	pic[num].style.left=0+"px";	
     	lis[num].classList.add("posi1")
     }
     el1.onclick=function(){
     	num--;
         if(num<pic.length){
         	num=0;
         }
     	for(var i=0;i<pic.length;i++){
         pic[i].style.left=390*pic.length+"px";
         lis[i].classList.add("posi2")
     	}
     	pic[num].style.left=0+"px";
     	lis[num].classList.add("posi1")
     }
 }

 var pictures1=document.querySelectorAll(".two img"),
     pictures2=document.querySelectorAll(".three img"),
     pictures3=document.querySelectorAll(".four img"),
     pictures4=document.querySelectorAll(".five img"),
     pictures5=document.querySelectorAll(".six img"),
     pictures6=document.querySelectorAll(".seven img"),
     pictures7=document.querySelectorAll(".eight img"),
     pictures8=document.querySelectorAll(".nine img");
      floorlunbo(zuo[0],you[0],pictures);
      floorlunbo(zuo[1],you[1],pictures1);
      floorlunbo(zuo[2],you[2],pictures2);
      floorlunbo(zuo[3],you[3],pictures3);
      floorlunbo(zuo[4],you[4],pictures4);
      floorlunbo(zuo[5],you[5],pictures5);
      floorlunbo(zuo[6],you[6],pictures6);
      floorlunbo(zuo[7],you[7],pictures7);
      floorlunbo(zuo[8],you[8],pictures8);