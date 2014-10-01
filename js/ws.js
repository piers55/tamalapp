$(document).ready(function(){

});

var infoUsuario;

function login(){
	$('form.login').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		console.log(data);

		$.post(
		  	'http://nextlab.org/tamal-app/v1/login',
		  	data,
		  	function(response){
		  		console.log(response);
		  		//alert();
				if(response.error == false){
					infoUsuario=response;
					window.location.replace('index.html');

				}else{
					document.getElementById('password').value="";
					alert();
				}	  		
		  	}
		);
	});
} 



					//alert(" "+infoUsuario.email);

function register(){
	$('form.register').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		console.log(data);

		$.post(
		  	'http://nextlab.org/tamal-app/v1/register',
		  	data,
		  	function(response){
		  		console.log(response);
		  		//alert();
				if(response.error == false){
					//infoUsuario=response;
					alert("event Registrar");
					//window.location.replace('index.html');

				}else{
					document.getElementById('password').value="";
					alert();
				}	  		
		  	}
		);
	});
}





function otro(){
	$('form.login').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		console.log(data);

		$.post(
		  	'http://nextlab.org/tamal-app/v1/login',
		  	data,
		  	function(response){
		  		console.log(response);
		  		alert("Response");

		  	}
		);
	});
} 
