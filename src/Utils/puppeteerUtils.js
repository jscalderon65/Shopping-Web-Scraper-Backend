const puppeteer = require('puppeteer')
const jsdom = require('jsdom')

const getWebSiteSourceCode = async (url) => {
  try {
    const browser = await puppeteer.launch(/* {headless: false} */)
    const page = await browser.newPage()
    await page.setViewport({width: 1920, height: 1080})
    const response = await page.goto(url, [
      1000,
      {waitUntil: 'domcontentloaded'},
    ])
    const body = await response.text()
    await browser.close()
    return body
  } catch (error) {
    return error
  }
}

const getKoajProductInfo = (webSiteSourceCode) => {
  try {
    const {
      window: {document},
    } = new jsdom.JSDOM(webSiteSourceCode)
    const name = document.querySelector('.product_name').textContent.trim()
    const actualPrice = document
      .getElementById('our_price_display')
      .textContent.trim()
    return {name, actualPrice}
  } catch (error) {
    return error
  }
}

module.exports = {getWebSiteSourceCode, getKoajProductInfo}
