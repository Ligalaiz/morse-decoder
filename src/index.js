const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let arr = expr.split("");
  let newArr = [];
  let str = "";

  while (arr.length > 0) {
    let arrSlice = arr.slice(0, 10).join("");
    newArr.push(arrSlice);
    arr = arr.slice(10);
  }

  function myReplace(e) {
    return e
      .replace(/\*+/, " ")
      .replace(/10/g, ".")
      .replace(/11/g, "-")
      .replace(/\d/g, "");
  }
  arr = newArr.map(myReplace);

  for (let value of arr) {
    if (value == " ") {
      str += value;
      continue;
    }
    str += MORSE_TABLE[value];
  }
  return str;
}

module.exports = {
  decode
};
