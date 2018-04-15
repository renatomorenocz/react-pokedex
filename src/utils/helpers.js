export function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export function getIdPokemonByUrl(url) {
  let urlArray = url.split('/');
  const id = urlArray[urlArray.length - 2];

  return formatIdPokemon(id);
}

export function formatIdPokemon(id) {
  const formatId = '000';
  return formatId.substring(0, formatId.length - id.length) + id;
}

// Função retirada de https://github.com/nolanlawson/pokedex.org/blob/c5799094b8d8cea9111bcae151d15a7dce65d735/src/js/shared/renderMonsterDetailView/renderStats.js
// e adaptada
export function getStatDisplayRatio(statValue) {
  var maxStat = 255; // verified by grepping
  var smoothedValue = smoothExponentially(statValue, maxStat);
  return smoothedValue / maxStat * 100 / 10;
}

// Função retirada de https://github.com/nolanlawson/pokedex.org/blob/c5799094b8d8cea9111bcae151d15a7dce65d735/src/js/shared/renderMonsterDetailView/renderStats.js
export function smoothExponentially(value, max) {
  // function will be y = a * (x - max)^2 + max; just need to figure out what a is, such that it intercepts 0,0
  // if you solve for a when y is 0 and x is 0, you get (-m / (m^2)) = a
  var a = -max / Math.pow(max, 2);
  return a * Math.pow(value - max, 2) + max;
}
