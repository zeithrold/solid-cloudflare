import {
  procedure as P,
  router as R,
} from '@/middlewares/trpc'
import { z } from 'zod'
import npmPackage from '~/package.json'

const { version } = npmPackage

export default P
  .output(z.object({
    version: z.string().nonempty(),
  }))
  .query(async () => ({
    version,
  }),
  )
