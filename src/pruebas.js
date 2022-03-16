const {createWatcherInKoajProduct} = require('./Utils/watchersOperations')
const url = [
  '//www.koaj.co/chaqueta-licencia/29220-chaqueta-college-harvard.html?refSrc=1581&nosto=nosto-page-product3#/142-talla-l/169-colores-rojo',
]
/* const url = [
  'https://www.koaj.co/licencias/29307-buzo-con-capota-estampado-de-ed-edd-eddy.html?refSrc=29481&nosto=productpage-nosto-1',
  'https://www.koaj.co/tops/1581-camiseta-amarilla-manga-corta.html#/142-talla-l/147-colores-amarillo',
  'https://www.koaj.co/push-up/6841-pantalon-push-up.html?refSrc=1581&nosto=productpage-nosto-1#/127-talla-06/128-colores-azul',
  'https://www.koaj.co/basica/12757-105205570154-948.html?refSrc=1581&nosto=productpage-nosto-1#/145-talla-xs/128-colores-azul',
  'https://www.koaj.co/chaqueta-licencia/29220-chaqueta-college-harvard.html?refSrc=1581&nosto=nosto-page-product3#/142-talla-l/169-colores-rojo',
] */
url.map(async (item) => console.log(await createWatcherInKoajProduct(item)))
