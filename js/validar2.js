function validarFormulario(){

    let txtgerente = document.getElementById('gerente').value;
    let txtDomicilio = document.getElementById('domicilio').value;
    let txtEmail= document.getElementById('email').value;
    let txttelefono = document.getElementById('telefono').value;
    

    if(txtgerente == null || txtgerente.length == 0 || /^\s+S/.test(txtgerente)){
        alert("Error: El campo Gerente no debe ir vacio o lleno de solamente espacios en blanco");
        return false;
     }

    if(txtDomicilio == null || txtDomicilio.length == 0 || /^\s+S/.test(txtDomicilio)){
        alert('Error: El campo Domicilio no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
    }
         
    if(txtEmail == null || txtEmail.length == 0 || /^\s+S/.test(txtEmail)){
        alert("Error: El campo Email no debe ir vacio o lleno de solamente espacios en blanco");
        return false;
    }
         
    if(txttelefono == null || txttelefono.length == 0 || /^\s+S/.test(txttelefono)){
        alert("Error: El campo Teléfono no debe ir vacio o lleno de solamente espacios en blanco");
        return false;
    }

    return true;
    }
       