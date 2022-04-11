const {db, FieldValue} = require('../Db/config')
const debug = require('debug')('firebase:firestore')
const debugDbError = require('debug')('firebase:error')

const isDbReferenceExist = async (dbRoute) => {
  const dbValidation = await db.doc(dbRoute).get()
  if (!dbValidation.exists) {
    return false
  } else {
    debug('Document data: ', dbValidation.data())
    return true
  }
}

const getElementsFromDocument = async (collectionId, docId) => {
  try {
    const dbRef = await db.collection(collectionId).doc(docId).get()
    if (!dbRef.exists) {
      debugDbError('No such document!')
      throw new Error('No such document!')
    } else {
      debug('Document data: ', dbRef.data())
      return dbRef.data()
    }
  } catch (error) {
    debugDbError(error)
    throw new Error(error)
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
        [propertyId]: {...newElement, id: propertyId, user: docId},
      },
      {merge: true},
    )
    debug(
      'Field successfully written, in route: ' +
        collectionId +
        '/' +
        docId +
        ': ' +
        propertyId,
    )
    return response
  } catch (error) {
    debugDbError(error)
    throw new Error(error)
  }
}

const updateElementToDocument = async (
  collectionId,
  docId,
  propertyId,
  newTags,
) => {
  try {
    const dbRef = db.collection(collectionId).doc(docId)
    const response = await dbRef.update(
      {
        [`${propertyId}.tags`]: newTags,
      },
      {merge: true},
    )
    debug('Field successfully updated, in route: ' + collectionId + '/' + docId)
    return response
  } catch (error) {
    debugDbError(error)
    throw new Error(error)
  }
}

const DeleteElementInDocument = async (collectionId, docId, propertyId) => {
  try {
    const dbRef = db.collection(collectionId).doc(docId)
    const response = await dbRef.update({
      [propertyId]: FieldValue.delete(),
    })
    debug('Field successfully deleted, in route: ' + collectionId + '/' + docId)
    return response
  } catch (error) {
    debugDbError(error)
    throw new Error(error)
  }
}

const getCronInfo = async (collectionId) => {
  try {
    const arrayData = []
    const snapshot = await db.collection(collectionId).get()
    snapshot.docs.map((doc) => {
      for (let item in doc.data()) {
        arrayData.push({...doc.data()[item]})
      }
    })
    debug('Collection data finished')
    return arrayData
  } catch (error) {
    debugDbError(error)
    throw new Error(error)
  }
}

module.exports = {
  isDbReferenceExist,
  setElementToDocument,
  getElementsFromDocument,
  DeleteElementInDocument,
  getCronInfo,
  updateElementToDocument,
}
