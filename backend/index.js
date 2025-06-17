import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ProductRoute from './routes/ProductRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(ProductRoute)
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app
