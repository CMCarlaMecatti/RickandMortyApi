const validation= (userData) => {
    const errors= {};
    if(!/\S+@\S+\.\S+/.test(userData.email)){
       errors.email= "El email es invalido."
      }
    if(!userData.email){
        errors.email= "El nombre de usuario no puede estar vacio."
    }
    if(userData.email.length> 35) {
        errors.email= "El nombre de usuario a superado el maximo de carateres permitidos."
    }
    if(!/^(?=.*\d).+$/.test(userData.password)){
        errors.password= "La contraseña debe tener al menos un número."
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password= "La contraseña debe tener un tamaño entre 6 y 10 caracteres."
    }

    return errors;
}

export default validation