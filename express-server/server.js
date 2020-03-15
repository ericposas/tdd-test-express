import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import uuid from 'uuid'
import router from './routes/router'
import thingRoutes from './routes/thingRoutes'

dotenv.config()
const app = express()
const port = process.env.PORT

// mongoose.connection.on('connected', () => {
//   console.log('connected!')
// })
mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-taijg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    if (process.env.NODE_ENV == 'test'){
      console.log('connected!')
    }
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })

const server = app.listen(port, () => {
  if (process.env.NODE_ENV == 'test') {
    console.log('server started!')
  }
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
  genid: () => uuid(),
  secret: process.env.SESSION_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: true,
  cookie: process.env.NODE_ENV == 'development' ? { httpOnly: false } : { secure: true }
}))

app.use(express.static(path.join(__dirname, '../public')))

app.use(router)

app.use('/things', thingRoutes)

// function serverStart() {
//   server = app.listen(port, () => {
//     if (process.env.TEST == false) {
//       console.log('server started!')
//     }
//   })
// }

export default server
