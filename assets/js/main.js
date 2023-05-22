let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];

const btn = document.querySelector(".encrypt");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
  document.querySelector("article").style.display = "block";
  const outputText = document.querySelector("article");
  let inputText = document
    .querySelector(`input[type="text"]`)
    .value.toUpperCase();
  let outputCode = document.querySelector("p");
  let explanation = `<h2>Explanation</h2>`;
  outputCode.innerHTML = "";

  const inputTextArray = inputText.split("");

  inputTextArray.forEach((e) => {
    const morseletter = morseAlphabet.find((elm) => elm.letter === e);
    if (morseletter) {
      outputCode.innerHTML += morseletter.morseCode;

      if (e.toLowerCase() != " ") {
        explanation += `<div>
                         <p>${e.toLowerCase()}=  ${
          morseletter.morseCode
        }</p>               
                         </div>`;
      } else {
        explanation += "<br>";
      }
      outputText.innerHTML = explanation;
    }
  });
});
