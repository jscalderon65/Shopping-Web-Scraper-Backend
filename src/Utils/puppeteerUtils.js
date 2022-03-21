const debugAppError = require('debug')('app:error')
const puppeteer = require('puppeteer')
const jsdom = require('jsdom')

const getWebSiteSourceCode = async (url) => {
  try {
    const browser = await puppeteer.launch(/* {headless: false} */)
    const page = await browser.newPage()
    await page.setViewport({width: 1920, height: 1080})
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
    )
    const response = await page.goto(url, {
      waitUntil: 'load',
      timeout: 0,
    })
    const body = await response.text()
    await browser.close()
    return body
  } catch (e) {
    debugAppError(e)
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
    return {name, actualPrice, brand: 'Koaj'}
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const getBershkaProductInfo = (webSiteSourceCode) => {
  try {
    const {
      window: {document},
    } = new jsdom.JSDOM(webSiteSourceCode)
    const name = document.querySelector('.product-title').textContent.trim()
    const actualPrice = document
      .querySelector('.current-price-elem')
      .textContent.trim()
    return {name, actualPrice, brand: 'Bershka'}
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const getAdidasProductInfo = (webSiteSourceCode) => {
  try {
    const {
      window: {document},
    } = new jsdom.JSDOM(webSiteSourceCode)
    const name = document.querySelector('h1.gl-heading').textContent.trim()
    const normalPrice = document
      .querySelector('div.gl-price-item')
      ?.textContent.trim()
    const salePrice = document
      .querySelector('div.gl-price-item--sale')
      ?.textContent.trim()
    const actualPrice = salePrice ? salePrice : normalPrice
    return {
      name,
      actualPrice,
      brand: 'Adidas',
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const getSevenAndSevenProductInfo = (webSiteSourceCode) => {
  try {
    const {
      window: {document},
    } = new jsdom.JSDOM(webSiteSourceCode)
    const name = document
      .querySelector('.productDescription')
      .textContent.trim()
    const actualPrice = document
      .querySelector('.skuBestPrice')
      .textContent.trim()
    return {
      name,
      actualPrice,
      brand: 'SevenAndSeven',
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

module.exports = {
  getWebSiteSourceCode,
  getKoajProductInfo,
  getBershkaProductInfo,
  getAdidasProductInfo,
  getSevenAndSevenProductInfo,
}
