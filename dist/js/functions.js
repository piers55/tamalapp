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
    });
    function cerrarSesion(){
        $('.navbar-mobile ul li:last-child a').on('click', function(e){
            e.preventDefault();

            if(localStorage.getItem('rol') == 'tamalero'){
                console.log('loggin out');
                console.log(localStorage.getItem('key'));
                console.log(localStorage.getItem('id'));
                $.ajax({
                    type: 'POST',
                    headers:{ 'X-Authorization' : localStorage.getItem('key')},
                    url: 'http://nextlab.org/tamal-app/v1/tamalero/logout',
                    success: function(response) {
                        console.log(response);
                    },
                    error: function(response){
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
                if (caso==1 && dulce>0) {
                    dulce--;
                }else if (caso==2) {
                    dulce++;
                }

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

                case "tablaAtole":
                if (caso==1 && atole>0) atole--;
                else if (caso==2) atole++;
                break;

            }
            visualizar();
        }

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
        center : userLatLng, //disableDefaultUI: true
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
                //Redirije al index.html y le manda la instrucción de que se realizó un pedido
                localStorage.setItem('pedido', 1);
                window.location.replace('index.html');
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
}// damePedido

function dameInventarioTamalero(id_tamalero){
    console.log('consiguiendo inventarios');
    $.ajax({
        url: 'http://nextlab.org/tamal-app/v1/tamaleros/'+id_tamalero,
        headers:{ 'X-Authorization' : localStorage.getItem('key')},
        success: function(response) {

            // cuando regrewse algo, actualizar inventario en modal
                $('#tablaDulce').hide();
                $('#tablaVerde').hide();
                $('#tablaMole').hide();
                $('#tablaOaxaqueno').hide();
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

                    case "Oaxaqueño":
                        $('#tablaOaxaqueno').show();
                        $('#oaxaquenoCantidad').text(tamales.cantidad);
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

        },
        error: function(response){
            return -1;
        }
    });
}// cargaInventario


function hayPedido(){
    var hayPedido = localStorage.getItem('pedido');
    if ( hayPedido == 1 ){
        $('#buscandoTamalero').modal('show');
    }
}

function solicitudDePedido(){
     $('#solicitudDePedido').modal('show');
}

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
                var lat, lon;
                tamalero.push(val.id);
                tamalero.push(val.nombre);
                tamalero.push(val.apellido);
                lat = parseFloat(val.lat);
                lon = parseFloat(val.lon);
                lat = lat.toFixed(3);
                lon = lon.toFixed(3);
                console.log(lat + ',' + lon);
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
        console.log('getting pos tamalero');
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
    console.log(lat);
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
        console.log(radioTamalerta);
        if(parseInt(distancia) < parseInt(radioTamalerta) && radioTamalerta != '-1'){
            var notification = navigator.mozNotification.createNotification("Tamalerta", 'Hay un tamalero cerca de ti.');
            notification.show();
            console.log("Empezar Canción");
            myAudio.play();
            console.log("Canción comenzada");
            localStorage.setItem('tamalero_cerca', 1);
        }
    }// for
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
}

function buscarPedidos(){
    $.ajax({
        url: 'http://nextlab.org/tamal-app/v1/pedidos',
        headers:{ 'X-Authorization' : localStorage.getItem('key') },
        success: function(response) {
            //dameInfoPedido(id);
        },
        error: function(response){
            console.log(response);
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
                });
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
            buscarPedidos();
            // pedir pedidos
            // ws /pedidos

            // aceptar pedido
            // ws /pedido/aceptar
            // manda id pedido
            // ws /pedido/cancelar
            // ws /pedido/entregar


            //console.log('My endpoint is ' + e.pushEndpoint);
            //console.log('My new version is ' +  e.version);

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
        if( $(this).hasClass('on') & ! $(this).hasClass('active') ){
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
    radio = -1;
    if(radio != '-1'){
        console.log('on');
        var botonOn = $('.switch .on');
        var botonOff = $('.switch .off');
        //botonOn.
        // activar boton de ON y poner como seleccionado
        // la "option" del "select" que tenga value=radio
    } else {
        console.log('off');
    }
}
