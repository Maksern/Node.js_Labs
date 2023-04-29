function toUpper_FirstLetter_ofWords(message) {
  let messageNew = "";
  message.split(" ").map((word) => {
    let upperWord = word.replace(
      /\b\w/,
      String(word.match(/\b\w/)).toUpperCase()
    );
    messageNew += upperWord + " ";
  });

  return messageNew;
}

let message = "Hello, my miamucho";
console.log(toUpper_FirstLetter_ofWords(message));

message = "hi, amigos";
console.log(toUpper_FirstLetter_ofWords(message));
