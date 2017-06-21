const path = 'hero';

const hero = require('./'+path);
// console.log(hero.data.lore)
console.log(decodeURIComponent(hero.data.spells[0].name));
console.log(decodeURIComponent(hero.data.spells[0].description));
console.log(decodeURIComponent(hero.data.spells[0].image.full));
console.log(hero.data.spells[0].tooltip);