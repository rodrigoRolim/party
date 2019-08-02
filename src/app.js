import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes';
import database from './models'
import dotenv from 'dotenv-safe'
import cors from 'cors'


const configureExpress = () => {

  dotenv.config({
    allowEmptyValues: true
  })
  const app = express()
  app.use(bodyParser.json())
  app.use(cors())
  app.use('/', routes)
  return app
}


export default () => database.sequelize.sync({ force: false }).then(configureExpress)