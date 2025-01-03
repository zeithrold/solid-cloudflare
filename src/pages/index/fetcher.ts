import trpc from '@/lib/trpc'

export async function getVersion() {
  return trpc.meta.version.query()
}
