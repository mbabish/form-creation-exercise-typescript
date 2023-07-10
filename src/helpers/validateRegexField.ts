const validateRegexField = (text: string, regex: string, example: string) => {

  var regexValidator = new RegExp(regex);

  if (text && regexValidator.test(text)) {
    return "";
  } else {
    return "Field must match " + example;
  }
};

export default validateRegexField;
