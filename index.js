
//selecionando o botao do html
const button = document.getElementById("countButton");


//selecionando as divs que terao resultado do contador;




button.addEventListener("click", function() {  
// resetAll();
checkLetters();
checkWords();


});


function checkLetters(){
   
    //selecionando a div que vai ter resultado do contador;

    //variavel que vai pegar o valor de textArea
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

    let letterCounts = {};

    let words = typedText.split("");

    for (let i = 0; i < words.length; i++) {
    let  currentLetter = words[i];

    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
 }

 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const lettersDiv = document.getElementById("lettersDiv");
    lettersDiv.appendChild(span); 
 }

 console.log(letterCounts)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////


function checkWords(){
    let typedWord = document.getElementById('textInput').value;
    
    //variavel que vai pegar o valor de textArea
    
    typedWord = typedWord.toLowerCase();
    typedWord = typedWord.replace(/[^a-z'\s]+/g, ""); 

    let words = typedWord.split(/\s/);


    const wordCounts = {};

    for (let i = 0; i < words.length; i++) {
        
        let currentWord = words[i];
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
         } else { 
            wordCounts[currentWord]++; 
         }
     }

     for (let word in wordCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${word}": ${wordCounts[word]}, `;
    span.innerText = textContent; 
    const wordsDiv = document.getElementById('wordsDiv');
    wordsDiv.appendChild(span); 
 }
 }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function resetAll(){
//     let typedReset = document.getElementById('textInput').value
//     let words = typedReset.split(/\s/);

//     const reset = {}


//     for (let i = 0; i < words.length; i++){
//         let currentWord = words[i];

//         reset[currentWord] = 0;
//     }
// }
 


 
 
 

//  for (let letter in letterCounts) { 
//     const span = document.createElement("span"); 
//     const textContent = `"${letter}": ${letterCounts[letter]}, `;
//     span.innerText = textContent; 
//     const letters = document.getElementById("lettersDiv");
//     letters.appendChild(span); 
//  }


// typedText = typedText.toLowerCase();
// // Isto muda todas as letras para minúsculas
// typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
// // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos.
