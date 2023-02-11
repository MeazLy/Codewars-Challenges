// Given a string, return the string in camel case form. If the first letter of the string is capitalized, keep it capitalized.
// String will have words separated by either "-" or "_"
// Example: Given ("please-camel_case_me") return pleaseCamelCaseMe

function toCamelCase(str){
    let camelCaseStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '_' || str[i] === '-') {
        i++;
        camelCaseStr += str[i].toUpperCase();
      } else {
        camelCaseStr += str[i];
      }
    }
    return camelCaseStr;
};

toCamelCase("that_is-a_cute-cat") // return thatIsACuteCat