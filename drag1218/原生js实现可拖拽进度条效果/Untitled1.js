		this.btn=document.getElementById(btn);
		this.btn.onmousedown=function (e){
			var x=(e||window.event).clientX;
			var l=this.offsetLeft;
			var max=this.bar.offsetWidth-this.offsetWidth;
			document.onmousemove=function (e){
				var thisX=(e||window.event).clientX;
				var to=Math.min(max,Math.max(-2,l+(thisX-x)));
				this.btn.style.left=to+'px';
//				this.ondrag(Math.round(Math.max(0,to/max)*100),to);
//				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			};