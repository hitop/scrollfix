function scrollfix(arg) {
	var rollStart = $(arg), 
        rollSet = $(arg); 
    var offset = rollStart.offset(), 
        objWindow = $(window), 
        rollBox = rollStart.prev(); 
    if (objWindow.width() > 960) { 
        objWindow.scroll(function() { 
            if (objWindow.scrollTop() > offset.top ) { 
                rollStart.css('position','fixed'); 
                rollStart.stop().animate({ 
                    top: 0 
                }, 
                0) 
            } else { 
                rollStart.css('position','static'); 
                rollStart.stop().animate({ 
                    top: 0 
                }, 
                0) 
            } 
        }) 
    }
}
