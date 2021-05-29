// we declare a fuction that will be used as a callback
function parseJSON(response) {
  return response.json();
}

// this is an arrow function, and works just like the previous one*
//  with minor exceptions you don't need to worry about right now
const parseJson = (response) => {
  return response.json();
};

async function getGarchomp() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/garchomp');
  const garchompData = await response.json();
  console.log(garchompData);

  document
    .querySelector('body')
    .insertAdjacentHTML(
      'beforeend',
      `<div><h2>${garchompData.name}</h2><span>Pokemon Info</span></div>`,
    );

  // fetch is a javascript Promise-based web api that lives in the browser
  // we are chaining then methods to consume each promise as we go

  // fetch('https://pokeapi.co/api/v2/pokemon/garchomp')
  //   .then(res => res.json())
  //   .then((garchompData) => {
  //     console.log(garchompData);
  //     document
  //       .querySelector('body')
  //       .insertAdjacentHTML(
  //         'beforeend',
  //         `<div><h2>${garchompData.name}</h2><span>Pokemon Info</span></div>`,
  //       );
  //     fetch(garchompData.species.url)
  //       .then(parseJSON)
  //       .then((garcompSepeciesData) => {});
  //   });
}

document.getElementById('pokeButton').addEventListener('click', getGarchomp);
