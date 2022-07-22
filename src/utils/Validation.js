const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  return email && !email.match(emailRegular)
    ? setEmailError("Email no válido")
    : setEmailError("");
};

const validateName = ({ name, setNameError }) => {
  return name && name.length < 5
    ? setNameError("El nombre es muy corto")
    : name && name.length > 25
    ? setNameError("El nombre es muy largo")
    : setNameError("");
};

const validateMsg = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError("El mensaje muy corto")
    : message && message.length > 30
    ? setMessageError("El mensaje es muy largo")
    : setMessageError("");
};

export { validateEmail, validateName, validateMsg };
