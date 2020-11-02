((text) => {
  typeof text != "string" && console.log("Not a string");
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i in text) {
    vowel.indexOf(String(text[i]).toLowerCase()) !== -1 &&console.log(`${text[i]} found at index ${i}`);}
})("Yaya MamoudoU");
