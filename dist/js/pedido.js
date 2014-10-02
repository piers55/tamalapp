	var userLatLng;
	var dulce = 0, verde = 0, mole = 0, rajas = 0, oaxaqueño = 0;

	function crearElemento( padreTemp, saborTemp, cantidadTemp){

		var nomTabla = "tabla"+saborTemp;
		if(padreTemp.hasChildNodes){
			removeAllChilds(nomTabla);

		}


		var tr = padreTemp;
		var tdSabor = tr.appendChild(document.createElement('td'));
		var tdCantidad = tr.appendChild(document.createElement('td'));
		var tdEliminar1 = tr.appendChild(document.createElement('td'));
		var tdEliminar2 = tr.appendChild(document.createElement('td'));
		var buttonRestar = tdEliminar1.appendChild(document.createElement('button'));
		var buttonSumar = tdEliminar2.appendChild(document.createElement('button'));

		var iRestar = buttonRestar.appendChild(document.createElement('i'));
		var iSumar = buttonSumar.appendChild(document.createElement('i'));


			
		    tdSabor.setAttribute("class", "sabor");
		    tdCantidad.setAttribute("class", "cantidad");
		    tdEliminar1.setAttribute("class", "eliminar");
		    tdEliminar2.setAttribute("class", "eliminar");
		    buttonRestar.setAttribute("onclick", "sumarRestar(1, this)");
		    buttonSumar.setAttribute("onclick", "sumarRestar(2, this)");

		    iSumar.setAttribute("class", "sumar fa fa-plus-circle");
		    iRestar.setAttribute("class", "restar fa fa-minus-circle");

		    tdSabor.innerHTML = ""+saborTemp;
		    tdCantidad.innerHTML = cantidadTemp;
		}

		function removeAllChilds(a){
			var a=document.getElementById(a);
			while(a.hasChildNodes())
				a.removeChild(a.firstChild);	
		}


		function visualizar(){
			var tempTabla, padre;

			if (dulce=="condición para remover"){
				tempTabla= document.getElementById("tablaDulce");
				padre = tempTabla.parentNode;

				if (tempTabla.hasChildNodes) {
					removeAllChilds("tablaDulce");
				}
			}else {
				tempTabla= document.getElementById("tablaDulce");
				crearElemento(tempTabla, "Dulce", dulce);
			}



			if (verde=="condición para remover"){
				tempTabla= document.getElementById("tablaVerde");
				padre = tempTabla.parentNode;

				if (tempTabla.hasChildNodes) {
					removeAllChilds("tablaVerde");
				}
			}else {
				tempTabla= document.getElementById("tablaVerde");
				crearElemento(tempTabla, "Verde", verde);
			}



			if (mole=="condición para remover"){
				tempTabla= document.getElementById("tablaMole");
				padre = tempTabla.parentNode;

				if (tempTabla.hasChildNodes) {
					removeAllChilds("tablaMole");
				}
			}else {
				tempTabla= document.getElementById("tablaMole");
				crearElemento(tempTabla, "Mole", mole);
			}




			if (rajas=="condición para remover"){
				tempTabla= document.getElementById("tablaRajas");
				padre = tempTabla.parentNode;

				if (tempTabla.hasChildNodes) {
					removeAllChilds("tablaRajas");
				}
			}else {
				tempTabla= document.getElementById("tablaRajas");
				crearElemento(tempTabla, "Rajas", rajas);
			}



			if (oaxaqueño=="condición para remover"){
				tempTabla= document.getElementById("tablaOaxaqueño");
				padre = tempTabla.parentNode;

				if (tempTabla.hasChildNodes) {
					removeAllChilds("tablaOaxaqueño");
				}
			}else {
				tempTabla= document.getElementById("tablaOaxaqueño");
				crearElemento(tempTabla, "Oaxaqueño", oaxaqueño);
			}
		}





		function añadirInventario(){
			var sabor = document.getElementById("sabor").value;
			var cantidad = document.getElementById("cantidad").value;

			switch(sabor){

				case "Dulce": 
				dulce+=parseInt(cantidad, 10);
				break;

				case "Verde": 
				verde+=parseInt(cantidad, 10);
				break;

				case "Mole": 
				mole+=parseInt(cantidad, 10);
				break;

				case "Rajas": 
				rajas+=parseInt(cantidad, 10);
				break;

				case "Oaxaqueño": 
				oaxaqueño+=parseInt(cantidad, 10);
				break;

			}

			visualizar();
		}




		function sumarRestar(caso, caller){
			var nombreTabla = caller.parentNode.parentNode.getAttribute("id");
			

			switch(nombreTabla){
				case "tablaDulce":
				if (caso==1 && dulce>0) dulce--;
				else if (caso==2) dulce++;							

				break;

				case "tablaVerde":
				if (caso==1 && verde>0) verde--;
				else if (caso==2) verde++;
				break;

				case "tablaMole":
				if (caso==1 && mole>0) mole--;
				else if (caso==2) mole++;

				break;

				case "tablaRajas":
				if (caso==1 && rajas>0) rajas--;
				else if (caso==2) rajas++;
				break;

				case "tablaOaxaqueño":
				if (caso==1 && oaxaqueño>0) oaxaqueño--;
				else if (caso==2) oaxaqueño++;
				break;

			}
			visualizar();
		}
//___________________________________________________________________________________


function createModal(){
		//var idModal =""+nombre+""+index;
		var idModal = "myModal0";
		var body = document.getElementById('tamaleros');
		var div0= body.appendChild(document.createElement('div'));
		div0.setAttribute("class", "modal fade");
		div0.setAttribute("id", idModal);			
		div0.setAttribute("tabindex", "-1");			
		div0.setAttribute("role", "dialog");					
		div0.setAttribute("aria-labelledby", "myModalLabel");
		div0.setAttribute("aria-hidden", "true");		

		var div1 = div0.appendChild(document.createElement('div'));
		div1.setAttribute("class", "modal-dialog");

		var div2 = div1.appendChild(document.createElement('div'));
		div2.setAttribute("class", "modal-header");

		var b0 = div2.appendChild(document.createElement('button'));
		b0.setAttribute("type", "button");		
		b0.setAttribute("class", "close");
		b0.setAttribute("data-dismiss", "modal");

		var span0= b0.appendChild(createElement('span'));
		span0.setAttribute("aria-hidden", "true");

		var span1=b0.appendChild(createElement('span'));
		span1.setAttribute("class", "sr-only");
		span1.innerHTML = "Close";




//		    tdSabor.innerHTML = ""+saborTemp;
//		    tdCantidad.innerHTML = cantidadTemp;

}







	//(id, nombre, apellido, lat, lon, tiempo_contenido)

      var tamalerosInfo = [
        ['5' ,'Franciso A','Salazar', 19.415, -99.170, "2014-09-30"],
        ['6','Camilo','Salazar', 19.41, -99.170, "2014-09-30"],
        ['9' ,'Adolfo','Salazar', 19.405,  -99.170, "2014-09-30"],
      ]; 

      var nombreT = "Jesús Ramírez";
      var cantidadDulce =0, cantidadVerde = 0, cantidadMole=0, cantidadRajas=0, cantidadOaxaqueño=0;
      var tamaleroY=19.415, tamaleroX=-99.170;

      var tamalero = {
        nombre: nombreT,
        dulce: cantidadDulce,
        verde: cantidadVerde,
        mole: cantidadMole,
        rajas: cantidadRajas,
        oaxaqueño: cantidadOaxaqueño,
        y: tamaleroY,
        x: tamaleroX
      }


      function calcularDistancia(){

      }

function setMarkers(map, locations) {

  var image = {
    url: 'images/fijo-icon_01.png',
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
  };



  var shape = {
      coords: [1, 1, 1, 34, 34, 34, 34 , 1],
      type: 'poly'
  };
   
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

  		google.maps.event.addListener(marker, 'click', function() {
    	$('#myModal').modal('show');
    	
    	var pos0= ""+this.position.k;
    	var pos1= ""+this.position.B;

    	var origen=userLatLng;
    	var destino= this.position;//new google.maps.LatLng(pos0);
    	var distancia = google.maps.geometry.spherical.computeDistanceBetween (origen, destino);
    	console.log(distancia);
    	//console.log(pos0 + ",   " + pos1);
    	for(var j=0; j<tamalerosInfo.length; j++){
    		//console.log(""+tamalerosInfo[j][3]);

    		//if(((""+tamalerosInfo[j][3])==(pos0))&&((""+tamalerosInfo[j][4])==pos1))
    		//console.log("I'm "+ i);
    		//alert("");
    	}



  	}, this);
  }
}

		

      function geolocationSuccess(position) {
        userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        var myOptions = {
          zoom : 16,
          center : userLatLng, //disableDefaultUI: true
          mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        // Draw the map
        var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
        
        setMarkers(mapObject, tamalerosInfo);

        // Place the marker
        new google.maps.Marker({
          map: mapObject,
          position: userLatLng
        });
      }
 
      function geolocationError(positionError) {
        document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
      }
 
      function geolocateUser() {
        // If the browser supports the Geolocation API
        if (navigator.geolocation)
        {
          var positionOptions = {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          };
          navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
        }
        else
          document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
      }

