const validateRequiredField = (text: string) => {
  if (text && text.trim() !== "") {
    return "";
  } else {
    return "Field is required";
  }
};

export default validateRequiredField;
