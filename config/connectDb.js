const mongoose = require('mongoose')

const DB_URL = process.env.MONGODB_URL
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const PORT = process.env.PORT || 5000

const connectDb = async (appInstance) => {
  try {
    mongoose.connect(DB_URL, mongooseOptions, err => {
      if (!err) {
        console.log("Database Connected")
        appInstance.listen(PORT, () => console.log('Server up @ ' + PORT))
      } else {
        console.log("Couldn't connect to DB", err)
      }
    })
  } catch (e) {
    console.error(e)
  }
} 


module.exports = connectDb; 