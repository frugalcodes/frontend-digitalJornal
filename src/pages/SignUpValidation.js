

const SignUpValidation = (values) => {

    let error = {}
    const username_pattern = /^.{4,}$/
    const password_pattern = /^.{4,}$/
  
    
    if (values.username === "") {
      error.username = "Name should not be empty";
    } else if (!username_pattern.test(values.username)) {
      error.username = "Username should be at least 4 characters long";
    } else {
      error.username = "";
    }
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password didn't match";
    } else {
      error.password = "";
    }
    return error;


}

export default SignUpValidation