function qs(element) {
    return document.querySelector(element);
  }
  
  window.addEventListener("load", function () {
    let $inputName = qs("#nameinput"),
      $nameErrors = qs("#nameErrors"),
      $inputLastname = qs("#lastnameinput"),
      $lastnameErrors = qs("#lastnameerrors"),
      $form = qs("#form"),
      $formerrors = qs("#formerrors"),
      $email = qs("#email"),
      $emailErrors = qs("#emailErrors"),
      $file = qs("#files"),
      $fileErrors = qs("#fileserrors"),
      $imgPreview = qs("#img-preview"),
      regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
      regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
  
    $inputName.addEventListener("blur", function () {
      switch (true) {
        case !$inputName.value.trim():
          $nameErrors.innerHTML = "El campo nombre es obligatorio";
          $inputName.classList.add("is-invalid");
          break;
        case !regExAlpha.test($inputName.value):
          $nameErrors.innerHTML = "Debes ingresar un nombre válido";
          $inputName.classList.add("is-invalid");
          break;
        default:
          $inputName.classList.remove("is-invalid");
          $inputName.classList.add("is-valid");
          $nameErrors.innerHTML = "";
          break;
      }
    });
  
    $inputLastname.addEventListener("blur", function () {
        switch (true) {
        case !$inputLastname.value.trim():
          $lastnameErrors.innerHTML = "El campo apellido es obligatorio";
          $inputLastname.classList.add("is-invalid");
          break;
        case !regExAlpha.test($inputLastname.value):
          $lastnameErrors.innerHTML = "Debes ingresar un apellido válido";
          $inputLastname.classList.add("is-invalid");
          break;
        default:
          $inputLastname.classList.remove("is-invalid");
          $inputLastname.classList.add("is-valid");
          $lastnameErrors.innerHTML = "";
          break;
      }
    });
  
   
  
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
  
  $form.addEventListener('submit',function(event){
      let error = false;
      event.preventDefault()
      console.log($form.elements)
      let elementosForm = $form.elements
      
      for (let index = 0; index < elementosForm.length-1; index++) {
          if(elementosForm[index].value == "" && elementosForm[index].name != 'province' && elementosForm[index].name != 'city' && elementosForm[index].name != 'phone' && elementosForm[index].name != 'postalCode' && elementosForm[index].name != 'street' && elementosForm[index].name != 'flat_apartment' && elementosForm[index].name != 'number' && elementosForm[index].name != 'avatar' && elementosForm[index].name != 'outputList'){
              
              elementosForm[index].style.border = '1px solid red';
              $formerrors.innerHTML = "Los campos señalados son obligatorios";
              error = true;
          }
      }
      if(!error){
           $form.submit()
        }
  
  })
  
  $file.addEventListener('change', 
      function fileValidation(){
          let filePath = $file.value, //Capturo el valor del input
              allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
          if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
              $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
              $file.value = '';
              $imgPreview.innerHTML = '';
              return false;
          }else{
              if($file.files && $file.files[0]){
                  let reader = new FileReader();
                  reader.onload = function(e){
                      $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                  };
                  reader.readAsDataURL($file.files[0]);
                  $fileErrors.innerHTML = '';
                  $file.classList.remove('is-invalid')
              }
          }
      })
  
  
  
  
  
  });