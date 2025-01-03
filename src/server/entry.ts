import vike from '@/middlewares/vike'
import { Hono } from 'hono'

// import 'dotenv/config'

const app = new Hono()

app.use(async (c, next) => {
  c.header('Server', 'ZeithroldAtami/1.0')
  await next()
})

app.all('*', vike)

export default app
