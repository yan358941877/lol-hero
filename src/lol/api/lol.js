import get from './utils'

export default {
  getTop: get('heroTotal/top.json'),
  getJungle: get('heroTotal/jungle.json'),
  getMid: get('heroTotal/mid.json'),
  getADC: get('heroTotal/adc.json'),
  getSupport: get('heroTotal/support.json'),
  getHero: get(heroID => `HeroDetail/${heroID}.json`)
}
