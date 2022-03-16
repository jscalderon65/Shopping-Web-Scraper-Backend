const {getKoajProductInfo} = require('./Utils/getKoajProductInfo')
const url =
  'https://www.koaj.co/licencias/29307-buzo-con-capota-estampado-de-ed-edd-eddy.html?refSrc=29481&nosto=productpage-nosto-1'
getKoajProductInfo(url).then(() => console.log('FIN'))
