const firebase = require('firebase-admin')
const {getFirestore} = require('firebase-admin/firestore')
const serviceAccount = require('./serviceAccountKey.json')
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
})
const db = getFirestore()
module.exports = db
