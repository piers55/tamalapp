+function ($) { "use strict";

//BOTON DE ON Y OFF ************************************

    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');

        if ($(this).find('.btn-primary').size()>0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        if ($(this).find('.btn-danger').size()>0) {
            $(this).find('.btn').toggleClass('btn-danger');
        }
        if ($(this).find('.btn-success').size()>0) {
            $(this).find('.btn').toggleClass('btn-success');
        }
        if ($(this).find('.btn-info').size()>0) {
            $(this).find('.btn').toggleClass('btn-info');
        }
        $(this).find('.btn').toggleClass('btn-default');
    });


    

//********************************************************




//SLIDES PARA COMO FUNCIONA********************************
$("#myCarousel").carousel();
$('#myCarousel').on('slide', '', function() {
    if( $('.carousel-inner .item:last').hasClass('active') ) {
        $(this).carousel('stop');
    }
});

//*********************************************************






//MENU COLLAPSE*********************************************

    $(document).on('click',function(e){
        if( ! $(e.target).is('.fa.fa-bars') ) {
            $('.navbar-collapse').removeClass('in');
        }
    });


//*********************************************************
    $(document).ready(function(){
        cerrarSesion();
    });
    function cerrarSesion(){
        $('.navbar-mobile ul li:last-child a').on('click', function(e){
            e.preventDefault();
            localStorage.removeItem('key');
            localStorage.removeItem('lat');
            localStorage.removeItem('lon');
            localStorage.removeItem('radio');
            window.location = '/tamalapp/preLogin.html';
        });
    }

}(window.jQuery);

    var userLatLng;
    var dulce = 0, verde = 0, mole = 0, rajas = 0, oaxaqueño = 0;
    var k=0;



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

function setMarkers(map, locations) {
    var image = {
        url: 'images/ambulante-icon_04.png',
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

            var nomTamalero = document.getElementById('myModalLabel');

            var des0, des1;
            for(var j=0; j<tamalerosInfo.length; j++){
                des0= ""+tamalerosInfo[j][3].toFixed(3);
                des1= ""+tamalerosInfo[j][4].toFixed(3);

                if((des0==pos0)&&(des1==pos1)){
                nomTamalero.innerHTML=""+tamalerosInfo[j][1]+" "+tamalerosInfo[j][2];
                statusPedido= !statusPedido;
                }
            }// for
        }, this);
    }
}// setMarkers



function geolocationSuccess(position) {
    userLatLng = new google.maps.LatLng(position.coords.latitude.toFixed(3), position.coords.longitude.toFixed(3));

    var myOptions = {
        zoom : 16,
        center : userLatLng, //disableDefaultUI: true
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    // Draw the map
    window.mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

    setMarkers(window.mapObject, window.tamalerosInfo);

    var imageUser = {
        url: 'images/fijo-icon_01.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 32)
    };

    // Place the marker
    new google.maps.Marker({
        map: window.mapObject,
        icon: imageUser,
        title: "Yo",
        position: userLatLng
    });

    localStorage.setItem("lat", position.coords.latitude.toFixed(3));
    localStorage.setItem("lon", position.coords.longitude.toFixed(3));
}// geolocationSuccess

function geolocationError(positionError) {
    document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
}// geolocationError

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
}// geolocateUser

function hacerPedido(){
    $('.boton-orden').on('click', function(e){
        e.preventDefault();
        var pedido = {};
        var key = localStorage.getItem("key");
        var lat = localStorage.getItem("lat");
        var lon = localStorage.getItem("lon");
        var tamales = damePedido();

        console.log(tamales);

        $.ajax({
            type: 'POST',
            url: 'http://nextlab.org/tamal-app/v1/pedidos',
            headers:{ 'X-Authorization' : key},
            data: {
                lat: lat, lon: lon, data: tamales
            },
            success: function(response) {
                console.log(response);
            },
            error: function(response){
                console.log(response);
            }
        });
    });
}

function damePedido(){
    var data = '[';
    $('#tabla-pedido tr').each(function(i, val){
        var idTamal = $(this).data('id');
        var cantidad = $(this).find('.cantidad').text();

        if(cantidad != '0')
            data = data + '{ "id":' + idTamal + ', "c":' + cantidad + '},';

    });
    data = data.substring(0, data.length - 1);
    data = data + ']';
    return data;
}


