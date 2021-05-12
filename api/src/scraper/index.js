require("dotenv/config")
const cron = require('node-cron')
const mongoose = require('mongoose')

const productScraper = require('./productScraper')

; (async () => {
  try {
    console.log('---------- Start Cron ----------')
    console.log('')
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    cron.schedule('59 0 * * *', async () => {
      console.log('---------- Running Cron Job ----------')
      await productScraper()
    })
  } catch (e) {
    console.error(e)
  }
})()