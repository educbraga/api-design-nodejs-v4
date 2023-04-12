import express from 'express'
import router from './router'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
	console.log('Hello from express')
	res.status(200)
	res.json({ message: 'hello' })
})

app.use('/api', router)

export default app