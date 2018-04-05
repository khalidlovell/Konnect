//we grab the span element
var icon = document.querySelector("#header-div > span");

//add a click even handler
icon.addEventListener("click",rem_link);
//we grab the div that contains the ul
var item = document.getElementById("nav-bar").style;

function rem_link(e){
	
	if(item.display != "none"){
		item.display = "none";
	}
	else{
		item.display = "block";
	}
}


//BUTTON 1 CODE
var button1 = document.getElementById("personal-but");
button1.addEventListener("click",personal_display);

function personal_display(e){
	e.preventDefault();
	var personal = document.getElementById("personal_info_div").style;
	
	if(personal.display != "none"){
		personal.display = "none";
	}
	else{
		personal.display = "flex";
	}
}

//BUTTON 2 CODE
var button2 = document.getElementById("dob-but");
button2.addEventListener("click",dob_display);

function dob_display(e){
	e.preventDefault();
	var dob = document.getElementById("dob_div").style;
	
	if(dob.display != "none"){
		dob.display = "none";
	}
	else{
		dob.display = "flex";
	}
}

//BUTTON 3 CODE
var button3 = document.getElementById("gender-but");
button3.addEventListener("click",gender_display);

function gender_display(e){
	e.preventDefault();
	var gender = document.getElementById("gender_div").style;
	
	if(gender.display != "none"){
		gender.display = "none";
	}
	else{
		gender.display = "flex";
	}
}
