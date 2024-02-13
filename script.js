console.log("Funcionou!") /* Lembre-se de tirar isso no fim do projeto! ou ira aparecer para os usuarios */

const searchInput = document.getElementById('search-input');
/* const searchInput2 = document.querySelectorAll('.cards'); */
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    })

    resultArtist.classList.remove('hidden');
}

function hidePlaylists() {
    resultPlaylist.classList.add("hidden")
}

searchInput.addEventListener('input', function() { 
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})