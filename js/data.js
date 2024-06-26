'use strict';
let data = {
  view: 'home',
  genres: null,
  game: null,
  platform: null,
};
window.addEventListener('beforeunload', () => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('game-repo-data', dataJSON);
});
window.addEventListener('pagehide', () => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('game-repo-data', dataJSON);
});
const previousDataJSON = localStorage.getItem('game-repo-data');
if (previousDataJSON) data = JSON.parse(previousDataJSON);
