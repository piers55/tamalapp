
	var dulce = 0;
	var verde = 0;
	var mole = 0;
	var rajas = 0;		
	var oaxaqueño = 0;


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
		var iSumar = buttonSumar.appendChild(document.createElement('i'));			;


			
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
				dulce+=parseInt(cantidad);
				break;

				case "Verde": 
				verde+=parseInt(cantidad);
				break;

				case "Mole": 
				mole+=parseInt(cantidad);
				break;

				case "Rajas": 
				rajas+=parseInt(cantidad);
				break;

				case "Oaxaqueño": 
				oaxaqueño+=parseInt(cantidad);
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


		//(<alt>, y, x, z-index)
      var beaches = [
        ['Juan', 19.415, -99.170, 'fijo', 0, 7, 3, 4, 5],
        ['Pedro', 19.41, -99.170, 'fijo', 1, 2, 0, 7, 5],
        ['Adolfo', 19.405,  -99.170, 'movil', 1, 2, 3, 4, 5],
        ['Carlos', 19.405,  -99.175, 'movil', 1, 7, 3, 0, 5],
        ['Gerardo', 19.41,  -99.175, 'fijo', 1, 0, 3, 4, 5],
        ['Juana', 19.415,  -99.175, 'movil', 1, 7, 7, 4, 0]
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

function setMarkers(map, locations) {

  var image = {
    url: 'images/fijo-icon.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(32, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 34, 34, 34, 34 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
    });

    var contentString = '<div class="modal-header">'+
        '<h4 class="modal-title" id="myModalLabel">'+ tamalero.nombre +'</h4>'+
        '<h4 class="modal-title" id="distancia">Distancia aproximada: 4km</h4>'+
      '</div>'+
      '<div class="modal-body">'+
        '<div class="orden center clearfix">'+
          '<table id = "tabla">'+
            '<p>Mi inventario</p>'+
            '<tr id="tablaDulce">'+
              '<td class="sabor">Dulce</td>'+
              '<td class="cantidad">'+tamalero.dulce+'</td>'+   
            '</tr>'+

            '<tr id="Verde">'+
              '<td class="sabor">Verde</td>'+
              '<td class="cantidad">'+ tamalero.verde+'</td>'+   
            '</tr>'+
            '<tr id="Mole">'+
              '<td class="sabor">Mole</td>'+
              '<td class="cantidad">'+ tamalero.mole+'</td>'+   
            '</tr>'+
            '<tr id="Rajas">'+
              '<td class="sabor">Rajas</td>'+
              '<td class="cantidad">'+ tamalero.rajas+'</td>'+   
            '</tr>'+
            '<tr id="Oaxaqueño">'+
              '<td class="sabor">Oaxaqueño</td>'+
              '<td class="cantidad">'+ tamalero.oaxaqueño+'</td>'+   
            '</tr>'+
          '</table>'+
        '</div><!--INVENTARIO-->'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
  });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  }
}



      function geolocationSuccess(position) {
        var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        var myOptions = {
          zoom : 16,
          center : userLatLng, //disableDefaultUI: true
          mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        // Draw the map
        var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
        
        setMarkers(mapObject, beaches);

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
