console.log("OOP is here");

class Pokemon {
  constructor(apiURL, id) {
    this.apiURL = apiURL;
    this.id = "" + id;
    this.id = this.id.replace(/.(?=.{4})/g, "");
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch(this.apiURL);
    this.data = await response.json();
    console.log(this.data);
    this.displayPoke();
  }

  displayPoke() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div id="card-inner">
      <div id="poke-image-container">
        <img id="poke-image" src="${
          this.data.sprites.other["official-artwork"].front_default
        }" />
      </div>
      <p id="poke-id">#${this.id}</p>
      <h3 id="poke-name">${
        this.data.species.name.charAt(0).toUpperCase() +
        this.data.species.name.slice(1)
      }</h3>
      <div id="poke-type">
        <p id="type-name">${this.data.types[0].type.name}</p>
      </div>
    <div>
    `;

    document.getElementById("poke-cards").appendChild(card);
  }
}
