getPokemon('66');

setTimeout(()=>{

	console.log(pokemon.name)
	sprite.src = pokemon.sprites.front_default;

},1000);