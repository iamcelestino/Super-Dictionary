const inputWord = document.querySelector("form");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

const translateWord = async(word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response =  await fetch(url);
    const data = await response.json();
    return data[0];
}

const getTheWorld = (event) => {
    event.preventDefault();
    const word = inputWord.input.value;
    translateWord(word)
        .then(word => {
            titleEl.textContent = word.word;
            audioEl.setAttribute("src", `${word.phonetics[1].audio}`);
        });
}

inputWord.addEventListener("submit", getTheWorld);

 
