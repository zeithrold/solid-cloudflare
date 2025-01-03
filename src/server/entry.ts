import vike from '@/middlewares/vike'
import { appRouter } from '@/rpc'
import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'

// import 'dotenv/config'

const app = new Hono()

app.use(async (c, next) => {
  c.header('Server', 'ZeithroldAtami/1.0')
  await next()
})

app.use('/api/rpc/*', trpcServer({
  router: appRouter,
}))

app.all('*', vike)

export default app
