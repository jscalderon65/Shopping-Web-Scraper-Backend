const getExistingBrands = (req, res) => {
  try {
    const existingBrands = ['Koaj', 'Bershka', 'Adidas', 'SevenAndSeven']
    res.send({existingBrands})
  } catch (e) {
    res.status(500).send({error: e.message})
    debugAppError(e)
  }
}
module.exports = {getExistingBrands}
