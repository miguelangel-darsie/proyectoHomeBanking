//Declaración de variables

    var nombreUsuario = "Miguel Angel";
    var saldoCuenta = 24000;
    var limiteExtraccion = 3000;
    var montoIngresado;
    var codigo = 1234;
    var codigoingresado;
    var pagoAgua = 350;
    var pagoTelefono = 425;
    var pagoLuz = 210;
    var pagoInternet = 570;
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;
    
    

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion(); 
}

//Funciones Básicas.
function sumarDinero(montoIngresado) {
    
    nuevoSaldo = (montoIngresado+saldoCuenta);
    console.log(nuevoSaldo);
    return (saldoCuenta = nuevoSaldo); 
    
    }

function restarDinero(montoIngresado) {
    
    nuevoSaldo = (saldoCuenta-montoIngresado);
    console.log(nuevoSaldo);
    return (saldoCuenta=nuevoSaldo);
} 

/*function validar(dato) {
    

    if (montoIngresado === null){
        return;
    }
    montoIngresado = parseInt(montoIngresado);

    if (isNaN(montoIngresado)) {
        alert("Dato no válido, por favor ingrese un número.")
        return;
    }

    if (montoIngresado <=0){
        alert("El monto a extraer no puede ser cero o negativo.")
        return; 
    }
}*/




//Funciones que tenes que completar.

function cambiarLimiteDeExtraccion(nuevoLimite) {
    nuevoLimite = prompt("Ingrese su nuevo límite");
    if (nuevoLimite === null){
        return;
    }
    nuevoLimite = parseInt(nuevoLimite);

    if (isNaN(nuevoLimite)) {
        alert("Dato no válido, por favor ingrese un número.")
        return;
    }

    if (nuevoLimite <=0){
        alert("Su límite de extracción no puede ser cero o negativo.")
        return; 
    }

    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla(limiteExtraccion);
    console.log(limiteExtraccion);
    alert("Su nuevo límite de extracción es de $ "+limiteExtraccion+".");
    

}

function extraerDinero(montoIngresado) {

    montoIngresado = prompt("Ingrese cantidad a extraer");

    if (montoIngresado === null){
        return;
    }
    montoIngresado = parseInt(montoIngresado);

    if (isNaN(montoIngresado)) {
        alert("Dato no válido, por favor ingrese un número.")
        return;
    }

    if (montoIngresado <=0){
        alert("El monto a extraer no puede ser cero o negativo.")
        return; 
    }
    
    if (montoIngresado<=saldoCuenta && montoIngresado<=limiteExtraccion && montoIngresado % 100 === 0) {
        saldoPrevio = saldoCuenta;
        nuevoSaldo = restarDinero(montoIngresado);
        alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted retiró $ "+montoIngresado+"."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
        actualizarSaldoEnPantalla(saldoCuenta);} 
    else if (montoIngresado>saldoCuenta) {
        alert("No hay saldo disponible para extraer esa cantidad de dinero.")
    } 
    else if (montoIngresado>limiteExtraccion){
        alert("Has excedido tu límite de extracción, por favor intente nuevamente.")    
    }
    else if (montoIngresado % 100 !== 0) {
        alert("Sólo se pueden extraer billetes de $100.")    
    }


}

function depositarDinero(montoIngresado) {

    montoIngresado = prompt("Ingrese cantidad a depositar");

    if (montoIngresado === null){
        return;
    }
    montoIngresado = parseInt(montoIngresado);

    if (isNaN(montoIngresado)) {
        alert("Dato no válido, por favor ingrese un número.")
        return;
    }

    if (montoIngresado <=0){
        alert("El monto a depositar no puede ser cero o negativo.")
        return; 
    }

    saldoPrevio = saldoCuenta;
    nuevoSaldo = sumarDinero(montoIngresado);
    alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted depositó $ "+montoIngresado+"."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
    actualizarSaldoEnPantalla(saldoCuenta);
    
    

}

function pagarServicio(servicio) {
    servicio = prompt("Ingrese el número correspondiente de lo que quiere pagar"+"\n"+"1.Agua"+"\n"+"2.Teléfono"+"\n"+"3.Luz"+"\n"+"4.Internet")
        if (servicio === null) {
            return;
        }
        
        servicio = parseInt(servicio);

        if (isNaN(servicio)){
            alert("Dato no válido, por favor ingrese un número.")
            return;
        }

        switch(servicio){
        case 1:
            montoIngresado=pagoAgua;
            
            if (montoIngresado<=saldoCuenta){
                saldoPrevio = saldoCuenta;
                nuevoSaldo = restarDinero(montoIngresado);
                alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted pagó $ "+montoIngresado+" en concepto de Agua."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
                actualizarSaldoEnPantalla(saldoCuenta);

                } 
            else if (montoIngresado>saldoCuenta){
                alert("El saldo disponible no es suficiente para pagar el servicio seleccionado.")
                }
            break;

        case 2:
            montoIngresado=pagoTelefono;
            if (montoIngresado<=saldoCuenta){
                saldoPrevio = saldoCuenta;
                nuevoSaldo = restarDinero(montoIngresado);
                alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted pagó $ "+montoIngresado+" en concepto de Teléfono."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
                actualizarSaldoEnPantalla(saldoCuenta);

            }
            else if (montoIngresado>saldoCuenta){
                alert("El saldo disponible no es suficiente para pagar el servicio seleccionado.")
                }
            break;
        
        case 3:
            montoIngresado=pagoLuz;
            if (montoIngresado<=saldoCuenta){
                saldoPrevio = saldoCuenta;
                nuevoSaldo = restarDinero(montoIngresado);
                alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted pagó $ "+montoIngresado+" en concepto de Luz."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
                actualizarSaldoEnPantalla(saldoCuenta);

            }
            else if (montoIngresado>saldoCuenta){
                alert("El saldo disponible no es suficiente para pagar el servicio seleccionado.")
                }
            break;
                
        case 4:
            montoIngresado=pagoInternet;
            if (montoIngresado<=saldoCuenta){
                saldoPrevio = saldoCuenta;
                nuevoSaldo = restarDinero(montoIngresado);
                alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted pagó $ "+montoIngresado+" en concepto de Internet."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
                actualizarSaldoEnPantalla(saldoCuenta);

            }
            else if (montoIngresado>saldoCuenta){
                alert("El saldo disponible no es suficiente para pagar el servicio seleccionado.")
                }
            break;

            default: 
                alert("La selección no tiene un servicio asociado, intente nuevamente.")

            }
        
         

        }
    

function transferirDinero(montoIngresado) {
    montoIngresado = prompt("Ingrese el monto a transferir");

    if (montoIngresado === null){
        return;
    }
    montoIngresado = parseInt(montoIngresado);

    if (isNaN(montoIngresado)) {
        alert("Dato no válido, por favor ingrese un número.")
        return;
    }

    if (montoIngresado <=0){
        alert("El monto a transferir no puede ser cero o negativo.")
        return; 
    }

    if (montoIngresado<=saldoCuenta) {

        cuenta = prompt("Ingrese el número de cuenta a la cual desea transferir")
        cuenta = parseInt(cuenta);
        switch(cuenta) {

            case 1234567:
            saldoPrevio = saldoCuenta;
            nuevoSaldo = restarDinero(montoIngresado);
            alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted transfirió $ "+montoIngresado+" a la cuenta "+cuentaAmiga1+"."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
            actualizarSaldoEnPantalla(saldoCuenta);
            break;

            case 7654321:
            saldoPrevio = saldoCuenta;
            nuevoSaldo = restarDinero(montoIngresado);
            alert("Su saldo era $ "+saldoPrevio+"."+"\n"+"Usted transfirió $ "+montoIngresado+" a la cuenta "+cuentaAmiga2+"."+"\n"+ "Su nuevo saldo es $ "+nuevoSaldo)
            actualizarSaldoEnPantalla(saldoCuenta);
            break;

            default: 
            alert("Sólo se puede transferir a Cuentas Amigas.")
            } 
            

            }

    else if (montoIngresado>saldoCuenta){
        alert("El saldo disponible es menor a lo que desea transferir. La transacción no puede ser completada.")
    }
    }
     



function iniciarSesion(codigoingresado) {
    codigoingresado = prompt("Ingrese su código de 4 digitos")
    if (codigoingresado === null) {
        return;
    }
    //el problema es porque debemos validar los caracteres y no un número. es mejor validar el string antes que números parseInteados

    codigoingresado = parseInt(codigoingresado);
    if (isNaN(codigoingresado)) {
        alert("Dato no válido, por favor ingrese un número.")
        return;
    }

    if (codigo === codigoingresado){
        alert("Bienvenido "+nombreUsuario+" ya puedes comenzar a realizar operaciones.")
    } 
    
    else {
        montoIngresado = saldoCuenta;
        restarDinero(montoIngresado);
        console.log(saldoCuenta);
        alert("Código incorrecto, su dinero ha sido retenido por el banco por cuestiones de seguridad");
        actualizarSaldoEnPantalla(saldoCuenta);

    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



    
