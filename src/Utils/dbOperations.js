const db = require('../Db/config')
const debug = require('debug')('firebase:firestore')
const debugDbError = require('debug')('firebase:error')
const isDbReferenceExist = async (dbRef) => {
  const dbValidation = await dbRef.get()
  if (!dbValidation.exist) {
    return false
  } else {
    debug('Document data: ', dbValidation.data())
    return true
  }
}
const setElementToDocument = async (
  collectionId,
  docId,
  propertyId,
  newElement,
) => {
  try {
    const dbRef = db.collection(collectionId).doc(docId)
    const response = await dbRef.set(
      {
        [propertyId]: newElement,
      },
      {merge: true},
    )
    debug(
      'Document successfully written, in route: ' + collectionId + '/' + docId,
    )
    return response
  } catch (error) {
    debugDbError(error)
    throw new Error(error)
  }
}
module.exports = {isDbReferenceExist, setElementToDocument}
