function qs(element) {
    return document.querySelector(element);
  }
  
  window.addEventListener("load", function () {
    let $email = qs("#email"),
      $emailErrors = qs("#emailErrors"),
      $telefono = qs("#telefono"),  
      $telefonoerrors = qs("#telefonoerrores"),
      $mensaje = qs("#mensaje"),
      $mensajeerrors= qs("#mensajeerrors"),
      $form = qs("#form"),
      $formerrors = qs("#formerrors"),
      regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
      regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      regExTelefono = /^\d{7,14}$/;
  
  
  $email.addEventListener('blur', function() {
      switch (true) {
          case !$email.value.trim():
              $emailErrors.innerHTML = 'El campo email es obligatorio';
              $email.classList.add('is-invalid')
              break;
          case !regExEmail.test($email.value):
              $emailErrors.innerHTML = 'Debe ingresar un email válido';
              $email.classList.add('is-invalid')
              break
          default:
              $email.classList.remove('is-invalid');
              $email.classList.add('is-valid');
              $emailErrors.innerHTML = ''
              break;
      }
  })
  $telefono.addEventListener('blur', function() {
    switch (true) {
        case !regExTelefono.value.trim():
            $telefonoerrors.innerHTML = 'El campo telefono es obligatorio';
            $telefono.classList.add('is-invalid')
            break;
        case !regExTelefono.test($telefono.value):
            $telefonoerrors.innerHTML = 'Debe ingresar un telefono válido';
            $telefono.classList.add('is-invalid')
            break
        default:
            $telefono.classList.remove('is-invalid');
            $telefono.classList.add('is-valid');
            $telefonoerrors.innerHTML = ''
            break;
    }

   })
   $mensaje.addEventListener("blur", function () {
    switch (true) {
      case !$mensaje.value.trim():
        $mensajeerrors.innerHTML = "El campo mensaje es obligatorio";
        $mensaje.classList.add("is-invalid");
        break;
      case !regExAlpha.test($inputName.value):
        $mensajeerrors.innerHTML = "Debes ingresar un mensaje válido";
        $mensaje.classList.add("is-invalid");
        break;
      default:
        $mensaje.classList.remove("is-invalid");
        $mensaje.classList.add("is-valid");
        $mensajeerrors.innerHTML = "";
        break;
    }
  })

  
  $form.addEventListener('submit',function(event){
      let error = false;
      event.preventDefault()
      console.log($form.elements)
      let elementosForm = $form.elements
      
      for (let index = 0; index < elementosForm.length-1; index++) {
          if(elementosForm[index].value == "" && elementosForm[index].name != 'website' && elementosForm[index].name != 'assunto' && elementosForm[index].name != 'nombre'){
              
              elementosForm[index].style.border = '1px solid red';
              $formerrors.innerHTML = "Los campos señalados son obligatorios";
              error = true;
          }
      }
      if(!error){
           $form.submit()
        }
  
  })
  
 
  
 
  
  
  
  
  
  });