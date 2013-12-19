var links = $('#nav-links');
var proj = $('#projects');
var notes = $('#notes');  notes.addClass('index2');
var res = $('#resume'); res.addClass('index3');
var web = $('#web'); web.addClass('index4'); 
var frame = $('#myframe'); frame.hide(); 

var staged; // This holds the currently staged link

function kickoff() {
	// Fade elements in 
	setTimeout(function(){proj.fadeIn(500)},100);
	setTimeout(function(){notes.fadeIn(500)},200);
	setTimeout(function(){res.fadeIn(500)},300);
	setTimeout(function(){web.fadeIn(500)},400); 

	frame.attr('src', 'pages/home.html');
	setTimeout(function(){frame.fadeIn(500)},400); 
};

function gotoHome(){
	unStage(staged);
	frame.attr('src', 'pages/home.html');
	frame.css({'z-index':''});
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

function select(element) {
	// Load up the iframe 
	$("#myframe").css({"z-index": "200"});
	// Remove selected element from the DOM (This might not be the best way )
	unStage(staged);
	stage(element);
}

// Transformations to insert the link into the header of the page 
function stage(e) {
	staged = e; 
	rotate(e, 30, 0);
	e.css({'z-index': 100});
	var topOffset; 
	if(e === proj)
		topOffset = 0; 
	if(e === notes) 
		topOffset = -27;
	if(e === res) 
		topOffset = -54;
	if(e === web) 
		topOffset = -81; 

	e.animate({top: topOffset + 'px'}, 200);
	e.animate({left: "0px", 'margin-left': '0'}); 
}

// Transformations to remove (unstage) the link and replace it back into the tray
function unStage(e) {
	if(e){
		rotate(e, 0, 30);
		e.css({left: "", 'margin-left': '', 'margin-top': '', 'z-index': '', top: ''});
	}
	 
}

proj.click( function() { 
	select(proj);
	setTimeout(function() {
		$('#myframe').attr('src', 'pages/projects.html');
	}, 500);
});

notes.click( function() { 
	select(notes);
	setTimeout(function() {
		$('#myframe').attr('src', 'pages/notes.html');
	}, 500);
});

web.click( function() { 
	select(web);
	setTimeout(function() {
		$('#myframe').attr('src', 'pages/web.html');
	}, 500);
});

res.click( function() { 
	select(res);
	setTimeout(function() {
		$('#myframe').attr('src', 'pages/resume.html');
	}, 500);
});

kickoff(); 
