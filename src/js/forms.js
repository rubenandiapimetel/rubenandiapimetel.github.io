let x = false;
let z = false;
let y =false;
let d = false; //popup
var verifyname = () =>{
	const name = document.getElementById('inputname').value;
	let color = document.getElementById('color_name');
	console.log(name);
	if(name.length < 3 || name.length > 100){
		color.style.borderBottom = 	"2px solid #bc0000";
		x = false;
	}
	else{
		color.style.borderBottom = 	"2px solid #008000";
		x = true;
	}
	verifyemail();
}
var verifyemail = () =>{
	let email = document.getElementById("inputemail").value;
	let color = document.getElementById('color_email');
	console.log(email);
	for(var i=0; i< email.length ; i++){
		c = email.charAt(i);
		if(c == "@"){
			i++;
			for(var k = i; k< email.length ; k++){
				if(email.charAt(k) == "."){
					k++;
					if(email.charAt(++k)){
					var conf = true;
					y = true;
					color.style.borderBottom = 	"2px solid #008000";
					break;
					}
				}
			}
		}
	}
	if(!conf){
		color.style.borderBottom = 	"2px solid #bc0000";
		y = false;
	}
	verifycheck();
}

var verifycheck = () =>{
	let checkbox_color = document.getElementById("color_checkbox");
	let checkbox = document.getElementById("checkbox");
	let colortext = document.getElementById("iaccept");
	if ((checkbox.checked) == false){
		checkbox_color.style.display = "inline";
		colortext.style.color = "#bc0000";

		console.log(checkbox.checked);
		z = false;
	}
	else{
	checkbox_color.style.display = "none";
	colortext.style.color = "#707070";
	z = true;
	}
	console.log(x,y,z); //checking if exist the 3 param
	if(x == true && y == true && z == true){
		fetchPost();
	}
}

/* verify just popup email */

var verify_only_mail = () =>{

	let email = document.getElementById("inputpopup").value;
	let color = document.getElementById('color_popup');
	console.log(email);
	for(var i=0; i< email.length ; i++){
		c = email.charAt(i);
		if(c == "@"){
			i++;
			for(var k = i; k< email.length ; k++){
				if(email.charAt(k) == "."){
					k++;
					if(email.charAt(++k)){
						var confi = true;
					color.style.borderBottom = 	"2px solid #008000";
					d = true;
					break;
					}
				}
			}
		}
	}
	if(!confi){
		color.style.borderBottom = 	"2px solid #bc0000";
		d = false;
	}
	fetchPost();
}
	
