// Animals API
const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const fox = document.querySelector('#fox');

const photo = document.querySelector('#photo');
photo.addEventListener('click', getAnimal);

const dogUrl = `https://random.dog/woof.json`;
const catUrl = `https://aws.random.cat/meow`;
const foxUrl = `https://randomfox.ca/floof/`;

let animalsLinks = document.querySelector('.animals-links');

function showDog(data) {
  let dogLink = document.createElement('a');
  dogLink.href = data.url;
  dogLink.innerHTML = 'Dog Photo';
  dogLink.target = '_blank';
  // dogLink.innerText = data.url;
  animalsLinks.append(dogLink);
}

function showCat(data) {
  let catLink = document.createElement('a');
  catLink.href = data.file;
  catLink.innerHTML = 'Cat Photo';
  catLink.target = '_blank';
  // catLink.innerText = data.file;
  animalsLinks.append(catLink);
}

function showFox(data) {
  let foxLink = document.createElement('a');
  foxLink.href = data.image;
  foxLink.innerHTML = 'Fox Photo';
  foxLink.target = '_blank'; // foxLink.innerText = data.image;
  animalsLinks.append(foxLink);
}

function getAnimal() {
  if (dog.selected) {
    fetch(dogUrl)
      .then((res) => res.json())
      .then((data) => showDog(data));
  } else if (cat.selected) {
    fetch(catUrl)
      .then((res) => res.json())
      .then((data) => showCat(data));
  } else if (fox.selected) {
    fetch(foxUrl)
      .then((res) => res.json())
      .then((data) => showFox(data));
  }
}

// Rijksmuseum API
const colelction = document.querySelector('#collection');
colelction.addEventListener('click', getCollection);

let collectionLinks = document.querySelector('.collection-links');

function showCollection(data) {
  let collectionLink = document.createElement('a');
  collectionLink.href = data.artObjects[0].links.web;
  collectionLink.innerHTML = 'Rijksmuseum Collection';
  collectionLink.target = '_blank';
  // collectionLink.innerText = data.artObjects[0].links.web;
  collectionLinks.append(collectionLink);
}

function getCollection() {
  const rijksMuseumUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=OH0nlr7A&involvedMaker=Rembrandt+van+Rijn`;

  fetch(rijksMuseumUrl)
    .then((res) => res.json())
    .then((data) => showCollection(data));
}

// Chuck Norris Jokes API
const joke = document.querySelector('#joke');
joke.addEventListener('click', getJoke);

let jokeContents = document.querySelector('.joke-contents');

function showJoke(data) {
  let jokeContent = document.createElement('p');
  jokeContent.innerText = data.value.joke;
  jokeContents.append(jokeContent);
}

function getJoke() {
  const chuckNorrisUrl = `http://api.icndb.com/jokes/random`;

  fetch(chuckNorrisUrl)
    .then((res) => res.json())
    .then((data) => showJoke(data));
}

// Programming Jokes API
// const programmingJoke = document.querySelector('#programming-joke');
// programmingJoke.addEventListener('click', getProgrammingJoke);

// function getProgrammingJoke() {
//   const programmingUrl = `https://official-joke-api.appspot.com/jokes/programming/random`;

//   fetch(programmingUrl)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// Rick and Morty API
const rickAndMorty = document.querySelector('#rick-and-morty');
rickAndMorty.addEventListener('click', getRickAndMorty);

let characterNames = document.querySelector('.character-names');

function showRickAndMorty(data) {
  let characterName = document.createElement('p');
  characterName.innerText = data.results[0].name;
  characterNames.append(characterName);
}

function getRickAndMorty() {
  const rickAndMortyUrl = `https://rickandmortyapi.com/api/character`;

  fetch(rickAndMortyUrl)
    .then((res) => res.json())
    .then((data) => showRickAndMorty(data));
}

// Game of Thrones API
const gameOfThrones = document.querySelector('#game-of-thrones');
gameOfThrones.addEventListener('click', getGameOfThrones);

let characterAliases = document.querySelector('.character-aliases');

function showGameOfThrones(data) {
  let characterAlias = document.createElement('p');
  characterAlias.innerText = data[0].aliases[0];
  characterAliases.append(characterAlias);
}

function getGameOfThrones() {
  const gameOfThronesUrl = `https://www.anapioficeandfire.com/api/characters`;

  fetch(gameOfThronesUrl)
    .then((res) => res.json())
    .then((data) => showGameOfThrones(data));
}

// Star Wars API
const starWars = document.querySelector('#star-wars');
starWars.addEventListener('click', getStarWars);

let peopleNames = document.querySelector('.people-names');

function showStarWars(data) {
  let peopleName = document.createElement('p');
  peopleName.innerText = data.name;
  peopleNames.append(peopleName);
}

function getStarWars() {
  const starWarsUrl = `https://swapi.dev/api/people/1/`;

  fetch(starWarsUrl)
    .then((res) => res.json())
    .then((data) => showStarWars(data));
}

// Brazilian Cars API
const brazilianCars = document.querySelector('#brazilian-cars');
brazilianCars.addEventListener('click', getBrazilianCars);

let brazilianAutos = document.querySelector('.brazilian-autos');

function showBrazilianAutos(data) {
  let brazilianAuto = document.createElement('p');
  brazilianAuto.innerText = data[0].nome;
  brazilianAutos.append(brazilianAuto);
}

function getBrazilianCars() {
  const brazilianCarsUrl = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;

  fetch(brazilianCarsUrl)
    .then((res) => res.json())
    .then((data) => showBrazilianAutos(data));
}
