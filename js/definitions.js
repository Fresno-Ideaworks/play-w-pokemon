let pokemon;

sprite = document.getElementById('pokemonSprite');

let actionData;

async function getPokemon(nameID)
{
	await fetch(`https://pokeapi.co/api/v2/pokemon/${nameID}`)
	.then(response => response.json())
	.then(data=>pokemon = data);
}