function validateForm(evento){
    var nombre=document.getElementById("name").value;
    var apellido=document.getElementById("lastname").value;
    var correo=document.getElementById("input-email").value;
    var contrasenia=document.getElementById("input-password").value;
    
/* ----------------------------------------- campo obligatorio -- */
    if (nombre.length == 0 || apellido.length == 0 || correo.length == 0 || contrasenia.length == 0) {
		var mensaje_uno=document.createElement("span");
        mensaje_uno.innerText="Falta llenar datos";
        document.getElementsByClassName("input-box")[0].appendChild(mensaje_uno);
	}
    else {
        var borrar=document.getElementsByClassName("input-box")[0];
        borrar.lastChild.style.display="none";
        
/* ---------------------------------------- validar solo texto -- */
/* -------------------------------- primera letra en mayuscula -- */
/* ---------------------------------------------------- nombre -- */
        if ( /^[a-z]/.test(nombre.charAt(0))) {
            var mensaje_dos=document.createElement("span");
            mensaje_dos.innerText="Su nombre debe comenzar con una mayúscula";
            document.getElementsByClassName("input-box")[0].appendChild(mensaje_dos);
		}
        else if ( /[0-9]/.test(nombre)) {
            var mensaje_tres=document.createElement("span");
            mensaje_tres.innerText="En el campo nombre no se permiten números";
            document.getElementsByClassName("input-box")[0].appendChild(mensaje_tres);
        }
        
/* -------------------------------------------------- apellido -- */
        if ( /^[a-z]/.test(apellido.charAt(0))) {
            var ape_dos=document.createElement("span");
            ape_dos.innerText="Su apellido debe comenzar con una mayúscula";
            document.getElementsByClassName("input-box")[1].appendChild(ape_dos);
		}
        else if ( /[0-9]/.test(apellido)) {
            var ape_tres=document.createElement("span");
            ape_tres.innerText="En apellido no se permiten números";
            document.getElementsByClassName("input-box")[1].appendChild(ape_tres);
		}
    
/* ------------------------------------------ formato de email -- */
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(correo) ){
            var mail_uno=document.createElement("span");
            mail_uno.innerText="La dirección de correo " + correo + " es incorrecta";
            document.getElementsByClassName("input-box")[2].appendChild(mail_uno);
        }
/* ---------------------------------------- formato contraseña -- */
        if (contrasenia.length < 6){
            var contra_uno=document.createElement("span");
            contra_uno.innerText="La contraseña debe tener 6 caracteres como mínimo";
            document.getElementsByClassName("input-box")[3].appendChild(contra_uno);
		}
		else if (contrasenia == "123456" || contrasenia == "098754" || contrasenia == "password") {
            var contra_dos=document.createElement("span");
            contra_dos.innerText="No se permiten '123456', '098754' y 'password' como contraseñas";
            document.getElementsByClassName("input-box")[3].appendChild(contra_dos);
		}
/* ----------------------------------------- seleccion de bici -- */
        if (document.getElementsByTagName("select")[0].value == 0){
            var selec_uno=document.createElement("span");
            selec_uno.innerText="Selecciona tu tipo de bicicleta";
            document.getElementsByClassName("input-box")[4].appendChild(selec_uno);
	    }
/* -------------------------------------- desaparecer mensajes -- */        
        else{
            selec_uno.style.display="none";
        }
    }
}

