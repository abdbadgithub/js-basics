const stringSize = (text) => {
  return text.length;
};
const replaceCharacterE = (text) => {
  text = "This t xt has a certain number of characters";
  return text;
};
const concatString = (text1, text2) => {
  var res = text1.concat(text2);
  return res;
};
const showChar5 = (text) => {
  return text.charAt(4);
};
const showChar9 = (text) => {
  var res = text.substring(0, 9);

  return res;
};
const toCapitals = (text) => {
  return text.toUpperCase();
};
const toLowerCase = (text) => {
  return text.toLowerCase();
};
const removeSpaces = (text) => {
  return text.trim();
};
const IsString = (text) => {
  if (typeof text === "string") {
    // this is a string
    return true;
  } else {
    return false;
  }
};

const getExtension = (text) => {
  return text.split(".").pop();
};
const countSpaces = (text) => {
  return text.split(" ").length - 1;
};
const InverseString = (text) => {
  return text.split("").reverse().join("");
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = (num) => {
  return Math.abs(num);
};
const absoluteValueArray = (array) => {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
  }
  return array;
};
const circleSurface = (radius) => {
  return Math.round(Math.PI * radius * radius);
};
const hypothenuse = (ab, ac) => {
  return Math.hypot(ab, ac);
};
const BMI = (weight, height) => {
  var res = weight / Math.pow(height, 2);
  var result = parseFloat(res.toFixed(2));
  alert(result);
  return result;
};

const createLanguagesArray = () => {
  var array = ["Html", "CSS", "Java", "PHP"];
  return array;
};

const createNumbersArray = () => {
  var array = [0, 1, 2, 3, 4, 5];
  return array;
};

const replaceElement = (languages) => {
  languages[2] = "Javascript";
  return languages;
};

const addElement = (languages) => {
  languages.push("Ruby", "Python");
  return languages;
};

const addNumberElement = (numbers) => {
  numbers.unshift(-2, -1);
  return numbers;
};

const removeFirst = (languages) => {
  languages.shift();
  return languages;
};

const removeLast = (languages) => {
  languages.pop();
  return languages;
};

const convertStrToArr = (social_arr) => {
  var array = [];
  array = social_arr.split(",");
  return array;
};

const convertArrToStr = (languages) => {
  var str = languages.toString();
  return str;
};

const sortArr = (social_arr) => {
  social_arr.sort();
  return social_arr;
};

const invertArr = (social_arr) => {
  social_arr.reverse();
  return social_arr;
};
