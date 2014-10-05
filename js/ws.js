// Login usuario
function login(){
	$('form.login').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();

		$.post(
		  	'http://nextlab.org/tamal-app/v1/login',
		  	data,
		  	function(response){
				if(response.error == false){
					localStorage.setItem("key",response.api_key);
					localStorage.setItem("radio",response.radio_tamalerta);
					localStorage.setItem("nombre", response.nombre + ' ' + response.apellido);
					localStorage.setItem("email", response.email);
					window.location.replace('index.html');
				} else{
					console.log(response);
					var msj = $('#notificacionError').modal('show');
					document.getElementById('password').value="";	
				}	  		
		  	}
		);
	});
}// login

//Login Tamalero

function tamaleroLogin(){
	$('form.tamaleroLogin').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();

		$.post(
		  	'http://nextlab.org/tamal-app/v1/logintamalero',
		  	data,
		  	function(response){
				if(response.error == false){
					localStorage.setItem("key",response.api_key);
					localStorage.setItem("id",response.id);
					window.location.replace('tamalero-inventario.html');
				}else{
					var msj = document.getElementById('notificacionError');
					document.getElementById('password').value="";
					msj.innerHTML = "";
					msj.innerHTML ="Error: "+ "Tu contraseña es incorrecta. Intenta de nuevo.";
				}	  		
		  	}
		);
	});   
} //tamaleroLogin


// obtiene información de tamaleros de WS
function obtenerInfoTamaleros(){
	$.ajax({
	    type: 'GET',
	    url: 'http://nextlab.org/tamal-app/v1/tamaleros',
	    headers:{ 'X-Authorization' : localStorage.getItem('key')},
	    success: function(response) {
	    	window.tamalerosInfo = [];
	        $.each(response.tamaleros, function(i, val){
	        	var tamalero = [];
	        	tamalero.push(val.id);
	        	tamalero.push(val.nombre);
	        	tamalero.push(val.apellido);
	        	tamalero.push(parseFloat(val.lat));
	        	tamalero.push(parseFloat(val.lon));

	        	tamalerosInfo.push(tamalero);
	        });
	    },
	    error: function(response){
	    	console.log(response);
	    },
	    async: false
	});
}

// revisa cada 30 segundo si se actualizó la posición del tamalero
function actualizaPosicionTamaleros(){
	setInterval(function(){
		obtenerInfoTamaleros();		
		// actualiza marcadores con nueva posición
		borraMarkers();
		actualizaMarkers(window.mapObject, window.tamalerosInfo);
		console.log("se ha actualizado la posición de los tamaleros");
	}, 30000);
}// actualizaPosicionTamaleros

function actualizaPosicionTamalero(){
	setInterval(function(){
		getPosicionTamalero();
	}, 30000);
}// actualizaPosicionTamalero

function getPosicionTamalero(){
	 if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("Geolocation is not supported by this browser.");
	}

	function showPosition(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		setPosicionTamalero(localStorage.getItem('key'), lat, lon);
	}
}

function setPosicionTamalero(key, lat, lon){
	$.ajax({
        type: 'POST',
        url: 'http://nextlab.org/tamal-app/v1/ruta',
        headers:{ 'X-Authorization' : key },
        data: {
            lat: lat,
            lon: lon
        },
        success: function(response) {
            console.log(response);
        },
        error: function(response){
            console.log(response);
        }
    });
}

function actualizaMarkers(map, locations) {
	console.log(locations);
    var image = {
        url: 'images/tamaleros-icon.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 32)
    };

    var shape = {
        coords: [1, 1, 1, 34, 34, 34, 34 , 1],
        type: 'poly'
    };

    window.markers = new Array();
    for (var i = 0; i < locations.length; i++) {
        var pos = locations[i];
        var myLatLng = new google.maps.LatLng(pos[3], pos[4]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            id: pos[0],
            title: pos[1]
        });
        window.markers.push(marker);

        google.maps.event.addListener(marker, 'click', function() {
            $('#myModal').modal('show');

            var pos0= ""+this.position.k.toFixed(3);
            var pos1= ""+this.position.B.toFixed(3);

            var origen=userLatLng;
            var destino= this.position;//new google.maps.LatLng(pos0);
            var distancia = google.maps.geometry.spherical.computeDistanceBetween (origen, destino);

            //Modificar Valores
            var x = document.getElementById('distancia');
            x.innerHTML="Distancia aproximada: "+ parseInt(distancia,10) +" m";

            var infoTamalero = document.getElementById('myModalLabel');

            var des0, des1;
            for(var j=0; j<window.tamalerosInfo.length; j++){
                des0= ""+tamalerosInfo[j][3].toFixed(3);
                des1= ""+tamalerosInfo[j][4].toFixed(3);
                console.log('i: ' + dameInventarioTamalero(tamalerosInfo[j][0]));
                var inventario = dameInventarioTamalero(tamalerosInfo[j][0]);

                if(inventario != -1){
                    console.log(inventario);
                    if(inventario.length > 0)
                        console.log('si hay!');
                    else
                        console.log('no hay');
                }

                if((des0==pos0)&&(des1==pos1)){
                    infoTamalero.innerHTML=""+tamalerosInfo[j][1]+" "+tamalerosInfo[j][2];
                }
            }// for
        }, this);
    }
}// setMarkers

function borraMarkers(){
	for (var i = 0; i < window.markers.length; i++ ) {
		window.markers[i].setMap(null);
	}
	window.markers.length = 0;
}// borraMarkers

/**
	Descripcion: Buscar tamaleros cerca si está activada la tamalerta
*/
function buscarTamalerosCerca(){

}// buscarTamalerosCerca

function register(){
	$('form.register').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		$.post(
		  	'http://nextlab.org/tamal-app/v1/register',
		  	data,
		  	function(response){
		  		console.log(response);

				if(response.error == false){
					infoUsuario=response;
					//window.location.replace('index.html');
				}else{
					document.getElementById('password').value="";
				}	  		
		  	}
		);
	});
} 

function buscarPedidos(){
	actualizaCoordenadas();
}

function actualizaCoordenadas(){

}

// Push notification
function registrarEndpoint(){
	console.log('registrar endpoint');

	var regs = navigator.push.registrations();
	var key = localStorage.getItem('key');
	
	regs.onsuccess = function(e) {
		if (regs.result.length == 0) {
	    	var req = navigator.push.register();
	      	req.onsuccess = function() {
	        	var endpoint = req.result;
	        	console.log(endpoint);
	        	 $.ajax({
		            type: 'POST',
		            url: 'http://nextlab.org/tamal-app/v1/endpoint',
		            headers:{ 'X-Authorization' : key },
		            data: {
		                endpoint: endpoint
		            },
		            success: function(response) {
		                console.log(response);
		            },
		            error: function(response){
		                console.log(response);
		            }
		        });
	    	}
	    	req.onerror = function(e) {
			  	console.log("Error registering the endpoint: " + JSON.stringify(e));
			}
		} else if (regs.result.length > 0) {
			for (var i = 0, l = regs.result.length; i < l; i++) {
				console.log("Existing registration", regs.result[i].pushEndpoint, regs.result[i].version);
			}
			// Reuse existing endpoints.
			var req = navigator.push.register();
	      	req.onsuccess = function() {
	        	var endpoint = req.result;
	        	console.log(endpoint);
	        	 $.ajax({
		            type: 'POST',
		            url: 'http://nextlab.org/tamal-app/v1/endpoint',
		            headers:{ 'X-Authorization' : key },
		            data: {
		                endpoint: endpoint
		            },
		            success: function(response) {
		                console.log(response);
		            },
		            error: function(response){
		                console.log(response);
		            }
		        });;
	    	}
	    	req.onerror = function(e) {
			  	console.log("Error registering the endpoint: " + JSON.stringify(e));
			}
		} else {
			// Register for a new endpoint.
			var register = navigator.push.register();
			register.onsuccess = function(e) {
				console.log("Registered new endpoint", register.result);
			}
		}

		pushHandler();
	}
}// registrarEndpoint

function pushHandler(){
	console.log('pushHandler');
	if (window.navigator.mozSetMessageHandler) {
		window.navigator.mozSetMessageHandler('push', function(e) {
			console.log('My endpoint is ' + e.pushEndpoint);
			console.log('My new version is ' +  e.version);
			var notification = navigator.mozNotification.createNotification("¿De qué color?", 'black dick');
			notification.show();
			//Remember that you can handle here if you have more than
			//one pushEndpoint
		});
	} else {
		console.log('No message handler');
	}
}

function activarTamalerta(){
	$('.btn-tamalerta button').on('click', function(){
		var radio;

		if($(this).hasClass('on')){
			radio = $('#radio-tamalerta option:selected').attr('value');
			$('form').removeClass('hidden');
		}
		else{
			$('form').addClass('hidden');
			radio = -1;
		}

		actualizaTamalerta(radio);
	});

	$('form select').change(function(){
		var radio = $('#radio-tamalerta option:selected').attr('value');
		actualizaTamalerta(radio);
	});

	function actualizaTamalerta(r){
        $.ajax({
            type: 'POST',
            url: 'http://nextlab.org/tamal-app/v1/radioTamalerta',
            headers:{ 'X-Authorization' : localStorage.getItem('key')},
            data: {
                radio: r
            },
            success: function(response) {
                console.log(response);
            },
            error: function(response){
                console.log(response);
            }
        });
	}
}

function setPerfil(nombre, email){
	$('#nombre').text(nombre);
	$('#email').text(email);
}

function setTamalertaPerfil(radio){
	console.log(radio);
	if(radio != '-1'){
		// activar boton de ON y poner como seleccionado
		// la "option" del "select" que tenga value=radio
	} 
}


