import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'
import nodemailer from 'nodemailer'
import transport from 'nodemailer-mailgun-transport'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import serverless from 'serverless-http'

dotenv.config()
const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const auth = {
  auth: {
    api_key: process.env.MAIL_API,
    domain: process.env.MAIL_DOMAIN
  }
}
const rejectFunctions = new Map([
  ['name', (v) => v.length < 2],
  ['email', (v) => !validator.isEmail(v)],
  ['message', (v) => v.length < 2]
])

const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return (
    rejectFunctions.has(key) &&
    !rejectFunctions.get(key)(value) &&
    xssFilters.inHTMLData(value)
  )
}

const sendMail = async (params) => {
  const [name, email, message] = params
  const transporter = nodemailer.createTransport(transport(auth))
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'garubav@gmail.com',
      subject: 'Hello, Victory',
      html: `<p>${message}</p>`
    })
    return `Message sent: ${info.messageId}`
  } catch (err) {
    return new Error(err)
  }
}

router.post('/contact', async (req, res, next) => {
  const attributes = ['name', 'email', 'message']
  const sanitizedAttributes = attributes.map((n) =>
    validateAndSanitize(n, req.body[n])
  )
  const someInvalid = sanitizedAttributes.some((r) => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ error: 'Unable to Complete!' })
  }
  try {
    const info = await sendMail(sanitizedAttributes)
    res.status(200).json({ message: `Mail Sent: ${info}` })
  } catch (err) {
    return res.status(422).json({ error: `Unable to Complete!: ${err}` })
  }
})

app.use('/.netlify/functions/server', app) // path must route to lambda
module.exports = app
module.exports.handler = serverless(app)
