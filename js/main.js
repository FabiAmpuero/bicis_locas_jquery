function validateForm(){
    var name=$("#name");
    var lastName=$("#lastname");
    nombreText();
    apellidoText();
    correoText();
    passwordText();
    selectValid();
    name.addEventListener("keyup",isMayus(name));
    lastName.addEventListener("keyup",isMayus(lastName));
}

function haveNumbers (_value){
    var regex= /[0-9]/g;
    return regex.test(_value);
}
function isComplete (_value){
    if(_value.length==0){
        return true;
    }
}
function createSpan (_value,_menssage){
    _value.parent().append('<span>'+ _menssage +'</span>');
}
function removeSpan (_value){
    _value.parent().remove(_value.nextSibling);
}

function isMayus (_value){
    var array=_value.val().split("");
    var first=array[0];
    var upper=first.toUpperCase();
    var space = false;
    
    for(var i=1; i<array.length; i++) {
            if(space){
                upper += array[i].toUpperCase();
                space = false;
            } else {
                upper += array[i].toLowerCase();
                if(array[i] == " ")
                    space = true;
            }
        _value.val() = upper;
    }
}

function nombreText (){
	var name=$("#name");
    
    if(name.next() == null){
        if(isComplete(name.val()) || haveNumbers(name.val())){
            createSpan(name,"Nombre inválido");
        }       
    } else{
        if(name.next() != null){
            if(!isComplete(name.val()) && !haveNumbers(name.val())){
                removeSpan(name);
            }
        }
    }
}

function apellidoText (){
	var lastName=$("#lastname");
    if(lastName.next() == null){
        if(isComplete(lastName.val()) || haveNumbers(lastName.val())){
            createSpan(lastName,"Apellido inválido");
        }
    } else{
        if(lastName.next()!= null){
            if(!isComplete(lastName.val()) && !haveNumbers(lastName.val())){
                removeSpan(lastName);
            }
        }
    }
}

function correoText (){
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var correo=$("#input-email");
    if(correo.next() == null){
        if(isComplete(correo.val()) || regex.test(correo.val())==false){
            createSpan(correo,"Correo inválido");
        }
    } else{
        if(correo.next() != null){
            if(!isComplete(correo.val()) && regex.test(correo.val())==true){
                removeSpan(correo);
            }
        }
    }
}

function passwordText (){
    var password=$("#input-password");
    if(password.next()==null){
        if(password.val()=="123456" || password.val()=="098754" || password.val().length<6){
            createSpan(password,"Esta Contraseña no es válida");
        }
    } else{
        if(password.next() != null){
            if(password.val().length>=6 && password.val()!="123456" && password.val()!="098754"){
                removeSpan(password);
            }
        }
    }
}

function selectValid (){
    var select=$("#select");
    if(select.next() == null){
        if(select.val()==0){
            createSpan(select,"Seleccione una bicicleta");
        }       
    } else{
        if(select.next() != null){
            if(select.val() != 0){
                select.parent().removeChild(select.nextSibling);
            }
        }
    }
}