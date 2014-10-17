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
        //tamalertaEmergencia();
    });


function cerrarSesion(){
    $('.navbar-mobile ul li:last-child a').on('click', function(e){
        e.preventDefault();
        var key = localStorage.getItem('key');
        if(localStorage.getItem('rol') == 'tamalero'){
            console.log('loggin out');
            console.log(key);
            console.log(localStorage.getItem('id'));
            $.ajax({
                type: 'POST',
                headers:{ 'X-Authorization' : key },
                url: 'http://nextlab.org/tamal-app/v1/tamalero/logout',
                success: function(response) {
                    console.log("Success - Cerrar Sesion");
                    console.log(response);
                },
                error: function(response){
                    console.log("Error");
                    console.log(response);
                }
            });
            }// endif

            localStorage.removeItem('key');
            localStorage.removeItem('lat');
            localStorage.removeItem('lon');
            localStorage.removeItem('radio');
            localStorage.removeItem('pedido');
            window.location.replace('preLogin.html');
        });
    }

}(window.jQuery);

var userLatLng;
var dulce = 0, verde = 0, mole = 0, rajas = 0, atole = 0;


/*
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
        } */

    function removeAllChilds(a){
        var a=document.getElementById(a);
        if(a!=null)
            while(a.hasChildNodes())
                a.removeChild(a.firstChild);
        }

    //Realizar orden - solo gráfico, sin llamar al Ws.
    function orden(){
        $('#tablaDulce').find('.eliminar').find('.jsSumar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaDulce').find('.cantidad').text();
            tmp++;
            $('#tablaDulce').find('.cantidad').text(tmp);
        });

        $('#tablaVerde').find('.eliminar').find('.jsSumar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaVerde').find('.cantidad').text();
            tmp++;
            $('#tablaVerde').find('.cantidad').text(tmp);
        });

        $('#tablaMole').find('.eliminar').find('.jsSumar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaMole').find('.cantidad').text();
            tmp++;
            $('#tablaMole').find('.cantidad').text(tmp);
        });

        $('#tablaRajas').find('.eliminar').find('.jsSumar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaRajas').find('.cantidad').text();
            tmp++;
            $('#tablaRajas').find('.cantidad').text(tmp);
        });


        $('#tablaAtole').find('.eliminar').find('.jsSumar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaAtole').find('.cantidad').text();
            tmp++;
            $('#tablaAtole').find('.cantidad').text(tmp);
        });

        //Restar
        $('#tablaDulce').find('.eliminar').find('.jsRestar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaDulce').find('.cantidad').text();
            if(tmp>0){
                tmp--;
            }else{
                tmp=0;
            }
            $('#tablaDulce').find('.cantidad').text(tmp);
        });

        $('#tablaVerde').find('.eliminar').find('.jsRestar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaVerde').find('.cantidad').text();
            if(tmp>0){
                tmp--;
            }else{
                tmp=0;
            }
            $('#tablaVerde').find('.cantidad').text(tmp);
        });

        $('#tablaMole').find('.eliminar').find('.jsRestar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaMole').find('.cantidad').text();
            if(tmp>0){
                tmp--;
            }else{
                tmp=0;
            }
            $('#tablaMole').find('.cantidad').text(tmp);
        });

        $('#tablaRajas').find('.eliminar').find('.jsRestar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaRajas').find('.cantidad').text();
            if(tmp>0){
                tmp--;
            }else{
                tmp=0;
            }
            $('#tablaRajas').find('.cantidad').text(tmp);
        });


        $('#tablaAtole').find('.eliminar').find('.jsRestar').on('click', function(e){
            e.preventDefault();
            var tmp=$('#tablaAtole').find('.cantidad').text();
            if(tmp>0){
                tmp--;
            }else{
                tmp=0;
            }
            $('#tablaAtole').find('.cantidad').text(tmp);
        });

        }//orden
/*
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



            if (atole=="condición para remover"){
                tempTabla= document.getElementById("tablaAtole");
                padre = tempTabla.parentNode;

                if (tempTabla.hasChildNodes) {
                    removeAllChilds("tablaAtole");
                }
            }else {
                tempTabla= document.getElementById("tablaAtole");
                crearElemento(tempTabla, "Atole", atole);
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

                case "Atole":
                atole+=parseInt(cantidad, 10);
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
                //actualizarInventario('01',dulce);
                break;

                case "tablaVerde":
                if (caso==1 && verde>0) verde--;
                else if (caso==2) verde++;
                //actualizarInventario('02',verde);
                break;

                case "tablaMole":
                if (caso==1 && mole>0) mole--;
                else if (caso==2) mole++;
                //actualizarInventario('03',mole);
                break;

                case "tablaRajas":
                if (caso==1 && rajas>0) rajas--;
                else if (caso==2) rajas++;
                //actualizarInventario('04',rajas);
                break;

                case "tablaAtole":
                if (caso==1 && atole>0) atole--;
                else if (caso==2) atole++;
                //actualizarInventario('05',atole);
                break;

            }
            //visualizar();
        }
        */
        function setMarkers(map, locations) {
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

        /*google.maps.event.addListener(marker, 'click', function() {
            $('#myModal').modal('show');

            var pos0= ""+this.position.k.toFixed(3);
            var pos1= ""+this.position.B.toFixed(3);

            var origen=userLatLng;
            var destino= this.position;
            console.log(destino);
            var distancia = google.maps.geometry.spherical.computeDistanceBetween (origen, destino);

            //Modificar Valores
            var x = document.getElementById('distancia');
            x.innerHTML="Distancia aproximada: "+ parseInt(distancia,10) +" m";
            var infoTamalero = document.getElementById('myModalLabel');

            var des0, des1;
            for(var j=0; j<window.tamalerosInfo.length; j++){
                des0= ""+tamalerosInfo[j][3];
                des1= ""+tamalerosInfo[j][4];

                if((des0==pos0)&&(des1==pos1)){
                    console.log('match');
                    dameInventarioTamalero(tamalerosInfo[j][0]);
                    infoTamalero.innerHTML=""+tamalerosInfo[j][1]+" "+tamalerosInfo[j][2];
                }
            }// for
        }, this);*/
}
}// setMarkers

function geolocationSuccess(position) {
    userLatLng = new google.maps.LatLng(position.coords.latitude.toFixed(3), position.coords.longitude.toFixed(3));

    var myOptions = {
        zoom : 16,
        center : userLatLng, 
        disableDefaultUI: true,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    // Draw the map
    window.mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

    setMarkers(window.mapObject, window.tamalerosInfo);

    var imageUser = {
        url: 'images/user-marker.png',
        size: new google.maps.Size(32, 40),
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
        timeout: 30 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
}
}// geolocateUser



function geolocateTamalero() {
    // If the browser supports the Geolocation API
    if (navigator.geolocation)
    {
      var positionOptions = {
        enableHighAccuracy: true,
        timeout: 30 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccessTamalero, geolocationError, positionOptions);
}
}// geolocateUser



//Dibujar el mapa del tamalero, más sencillo pues solo carga su posición y el destino
function geolocationSuccessTamalero(position) {
    var lat= position.coords.latitude.toFixed(3);
    var lon= position.coords.longitude.toFixed(3);

    tamaleroLatLng = new google.maps.LatLng(lat, lon);
    pedidoLatLng = new google.maps.LatLng(localStorage.getItem('pedido-lat'), localStorage.getItem('pedido-lon'));
    
    //localStorage.setItem("lat", lat);
    //localStorage.setItem("lon", lon);


    var myOptions = {
        zoom : 16,
        center : tamaleroLatLng, //disableDefaultUI: true
        disableDefaultUI: true,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    // Draw the map
    window.mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

    var imageUser = {
        url: 'images/user-marker.png',
        size: new google.maps.Size(32, 40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 32)
    };

    var imageTamalero = {
        url: 'images/tamaleros-icon.png',
        size: new google.maps.Size(32, 40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 32)
    };

    // Place the marker Tamalero
    var tamaleroMarker = new google.maps.Marker({
        map: window.mapObject,
        icon: imageTamalero,
        title: "Yo - Tamalero",
        id: '0',
        position: tamaleroLatLng
    });

 // Place the marker Usuario Destino
    var usuarioMarker = new google.maps.Marker({
    map: window.mapObject,
    icon: imageUser,
    title: "Pedido",
    position: pedidoLatLng
});


//__________

google.maps.event.addListener(usuarioMarker, 'click', function() {
            //$('#myModal').modal('show');

            console.log("Usuario clickeado"); 
            solicitudDePedido();
            
        }, this);

//__________




 setInterval(function(){
    tamaleroMarker.setMap(null);
    navigator.geolocation.getCurrentPosition(actualizaPos);
    
    function actualizaPos(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        localStorage.setItem('tamaleroLat', lat.toFixed(3));
        localStorage.setItem('tamaleroLng', lon.toFixed(3))
    }
    tamaleroLatLng = new google.maps.LatLng(localStorage.getItem('tamaleroLat'), localStorage.getItem('tamaleroLng'));
    tamaleroMarker.position= tamaleroLatLng;

    tamaleroMarker.setMap(window.mapObject);
    console.log("Posición Actualizada");

}, 10000);


}// geolocationSuccessTamalero



function hacerPedido(){
    $('.boton-orden').on('click', function(e){
        e.preventDefault();
        var pedido = {};
        var key = localStorage.getItem("key");
        var lat = localStorage.getItem("lat");
        var lon = localStorage.getItem("lon");
        var tamales = damePedido();
        console.log(tamales);
        console.log(lon, lat);

        $.ajax({
            type: 'POST',
            url: 'http://nextlab.org/tamal-app/v1/pedidos',
            headers:{ 'X-Authorization' : key},
            data: {
                lat: lat, lon: lon, data: tamales
            },
            success: function(response) {
                console.log(response);
                //Redirije al index.html y le manda la instrucción de que se realizó un pedido
                localStorage.setItem('pedido', 1);
                
                window.location.replace('index.html');
                registrarEndpointUsuario();
            },
            error: function(response){
                localStorage.setItem('pedido', 1); //Simular que el pedido está hecho.
                console.log("Error al hacer pedido");
                console.log(response);
            }
        });
        registrarEndpointUsuario();
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
}// damePedido

function dameInventarioTamalero(id_tamalero){
    console.log('consiguiendo inventarios');
    $.ajax({
        url: 'http://nextlab.org/tamal-app/v1/tamaleros/'+id_tamalero,
        headers:{ 'X-Authorization' : localStorage.getItem('key')},
        success: function(response) {
            console.log(response);
            // cuando regrewse algo, actualizar inventario en modal
            $('#tablaDulce').hide();
            $('#tablaVerde').hide();
            $('#tablaMole').hide();
            $('#tablaAtole').hide();
            $('#tablaRajas').hide();

            for(var k=0; k<response.inventario.length; k++){
                var tamales = response.inventario[k];

                switch(tamales.sabor){
                    case "Dulce":
                    $('#tablaDulce').show();
                    $('#dulceCantidad').text(tamales.cantidad);
                    break;

                    case "Verde":
                    $('#tablaVerde').show();
                    $('#verdeCantidad').text(tamales.cantidad);
                    break;

                    case "Mole":
                    $('#tablaMole').show();
                    $('#moleCantidad').text(tamales.cantidad);
                    break;

                    case "Atole":
                    $('#tablaAtole').show();
                    $('#AtoleCantidad').text(tamales.cantidad);
                    break;

                    case "Rajas":
                    $('#tablaRajas').show();
                    $('#rajasCantidad').text(tamales.cantidad);
                    break;
                }

            }
        },
        error: function(response){
            console.log(response);
        }
    });

    //return response.inventario;
} //dameInventarioTamalero


function cargaInventario(){
    var id_tamalero = localStorage.getItem('id');
    $.ajax({
        url: 'http://nextlab.org/tamal-app/v1/tamaleros/'+id_tamalero,
        headers:{ 'X-Authorization' : localStorage.getItem('key')},
        success: function(response) {
            $.each(response.inventario, function(i, val){
                var id = val.tamal_id;
                var filaSabor = $('#tabla').find('[data-id="' + id + '"]');

                filaSabor.find('.cantidad').text(val.cantidad);
            });
            console.log("Inventario Cargado");
            //cargaInventario();
            //console.log(response);
        },
        error: function(response){
            return -1;
        }
    });
}// cargaInventario

//El usuario ha hecho un pedido y despliega el modal de loading.
function hayPedido(){
    var hayPedido = localStorage.getItem('pedido');
    if ( hayPedido == 1 ){
        $('#buscandoTamalero').modal('show');
        registrarEndpointUsuario();
        

        //Simular la alerta / push notification de que el pedido va en camino
        //setTimeout(function(){  
          //  pedidoEnCamino();
        //}, 5000);
    }
}//hayPedido

//Resultado de recibir la notificación de que el pedido está en camino
function pedidoEnCamino(){
    $('#buscandoTamalero').modal('hide');
    $('#pedidoEnCamino').modal('show');
    console.log("Cambiar Modal");
}


function solicitudDePedido(){
 
    //Simulando un pedido
    var pedidoLat=19.413;
    var pedidoLng=-99.11;
    var lat = pedidoLat;
    var lon = pedidoLng;
    var tamales = [{ id:1, c:1},{ id:2, c:3},{ id:3, c:4},{ id:4, c:1},{ id:5, c:2}];
  
    var pedido={
        lat: lat,
        lon: lon, 
        data: tamales
    }; //Fin del objeto

/*            var pos0= ""+this.position.k.toFixed(3);
            var pos1= ""+this.position.B.toFixed(3);

            var origen=userLatLng;
            var destino= this.position;//new google.maps.LatLng(pos0);
            var distancia = google.maps.geometry.spherical.computeDistanceBetween (origen, destino);
*/

var distancia = 0;
$('#solicitudDePedido').find('#distancia').text("Distancia aproximada: "+ distancia +" m");

//Distancia del pedido
/*
    var origen = new google.maps.LatLng(localStorage.getItem("lat"), localStorage.getItem("lon"));
    var destino= new google.maps.LatLng(pedidoLat, pedidoLng);
    var distancia = google.maps.geometry.spherical.computeDistanceBetween (origen, destino);
    disancia=distancia.toFixed(1);
    if(distancia>2500){
            distancia=distancia/1000;
            distancia=distancia.toFixed(1);
            $('#solicitudDePedido').find('#distancia').text(distancia+" Km");
        }
        else
            $('#solicitudDePedido').find('#distancia').text(distancia+" m");

*/

    for (var i = 0; i < tamales.length; i++) {
        switch(tamales[i].id){
            case 1:
                $('#solicitudDePedido').find('#tablaVerde').find('.cantidad').text(tamales[i].c);
            break;

            case 2:
                $('#solicitudDePedido').find('#tablaMole').find('.cantidad').text(tamales[i].c);
            break;

            case 3:
                $('#solicitudDePedido').find('#tablaRajas').find('.cantidad').text(tamales[i].c);
            break;

            case 4:
                $('#solicitudDePedido').find('#tablaAtole').find('.cantidad').text(tamales[i].c);
            break;

            case 5:
                $('#solicitudDePedido').find('#tablaDulce').find('.cantidad').text(tamales[i].c);
            break;

            case 6:  //Por el error momentaneo en la base de datos
                $('#solicitudDePedido').find('#tablaDulce').find('.cantidad').text(tamales[i].c);
            break;

        }
    };
 $('#solicitudDePedido').modal('show');

 aceptarPedido(pedido);
 rechazarPedido();
}



//Aceptar Pedido - Botón en el modal.
function aceptarPedido(pedido){
   
    $('.jsAceptar').on('click', function(e){
        e.preventDefault();
        console.log("Aceptado");
        localStorage.setItem("pedido-lat", pedido.lat.toFixed(3));
        localStorage.setItem("pedido-lon", pedido.lon.toFixed(3));
        window.location.replace('tamalero-index.html');
    });
}//aceptarPedido


//Rechazar Pedido - Botón en el modal.
function rechazarPedido(){
    $('.jsRechazar').on('click', function(e){
        e.preventDefault();
        console.log("Rechazado");

        $('#solicitudDePedido').modal('hide');

    });
}//rechazarPedido

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
                    localStorage.setItem("pedido", 0);
                    localStorage.setItem("rol", "usuario");
                    localStorage.setItem('tamalero_cerca', 0);
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
                    localStorage.setItem("rol", "tamalero");
                    window.location.replace('tamalero-inventario.html');
                }else{
                    var msj = $('#notificacionError').modal('show');
                    document.getElementById('no-registro').value="";
                }
            }
            ); //Fin post
    });
} //tamaleroLogin


//Recuperar password
function recuperarPassword(){
    $('form.jsPassword').on('submit', function(e){
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        
        $.ajax({
            type: 'POST',
            url: 'http://nextlab.org/tamal-app/v1/login',
            data: {
                email: data
            },
            success: function(response) {
            //console.log(response);
            console.log("success");
        },
        error: function(response){
            console.log(response);
            console.log("error por no ser un ws adecuado");
        }
    }
            ); //Fin ajax
    });
} //recuperarPassword


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
                var lat, lon;
                tamalero.push(val.id);
                tamalero.push(val.nombre);
                tamalero.push(val.apellido);
                lat = parseFloat(val.lat);
                lon = parseFloat(val.lon);
                lat = lat.toFixed(3);
                lon = lon.toFixed(3);
                console.log(lat + ',,' + lon);
                tamalero.push(lat);
                tamalero.push(lon);

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
        if(localStorage.getItem('tamalero_cerca') == 0){
            console.log('busando tamaleros cerca...');
            buscarTamalerosCerca();

        }
    }, 10000);
}// actualizaPosicionTamaleros

function actualizaPosicionTamalero(){
    setInterval(function(){
        getPosicionTamalero();
    }, 10000);
}// actualizaPosicionTamalero

function getPosicionTamalero(){
    if (navigator.geolocation) {
        //console.log('getting pos tamalero');
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
            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);
            //console.log(response);
            //console.log('posición Actualizada');
        },
        error: function(response){
            console.log(response);
            console.log('error en set positionTamalero');
        }
    });
}

function actualizaMarkers(map, locations) {
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
                des0= ""+tamalerosInfo[j][3];
                des1= ""+tamalerosInfo[j][4];

                if((des0==pos0)&&(des1==pos1)){
                    infoTamalero.innerHTML=""+tamalerosInfo[j][1]+" "+tamalerosInfo[j][2];
                    dameInventarioTamalero(tamalerosInfo[j][0]);
                    console.log("ciclo para identificar al tamalero clickeado");
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


function backToMyLocation(){
    $('.boton-back-to-my-location').on('click', function(e){
        e.preventDefault();
        console.log("backToMyLocation");
        window.mapObject.panTo(new google.maps.LatLng(localStorage.getItem('lat'), localStorage.getItem('lon')) );
    });
}


/**
    Descripcion: Buscar tamaleros cerca si está activada la tamalerta
    */
    function buscarTamalerosCerca(){
        var usuario = new google.maps.LatLng(localStorage.getItem('lat'), localStorage.getItem('lon'));

        var bodee = document.getElementById('audio');
        removeAllChilds('audio');
        var myAudio = bodee.appendChild(document.createElement('audio'));
        myAudio.setAttribute('src','audio/tamales.mp3');
        myAudio.setAttribute('id', 'mus');

        for(var j=0; j<window.tamalerosInfo.length; j++){
            des0= tamalerosInfo[j][3];
            des1= tamalerosInfo[j][4];

            var tamalero = new google.maps.LatLng(des0, des1);
            var distancia = google.maps.geometry.spherical.computeDistanceBetween (usuario, tamalero);
            var radioTamalerta = localStorage.getItem('radio');

            if(parseInt(distancia) < parseInt(radioTamalerta) && radioTamalerta != '-1'){
                console.log("Hay un tamalero cerca ");
           /*
            var notification = navigator.mozNotification.createNotification("Tamalerta", 'Hay un tamalero cerca de ti.');
            notification.show();
            console.log("Empezar Canción");
            myAudio.play();
            console.log("Canción comenzada");
            localStorage.setItem('tamalero_cerca', 1);*/

        }
    }// for
}// buscarTamalerosCerca

//Registro de usuarios
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
                    var msj = $('#registroExitoso').modal('show');
                    //window.location.replace('login.html');
                }else{
                    console.log(response);
                    var msj = $('#notificacionError').modal('show');
                    document.getElementById('password').value="";
                }
            }
            );
    });
}//Fin de Register


function buscarPedidos(){
    console.log("***Función Buscar Pedidos***");
    $.ajax({
        url: 'http://nextlab.org/tamal-app/v1/pedidos',
        headers:{ 'X-Authorization' : localStorage.getItem('key') },
        success: function(response) {
            console.log("Success: "+response.message+"\n ***");
            solicitudDePedido();
            //dameInfoPedido(id);
            //console.log("******");
        },
        error: function(response){
            console.log("Error: "+response.message);
        }
    });

}

function dameInfoPedido(id){

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
                        console.log("Success: "+response.message);

                    },
                    error: function(response){
                        console.log("Error: "+response.message);
                    }
                });
            }
            req.onerror = function(e) {
                console.log("Error registering the endpoint: " + JSON.stringify(e));
                location.reload();
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
                //console.log("endpoint Registrado  "+key);

                $.ajax({
                    type: 'POST',
                    url: 'http://nextlab.org/tamal-app/v1/endpoint',
                    headers:{ 'X-Authorization' : key },
                    data: {
                        endpoint: endpoint
                    },
                    success: function(response) {
                        console.log("Success: "+response.message + " <- post endpoint");
                        console.log(response);
                        pushHandler();

                    },
                    error: function(response){
                        console.log("Error: "+response.message);
                    }
                });
            }
            req.onerror = function(e) {
                console.log("Error registering the endpoint: " + JSON.stringify(e));
                registrarEndpoint();
            }
        } else {
            // Register for a new endpoint.
            var register = navigator.push.register();
            register.onsuccess = function(e) {
                console.log("Registered new endpoint", register.result);
            }
        }

        //pushHandler();
    }
}// registrarEndpoint


function pushHandler(){
    console.log('pushHandler');
    if (window.navigator.mozSetMessageHandler) {
        window.navigator.mozSetMessageHandler('push', function(e) {
            buscarPedidos();
            
            // pedir pedidos
            // ws /pedidos

            // aceptar pedido
            // ws /pedido/aceptar
            // manda id pedido
            // ws /pedido/cancelar
            // ws /pedido/entregar


            console.log('My endpoint is ' + e.pushEndpoint);
            console.log('My new version is ' +  e.version);

            //Remember that you can handle here if you have more than
            //one pushEndpoint
        });
    } else {
        console.log('No message handler');
    }
}

function activarTamalerta(){
    $('.checkbox_tamalerta input').on('click', function(){
        var radio;
        if( $(this).prop('checked') ){
            radio = $('#radio-tamalerta option:selected').attr('value');
            $('form').removeClass('hidden');
            $('.checkbox_tamalerta input').prop('checked', true);
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

//*********************

// Push notification después de haber hecho el pedido al tamalero.
function registrarEndpointUsuario(){
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
                        console.log("Success: "+response.message);
                        pushHandlerUsuario();

                    },
                    error: function(response){
                        console.log("Error: "+response.message);
                    }
                });
            }
            req.onerror = function(e) {
                console.log("Error registering the endpoint: " + JSON.stringify(e));
                location.reload();
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
                //console.log("endpoint Registrado  "+key);

                $.ajax({
                    type: 'POST',
                    url: 'http://nextlab.org/tamal-app/v1/endpoint',
                    headers:{ 'X-Authorization' : key },
                    data: {
                        endpoint: endpoint
                    },
                    success: function(response) {
                        console.log("Success: "+response.message + " <- post endpoint");
                        console.log(response);
                        pushHandlerUsuario();

                    },
                    error: function(response){
                        console.log("Error: "+response.message);
                    }
                });
            }
            req.onerror = function(e) {
                console.log("Error registering the endpoint: " + JSON.stringify(e));
                registrarEndpointUsuario();
            }
        } else {
            // Register for a new endpoint.
            var register = navigator.push.register();
            register.onsuccess = function(e) {
                console.log("Registered new endpoint", register.result);
            }
        }
    }
}// registrarEndpointUsuario




function pushHandlerUsuario(){
    console.log('pushHandlerUsuario');
    //$('#buscandoTamalero').modal('show');

    if (window.navigator.mozSetMessageHandler) {
        window.navigator.mozSetMessageHandler('push', function(e) {
            pedidoEnCamino();

            // pedir pedidos
            // ws /pedidos

            // aceptar pedido
            // ws /pedido/aceptar
            // manda id pedido
            // ws /pedido/cancelar
            // ws /pedido/entregar


            console.log('My User endpoint is ' + e.pushEndpoint);
            console.log('My User new version is ' +  e.version);

            //Remember that you can handle here if you have more than
            //one pushEndpoint
        });
    } else {
        console.log('No message handler');
    }
} //pushHandlerUsuario












//***************************









function setPerfil(nombre, email){
    $('#nombre').text(nombre);
    $('#email').text(email);
}

function setTamalertaPerfil(radio){
    radio = 3000;

    if(radio != '-1'){
        // activar boton de ON y poner como seleccionado
        // la "option" del "select" que tenga value=radio
        $('form').removeClass('hidden');
        $('.checkbox_tamalerta input').prop('checked', true);
        $('form select option[value="'+ radio +'"]').attr('selected','selected');
    } else {
        $('.checkbox_tamalerta input').prop('checked', false);
        $('form').addClass('hidden');
    }
}

//Función para sumar y actualizar los valores.
function suma(){

    $('#tablaDulce').find('.eliminar').find('.jsSumar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaDulce').find('.cantidad').text();
        tmp++;
        console.log("Sumar Dulce "+tmp);
        actualizarInventario('6', tmp);
        cargaInventario();

    });

    $('#tablaVerde').find('.eliminar').find('.jsSumar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaVerde').find('.cantidad').text();
        tmp++;
        console.log("Sumar Verde "+tmp);
        actualizarInventario('1', tmp);
        cargaInventario();

    });

    $('#tablaMole').find('.eliminar').find('.jsSumar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaMole').find('.cantidad').text();
        tmp++;
        console.log("Sumar Mole "+tmp);
        actualizarInventario('2', tmp);
        cargaInventario();

    });

    $('#tablaRajas').find('.eliminar').find('.jsSumar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaRajas').find('.cantidad').text();
        tmp++;
        console.log("Sumar Rajas "+tmp);
        actualizarInventario('3', tmp);
        cargaInventario();

    });

    $('#tablaAtole').find('.eliminar').find('.jsSumar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaAtole').find('.cantidad').text();
        tmp++;
        console.log("Sumar Atole "+tmp);
        actualizarInventario('4', tmp);
        cargaInventario();

    });

    $('.eliminar').find('.jsSumar').on('click', function(e){
        e.preventDefault();
        cargaInventario();
    });

}//suma

//Función para restar y actuaizar los valores.
function resta(){

    $('#tablaDulce').find('.eliminar').find('.jsRestar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaDulce').find('.cantidad').text();
        if(tmp>0){
            tmp--;
        }else
        tmp=0;
        console.log("Restar Dulce "+tmp);
        actualizarInventario('6', tmp);
        cargaInventario();

    });

    $('#tablaVerde').find('.eliminar').find('.jsRestar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaVerde').find('.cantidad').text();
        if(tmp>0){
            tmp--;
        }else
        tmp=0;
        console.log("Restar Verde "+tmp);
        actualizarInventario('1', tmp);
        cargaInventario();

    });

    $('#tablaMole').find('.eliminar').find('.jsRestar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaMole').find('.cantidad').text();
        if(tmp>0){
            tmp--;
        }else
        tmp=0;
        console.log("Restar Mole "+tmp);
        actualizarInventario('2', tmp);
        cargaInventario();

    });

    $('#tablaRajas').find('.eliminar').find('.jsRestar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaRajas').find('.cantidad').text();
        if(tmp>0){
            tmp--;
        }else
        tmp=0;
        console.log("Restar Rajas "+tmp);
        actualizarInventario('3', tmp);
        cargaInventario();

    });

    $('#tablaAtole').find('.eliminar').find('.jsRestar').on('click', function(e){
        e.preventDefault();
        var tmp=$('#tablaAtole').find('.cantidad').text();
        if(tmp>0){
            tmp--;
        }else
        tmp=0;
        console.log("Restar Atole "+tmp);
        actualizarInventario('4', tmp);
        cargaInventario();

    });

    $('.eliminar').find('.jsRestar').on('click', function(e){
        e.preventDefault();
        cargaInventario();
    });

}//resta



//Función para actualizar el inventario con botones de +/-
function actualizarInventario(id, cantidad){
    console.log("actualizando inventario");
    $('#actualizandoInventario').modal('show');
    console.log("modal");
    $.ajax({
        type: 'POST',
        url: 'http://nextlab.org/tamal-app/v1/inventario',
        headers:{ 'X-Authorization' : localStorage.getItem('key') },
        data: {
            id_tamal: id,
            cantidad: cantidad
        },
        success: function(response) {
            console.log(response.message);
            $('#actualizandoInventario').modal('hide');
        },
        error: function(response){
            $('#actualizandoInventario').find('myModalLabel').text("Error, intenta nuevamente");

        }
    });
}

//Loguear
function recordarUsuario(){
    console.log(localStorage.getItem("key"));
    console.log(localStorage.getItem("radio"));
    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("pedido"));
    console.log(localStorage.getItem("rol", "usuario"));
    console.log(localStorage.getItem('tamalero_cerca'));
    var tmp=localStorage.getItem("key");
    if(localStorage.getItem("key")!=null){
        if (localStorage.getItem("rol")=="usuario") {
            window.location.replace('index.html');
            localStorage.setItem("pedido", '0');
        }else if (localStorage.getItem("rol")=="tamalero") {
            window.location.replace('tamalero-inventario.html');
        }
    }
}








/*********************
BORRAR DESPUES DEL DEMO
**********************/
/*
function tamalertaEmergencia(){
    console.log("tamalertaEmergencia");
    $.ajax({
        headers:{ 'X-Authorization' : localStorage.getItem('key')},
        url: 'http://nextlab.org/tamal-app/v1/alerta',
        success: function(response) {
            console.log(response);
            if(response.message == 1){
                var bodee = document.getElementById('audioContainer');
                removeAllChilds('audioContainer');
                var myAudio = bodee.appendChild(document.createElement('audio'));
                myAudio.setAttribute('src','audio/tamales.mp3');
                myAudio.setAttribute('id', 'mus');
                myAudio.play();
                $('#tamalertaEmergencia').modal('show');
            }
        },
        error: function(response){
            //console.log(response);
            console.log("Response de error  - tamalertaEmergencia");
        }
    });
}//borrar demo

function activarTamalertaEmergencia(){
    setInterval(function(){tamalertaEmergencia();}, 15000);
}

*/