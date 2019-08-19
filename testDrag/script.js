	var myChart;
	var dom;
$(document).ready(function(){//直接运行的函数
//  $('#celebs tbody tr:even').addClass('zebra');
//  $('#celebs tbody tr').mouseover(function(){
//    $(this).addClass('zebraHover');
//  });
//  $('#celebs tbody tr').mouseout(function(){
//    $(this).removeClass('zebraHover');
//  });
	var x=1;
	var xx;

  $('#toggleButton').click(function(){

	  x=x+1;
	  document.getElementById('toggleButton').innerHTML=x;
	  xx=x+"";
		$('body').append('<div id="box'+xx+'" class="box">'+ 
		'<span id="close" class="close'+xx+'"></span>'+
			'<span id="config" class="config'+xx+'"></span>'+
				'<span id="boxMove" class="boxMove'+xx+'"></span>'+
					'<div id="addDep'+xx+'" class="addDep">'+
					'<div id="newhtml'+xx+'" class="newhtml" style="height: 95%"></div>'+
						'<div id="coor" class="coor'+xx+'"></div>'
						+'</div>'
						);
							//area('newhtml'+xx+'');
							mouse(myChart,'#box'+xx+'','.coor'+xx+'');
							closebutton('.close'+xx+'','box'+xx+'');
							configButton('.config'+xx+'');
		});
});


function closebutton(a,b){//a是按钮，b是box
		$( a ).hover(function() {
		$(this)
			.stop(true)
			.animate({height: '20px'},
				{duration: 600, easing: 'easeOutBounce'}
			)
	},function() {
		$(this)
			.stop(true)
			.animate(
				{height:'0px'},
				{duration:600, easing: 'easeOutCirc'}
			)
	});
   
	   $ (a).click (function ()
	   {
	   	document.getElementById(b).style.display = "none";
	   })
}


	   function open_windows_and_get_selectedinfo(openwindow) { //, control, control2
//			var str = window.showModalDialog(openwindow, window, "dialogWidth=100px;dialogHeight=200px;center=yes;help=no;resizable=false;status=false"); 
//			var str = window.open(openwindow, 'newwindow', 'height=270, width=500, top=270, left=700, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'); 
			var height=window.innerHeight/2-135;
			var width=window.innerWidth/2-250;
			alert(height);
			alert(width);
			var str = window.open(openwindow, 'newwindow', 
		   'height=270, width=500, top=348, left=710, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'); 
			if (!str) 
			return;
			else str.focus();
		} 
	   function configButton(a){//a是'.config'
		   		$( a ).hover(function() {
		$(this)
			.stop(true)
			.animate({height: '20px'},
				{duration: 600, easing: 'easeOutBounce'}
			)
	},function() {
		$(this)
			.stop(true)
			.animate(
				{height:'0px'},
				{duration:600, easing: 'easeOutCirc'}
			)
	});
			  $ (a).click (function ()
		   {
				  open_windows_and_get_selectedinfo('Select.html');
				  configId=a;

		   })
	   }
function depthButton(a,b){//a是'.depth'b是‘depth’
		   		$( a ).hover(function() {
		$(this)
			.stop(true)
			.animate({height: '20px'},
				{duration: 600, easing: 'easeOutBounce'}
			)
	},function() {
		$(this)
			.stop(true)
			.animate(
				{height:'0px'},
				{duration:600, easing: 'easeOutCirc'}
			)
	});
				   document.getElementById(b).onchange=function(){
						alert(document.getElementById(b).value);
				   
				   }
	   }