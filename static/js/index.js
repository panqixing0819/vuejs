
 
(function(){
	function rem(){
		var html = document.getElementsByTagName('html')[0];
		var window_width = window.screen.width;
		if(window_width>='640'){
			window_width=640;
		}
		var width = window_width/32;
		html.style.fontSize=width+'px';
	}
	rem();
	
	window.onresize=function(){
		rem();
	}
	
})()