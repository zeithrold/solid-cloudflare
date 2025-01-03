import vike from '@/middlewares/vike'
import { appRouter } from '@/rpc'
import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'

const app = new Hono()

app.use('/rpc/*', trpcServer({
  router: appRouter,
}))

app.all('*', vike)

export default app
