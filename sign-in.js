

const username = document.getElementById("inputUsername");
const mail = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");






function crearUser() {
    const boton = document.getElementById("btn-enviar");
    const resultado = document.querySelector(".resultado");
    boton.addEventListener('click', (event) => {
        
        event.preventDefault();
        let error = validarCampos();
        if (error[0]) {
            resultado.innerHTML = error[1]
            resultado.classList.add("red")
            } else {
                resultado.innerHTML = "Solicitud enviada correctamente";
                resultado.classList.add("green")
                resultado.classList.remove("red")
                
            }

    });
}


const validarCampos = ()=>{
    let error = [];

    if (mail.value.length < 5 || 
        mail.value.length > 40 || 
        mail.value.indexOf("@") == -1 ||
        mail.value.indexOf(".") == -1 ) {
            error[0] = true;
            error[1] = "El mail es inválido";

    } else if (username.value.length < 5) {
        error[0] = true;
        error[1] = "El nombre de usuario no puede contener menos de 5 caracteres";
        
    } else if (username.value.lenght > 40) {
        error[0] = true;
        error[1] = "El nombre de usuario no puede contener más de 40 caracteres";
       
    } else if (password.value.length < 8) {
        error[0] = true;
        error[1] = "La clave no puede contener menos de 8 caracteres";
    } else {
        error[0] = false;
    }
    return error
    
}


crearUser()

