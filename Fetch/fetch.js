const baseURL = 'https://pokeapi.co/api/v2/pokemon/';


async function getPokemon(url, callBack) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data)

        callBack(data)
    }
}

function doStuff(data) {
    const output = document.querySelector("#output");
    pokemon = data;
    const html = `<h1>${pokemon.name.toUpperCase()}</h1>
    <p>Pokemon # ${pokemon.id}</p>
                <img src="${pokemon.sprites.front_default}" alt = "Image of ${pokemon.name}">`;
    output.insertAdjacentHTML("afterbegin", html);
    console.log("first:", pokemon);
    console.log("stuff");
}

function compare(a, b) {
    if (a.name > b.name) {
        //sort b before a
        return 1;
    }
    else if (a.name < b.name) {
        //a and b different but unchanged (already in the correct order)
        return -1;
    }
    else return 0;
    //a and b are equal
}

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

function pokeListTemplate(pokemon) {
    return `<li id = "pokemon" data-url = "${pokemon.url}">${pokemon.name} </li>`;
}


function doStuffList(data) {
    //add html ul element to hold our list
    console.log(data);

    //get element
    const pokeListElement = document.querySelector('#pokeLists');

    //generate the html for each item in the list
    const htmlStrings = data.results.map(pokeListTemplate);
    console.log(htmlStrings);
    //insert the html into the element
    // document.querySelector('#pokeLists').insertAdjacentHTML("beforeend", htmlStrings.join(' '));

    // the previous comment works as does this one ;)
    // pokeListElement.insertAdjacentHTML("afterbegin", htmlStrings.join(" "));

    data.results.forEach(function (item) {
        pokeListElement.insertAdjacentHTML("beforeend", pokeListTemplate(item))
    });
}

// console.log(output);

getPokemon(baseURL + "?limit=100", doStuffList);
getPokemon(baseURL + "ditto", doStuff);
getPokemon(baseURL + "bulbasaur", doStuff);
getPokemon(baseURL + "2", doStuff);


// trying to get the image once you click on the name... best of luck
// document.getElementById('#').addEventListener("click", function (event) {
//     getPokemon((event.data - url), doStuff);
// })
