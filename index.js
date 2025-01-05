pokeB = document.getElementById("get-poke");
max = 300;
min = 1;

pokeB.onclick = function () {
  randomPokeID = Math.floor(Math.random() * (max - min + 1) + min);
  pokeID = randomPokeID + 10000;
  new Pokemon("https://pokeapi.co/api/v2/pokemon/" + randomPokeID, pokeID);
};
