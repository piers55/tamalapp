
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


		
