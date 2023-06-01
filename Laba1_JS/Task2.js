function AnagramCheckerV1(str1, str2){
    if(str1.length != str2.length){
        return false
    } else {
        str1 = str1.toLowerCase().split("").sort().join("");
        str2 = str2.toLowerCase().split("").sort().join("");

        return str1 == str2
    }
}

function AnagramCheckerV2(str1, str2){
    if(str1.length != str2.length){
        return false
    } else {
        let check = 0;
        for (let index = 0; index < str1.length; index++) {
            check += str1[index].charCodeAt(0) - str2[index].charCodeAt(0);
        }
        return check == 0 ? true : false;
    }
}

let word1 = "trona lozka bor";
let word2 = "ronta lozka bor"
console.log(AnagramCheckerV2(word1, word2));

