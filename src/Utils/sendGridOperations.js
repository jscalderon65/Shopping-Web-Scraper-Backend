const sgMail = require('@sendgrid/mail')
const debug = 'debug'('app:sendGrid')
const debugAppError = require('debug')('app:error')
const {sendGridTemplate} = require('../Assets/sendGridTemplate')
const EmailWatcherAlertSubject = process.env.SEND_GRID_SUBJECT
const sendGridApiKey = process.env.SEND_GRID_API_KEY
const sendGridSender = process.env.SEND_GRID_SENDER
sgMail.setApiKey(sendGridApiKey)

const sendWatcherAlertEmail = async (
  to,
  brand,
  productName,
  actualPrice,
  oldPrice,
  productUrl,
) => {
  try {
    const msg = {
      to,
      from: sendGridSender,
      subject: EmailWatcherAlertSubject,
      html: sendGridTemplate(
        brand,
        productName,
        actualPrice,
        oldPrice,
        productUrl,
      ),
    }
    await sgMail.send(msg)
    debug('Email sent')
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}
module.exports = {sendWatcherAlertEmail}
