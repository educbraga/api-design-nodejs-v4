import express from 'express'
import router from './router'
import morgan from 'morgan'

const app = express()

const customLogger = (message) => (req, res, next) => {
	console.log(`Hello from ${message}`)
	next()
}

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use (customLogger('customer logger'))

app.get('/', (req, res) => {
	console.log('Hello from express')
	res.status(200)
	res.json({ message: 'hello' })
})

app.use('/api', router)

export default app