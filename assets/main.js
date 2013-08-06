var links = $('#nav-links');
var proj = $('#projects');
var notes = $('#notes');  notes.addClass('index2');
var res = $('#resume'); res.addClass('index3');
var web = $('#web'); web.addClass('index4'); 

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

function select(element) {
	$("#myframe").css({"z-index": "200"});
	element.remove();
	links.prepend(element);
	rotate(element, 30, 0);
	for(var i=0; i < 4; i++){
		$($('.categories')[i]).removeClass("index1 index2 index3 index4")
		$($('.categories')[i]).css({
			'z-index': "",
			left: "",
			'margin-left': "", 
			'margin-top': "", 
			'webkit-transform': "", 
			'-moz-transform': "", 
		});
		$($('.categories')[i]).addClass('index'+(i+1)); 
	}

	element.animate({left: "0px", 'margin-left': '0', 'margin-top': '0'});
	element.css({'z-index': 100});
	// Reregister click event since we destroyed it on removal 
	element.click( function() {select(element); setTimeout(function(){
		$("#myframe").attr('src', 'pages/'+element.attr('id')+'.html');
	});});
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

function hideAll() {
$('.proj-content').hide();
}

kickoff(); 