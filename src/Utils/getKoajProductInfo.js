const puppeteer = require('puppeteer')
const jsdom = require('jsdom')
const fs = require('fs')
const getKoajProductInfo = async (productUrl) => {
  try {
    const browser = await puppeteer.launch(/* {headless: false} */)
    const page = await browser.newPage()
    await page.setViewport({width: 1920, height: 1080})
    const response = await page.goto(productUrl, [
      1000,
      {waitUntil: 'domcontentloaded'},
    ])
    const body = await response.text()
    fs.writeFile('ejemplo.txt', body, (err) => {
      if (err) throw err
      console.log('Archivo creado')
    })
    // Creamos una instancia del resultado devuelto por puppeter para parsearlo con jsdom
    const {
      window: {document},
    } = new jsdom.JSDOM(body)
    const productInfo = {
      name: document.querySelector('.product_name').textContent.trim(),
      actualPrice: document.getElementById('our_price_display').trim(),
    }
    // Cerramos el puppeteer
    await browser.close()
    return productInfo
  } catch (error) {
    console.error(error)
  }
}

module.exports = {getKoajProductInfo}
