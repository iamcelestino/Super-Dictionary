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

const displayData = (data) => {
    const html = `
        <p>Word Title: <span class="title" id="title">___</span></p>
        <p>Meaning: <span class="meaning" id="meaning">___</span></p>
        <audio src="" controls id="audio"></audio>
        `;
        meaningContainerEl.innerHTML = html;
}

const getTheWorld = (event) => {
    event.preventDefault();
    const word = inputWord.input.value;
    translateWord(word)
        .then(word => console.log(word));
}

inputWord.addEventListener("submit", getTheWorld);

 
