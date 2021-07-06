const validate = (firstname, lastname, email, password, cf_password) => {
    if(!firstname || !lastname || !email || !password)
     return "Please fill all fields";

     if(!validateEmail(email))
     return "Invalid email";

     if(!validatePassword(password))
     return "Password must be at least 8 characters";

     if(password !== cf_password)
     return "Password doesn't match"
}

function validateEmail(email){
   const reg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?(\.[a-z]{2,8})?$/
   return reg.test(email)
};

function validatePassword(password){
    const reg = /^[\w@-]{8,20}$/
    return reg.test(password)
}


export default validate;