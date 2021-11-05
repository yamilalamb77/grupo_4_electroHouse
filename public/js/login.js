/* function qs(element) {
    return document.querySelector(element);
  }
  window.addEventListener("load", function () {
    $email = qs("#email"),
    $emailErrors = qs("#emailErrors"),
    $pass = qs("#pass"),
    $passErrors = qs("#passErrors"),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    
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

$pass.addEventListener('blur', function() {
    switch (true) {
        case !$pass.value.trim():
            $passErrors.innerHTML = 'El campo contraseña es obligatorio';
            $pass.classList.add('is-invalid')
            break;
        case !regExPass.test($pass.value):
            $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            $pass.classList.add('is-invalid')
            break
        default:
            $pass.classList.remove('is-invalid');
            $pass.classList.add('is-valid');
            $passErrors.innerHTML = ''
            break;
    }
})
}) */
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	password: /^.{3,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {
	password: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;		
		case "pass":
			validarCampo(expresiones.password, e.target, 'password');
			
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`.formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`.formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	
	if( campos.password && campos.correo  ){

		
        formulario.submit()
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
     
    }

    
});