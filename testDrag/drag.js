/**
 * author levi
 * url http://levi.cg.am
 */
function  move1(e) {
		

		if (!!this.move) {
			
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {

					$( this.move_target).css({
						'top': e.pageY - posix.y,
						'left': e.pageX - posix.x
					});
				};

			callback.call(this, e, posix);
		}
	}
function down(e) {
		var offset = $(this).offset();
		if(e.pageX - offset.left>=0 && e.pageX - offset.left<=50 &&  e.pageY - offset.top>=0 &&  e.pageY - offset.top<=50)
		{
			this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
			$.extend(document, {'move': true, 'move_target': this});
		}
	}
function mouse(a,b,c) //a是mychart，b是box，c是coor
{
	$(document).mousemove(function(e){
		

		if (!!this.move) {
			
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {

					$( this.move_target).css({
						'top': e.pageY - posix.y,
						'left': e.pageX - posix.x
					});
				};

			callback.call(this, e, posix);
		}
	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}

		a.resize();
/*
var ee = document.getElementById("box");//调试部分
var aa="";

for(var a in ee)
		{
	aa = aa + a+":"+ee[a]+"\r\n";
		}
document.getElementById("ffff").value=aa;
*/
//	        $newhtml.css({
//	            'width': Math.max(30, document.getElementById("box").offsetWidth-10),
//	            'height': Math.max(30, document.getElementById("box").offsetHeight-20)
//	        });
//document.getElementById("newhtml").style.width=document.getElementById("box").width-5;

	});
	
	var $box = $(b).mousedown(down).on('mousedown', c, function(e) {
		var posix = {
	            'w': $box.width(), 
	            'h': $box.height(), 
	            'x': e.pageX, 
	            'y': e.pageY
	        };
	    $.extend(document, {'move': true, 'call_down': function(e) {
	        $box.css({
	            'width': Math.max(30, e.pageX - posix.x + posix.w),
	            'height': Math.max(30, e.pageY - posix.y + posix.h)
	        });
			
	    }});
	    return false;
	});
}


