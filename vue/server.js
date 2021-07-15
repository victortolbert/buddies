import path from 'path'
import express from 'express'
import jsonServer from 'json-server'

const api = express()

api.use('/api', jsonServer.router(path.join(__dirname, 'db.json')))

export default api
