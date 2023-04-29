let message = "Hello, my miamucho";

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

console.log(toUpper_FirstLetter_ofWords(message));
