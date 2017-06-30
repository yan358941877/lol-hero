import get from './utils'

export default {
  loadTop: get('heroTotal/top.json'),
  loadJungle: get('heroTotal/jungle.json'),
  loadMid: get('heroTotal/mid.json'),
  loadADC: get('heroTotal/adc.json'),
  loadSupport: get('heroTotal/support.json'),
  loadHero: get(heroID => `heroDetail/${heroID}.json`)
}
