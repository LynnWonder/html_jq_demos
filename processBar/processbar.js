//$(function(){
$(document).ready(function(){//直接运行的函数
	
 var tag = false,dx = 0,left = 0,bgleft = 0;
// $('.progress_btn').mousedown(function(e) {
//  dx = e.pageX - left;
//  tag = true;
// });
// $(document).mouseup(function(e) {
//  tag = false;
// });
// $('.progress_btn').mousemove(function(e) {//鼠标移动
//  if (tag) {
//   left = e.pageX - dx;
//   if (left <= 0) {
//    left = 0;
//   }else if (left > 300) {
//    left = 300;
//   }
//   $('.progress_btn').css('left', left);
//   $('.progress_bar').animate({width:left},1);
//   $('.text').html(parseInt((left/300)*100) + '%');
//  }
// });
		this.btn=document.getElementById('progress_btn');
		this.bar=document.getElementById('progress_bg');
		this.btn.onmousedown=function (e){
			var x=(e||window.event).clientX;
			var l=this.offsetLeft;
			var max=320-this.offsetWidth;
			document.onmousemove=function (e){
				var thisX=(e||window.event).clientX;
				var to=Math.min(max,Math.max(-2,l+(thisX-x)));
				this.btn.style.left=to+'px';
				$('.progress_bar').animate({width:to},1);
				$('.text').html(parseInt((to/300)*100) + '%');
//				this.ondrag(Math.round(Math.max(0,to/max)*100),to);
//				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			};
				document.onmouseup=new Function('this.onmousemove=null');
		};
 $('.progress_bg').click(function(e) {//鼠标点击
  if (!tag) {
   bgleft = $('.progress_bg').offset().left;
   left = e.pageX - bgleft;
   if (left <= 0) {
		left=0;
   }else if (left > 300) {
    left = 300;
   }
   $('.progress_btn').css('left', left);
   $('.progress_bar').animate({width:left},300);//
   $('.text').html(parseInt((left/300)*100) + '%');
  }
//  alert(left);
 });
  $('.progress_bar').click(function(e) {//鼠标点击
  if (!tag) {
   bgleft = $('.progress_bar').offset().left;
   left = e.pageX - bgleft;
   if (left <= 0) {
		left=0;
   }else if (left > 300) {
    left = 300;
   }
   $('.progress_btn').css('left', left);
   $('.progress_bar').animate({width:left},300);//
   $('.text').html(parseInt((left/300)*100) + '%');
  }
//  alert(left);
 });
});