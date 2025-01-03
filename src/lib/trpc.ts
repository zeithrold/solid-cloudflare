import type { AppRouter } from '../rpc'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/rpc',
    }),
  ],
})

export default trpc
