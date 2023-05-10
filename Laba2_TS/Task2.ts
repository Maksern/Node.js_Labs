function AnagramChecker(str1: string , str2: string): boolean{
    if(str1.length != str2.length){
        return false
    } else {
        str1 = str1.toLowerCase().split("").sort().join("");
        str2 = str2.toLowerCase().split("").sort().join("");

        return str1 == str2
    }
}

let word1 = "trona";
let word2 = "ronta"
console.log(AnagramChecker(word1, word2));