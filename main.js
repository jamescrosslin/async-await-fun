// we declare a fuction that will be used as a callback
function parseJSON(response) {
  return response.json();
}

// this is an arrow function, and works just like the previous one*
//  with minor exceptions you don't need to worry about right now
const parseIt = (response) => {
  return response.json();
};

function getGarchomp() {
  // fetch is a javascript Promise-based web api that lives in the browser
  // we are chaining then methods to consume each promise as we go
  fetch('https://pokeapi.co/api/v2/pokemon/garchomp').then(parseIt).then(console.log);
}

document.getElementById('pokeButton').addEventListener('click', getGarchomp);
