const axios = require('axios')

function isUrl(s) {
  var regexp =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s)
}

const isUrlStatusValid = async (url) => {
  if (isUrl(url)) {
    try {
      await axios.get(url)
      return true
    } catch (error) {
      return false
    }
  } else {
    return false
  }
}

module.exports = {isUrlStatusValid}
