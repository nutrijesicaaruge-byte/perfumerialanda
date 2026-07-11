function validarFormulario(){

    let txtNombre = document.getElementById('razon').value;
    let txtFecha = document.getElementById('fecha').value;
    let txtDomicilio = document.getElementById('domicilio').value;
    let txtEstado = document.getElementById('estado').value;
    let txtCodpostal = document.getElementById('cp').value;
    let txtEmailGte= document.getElementById('email').value;
    let txtResponsable = document.getElementById('responsable').value;
    let txtRegistro = document.getElementById('registro').value;
    let txtObservaciones = document.getElementById('observaciones').value;

    if(txtNombre == null || txtNombre.length == 0 || /^\s+S/.test(txtNombre)){
        alert('Error: El campo Razon Social no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
        }

    if(txtFecha == null || txtFecha.length == 0 || /^\s+S/.test(txtFecha)){
        alert('Error: El campo Fecha no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
        }

    if(txtDomicilio == null || txtDomicilio.length == 0 || /^\s+S/.test(txtDomicilio)){
        alert('Error: El campo Domicilio no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
       }

    if(txtEstado == null || txtEstado.length == 0 || /^\s+S/.test(txtEstado)){
        alert('Error: El campo Estado/Provincia no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
       }

    if(txtCodpostal == null || txtCodpostal.length == 0 || /^\s+S/.test(txtCodpostal)){
        alert('Error: El campo Codigo Postal no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
       }

    if(txtEmailGte == null || txtEmailGte.length == 0 || /^\s+S/.test(txtEmailGte)){
        alert('Error: El campo Email Gerente no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
      }

    if(txtResponsable == null || txtResponsable.length == 0 || /^\s+S/.test(txtResponsable)){
        alert('Error: El campo Responsable/Gerente no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
      }

    if(txtRegistro == null || txtRegistro.length == 0 || /^\s+S/.test(txtRegistro)){
        alert('Error: El campo Nro. Registro comercial no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
      }

    if(txtObservaciones == null || txtObservaciones.length == 0 || /^\s+S/.test(txtObservaciones)){
        alert('Error: El campo Observaciones no debe ir vacio o lleno de solamente espacios en blanco');
        return false;
      }
      
    return true;
    } 