import { router as R } from '@/middlewares/trpc'
import meta from './meta'

export const appRouter = R({
  meta,
})

export type AppRouter = typeof appRouter
