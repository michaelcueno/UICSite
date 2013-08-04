var proj = $('#projects');
var notes = $('#notes'); 
var res = $('#resume'); 
var web = $('#web'); 
var projpl = $('#projects2');
var notespl = $('#notes2'); 
var respl = $('#resume2'); 
var webpl = $('#web2'); 

function kickoff() {
	// Fade elements in 
	setTimeout(function(){proj.fadeIn(500)},100);
	setTimeout(function(){notes.fadeIn(500)},200);
	setTimeout(function(){res.fadeIn(500)},300);
	setTimeout(function(){web.fadeIn(500)},400); 

	
	setTimeout(function(){lineEmUp();}, 900); 
};

function lineEmUp() {
	//notes.animate({left: "38.6%", margin: "3% 0 0 0"}); 
}

function rotate(element, deg, toDeg) {
	element.css({'webkit-transform': 'rotate(' + deg + 'deg)'});
	element.css({'-moz-transform': 'rotate(' + deg + 'deg)'});
	if(deg === toDeg){return};
	timer = setTimeout(function () {
		if(deg < toDeg) {++deg;} else {--deg};
		rotate(element, deg, toDeg);
	}, 5);
}

function shiftCenter(element) {
	element.animate({left: "0px", 'margin-left': '0', 'margin-top': '0'});
	element.css({'z-index': 100, position: 'absolute'});
}

function resetAllBut(element) {
	if(element !== proj){
		proj.animate({left: '0', 'margin-left': '0'})
		rotate(proj, 0, 30);
	} 
	if(element !== notes){
		notes.animate({
			'margin-left': '-40px',
	        'margin-top': '-19px',
	    });
	    notes.css({position: 'relative'})
	    notes.css({position: 'relative'})
	}
}

proj.click( function() { 
	resetAllBut(proj);
	rotate(proj, 30, 0);
	shiftCenter(proj);
	setTimeout(function() {
		$('#myframe').attr('src', 'pages/projects.html');
	}, 500);
});


notes.click( function() { 
	resetAllBut(notes); 
	rotate(notes, 30, 0);
	shiftCenter(notes);
});

web.click( function() { 
	resetAllBut(web);
	rotate(web, 30, 0);
	shiftCenter(web);
});

res.click( function() { 
	resetAllBut(res);
	rotate(res, 30, 0);
	shiftCenter(res);
});

function hideAll() {
$('.proj-content').hide();
}

kickoff(); 