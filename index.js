const searchInput = document.getElementById('search-btn');
const submitBtn = document.getElementById('submit-btn');
const wordTitle = document.querySelector('.wordTitle');
const displayResult = document.getElementById('display-result');
const content = document.querySelector('.content')
const footer = document.querySelector('.footer-btn')

//cleared
searchInput.value = '';

submitBtn.addEventListener('click', async () => {
    const word = searchInput.value.trim()
    console.log("word:", word)

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    fetch(url)
    .then((Response) => Response.json())
    .then((data) =>{
        displayResult.textContent = `The definition of "${word}"
        is: ${data[0].meanings[0].definitions[0].definition}`;

        console.log(data);
        content.style.display = 'block';
        footer.style.display = 'none';
        wordTitle.textContent = searchInput.value;

    })
    .catch((error) =>   wordTitle.textContent = `Error: "try again";`);
   
});
