

const LoginValidation = (values) => {


  let error = {}
  const username_pattern = /^.{4,}$/
  const password_pattern = /^.{4,}$/


  if (values.username === "") {
    error.username = "Name should not be empty";
  } else if (!username_pattern.test(values.username)) {
    error.username = "Username didn't match";
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

export default LoginValidation