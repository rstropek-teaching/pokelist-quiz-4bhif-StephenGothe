
    //Get Element wo es aufgelisted werden soll
    const pokemonList = document.getElementById('pokemons');
    var link:string = "https://pokeapi.co/api/v2/pokemon/";

    //Erstesmal Aufrufen
    (function () {
        getPokemon();
    })();

    //Get Pokemons mit HTTP request
    function getPokemon()
    {
        fetch(link).then(response => {
            response.json().then(pokelist => {
                let html = '';
                for (const pokemon of pokelist.results) {
                html += `<li>${pokemon.name}</li>`
                }

                pokemonList.innerHTML = html;
            });
        });
    }

    //Gehe zur nächsten Seite
    function nextPage ()
    {
        fetch(link).then(response => {
            response.json().then(pokelist => {
                if(`${pokelist.previous}` !== null)
                    link = `${pokelist.next}`;
                getPokemon();
            });
        });
    }

    //Gehe zur vorhergehenden Seite
    function prevPage ()
    {
        fetch(link).then(response => {
            response.json().then(pokelist => {
                if(`${pokelist.previous}` !== null)
                    link = `${pokelist.previous}`;
                getPokemon();
            });
        });
    }
