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
  const search = document.querySelector('input').value;
  const garchompRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
  const garchompData = await garchompRes.json();
  console.log(garchompData);

  const body = document.querySelector('body');

  const speciesRes = await fetch(garchompData.species.url);
  const speciesData = await speciesRes.json();
  console.log(speciesData);

  body.insertAdjacentHTML(
    'beforeend',
    `<div>
      <h2>${garchompData.name}</h2>
      <h3>Pokemon Info</h3>
      <p>ID: ${speciesData.id}</p>
      <p>${speciesData.capture_rate}</p>
    </div>`,
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
