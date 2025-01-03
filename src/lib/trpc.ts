import type { AppRouter } from '../rpc'
import { createTRPCProxyClient, httpLink } from '@trpc/client'

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: '/rpc',
    }),
  ],
})

export default trpc
