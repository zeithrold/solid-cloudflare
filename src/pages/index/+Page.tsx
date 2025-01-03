import { clientOnly } from 'vike-solid/clientOnly'

const VersionButton = clientOnly(async () => import('./VersionButton'))

export default function IndexPage() {
  return (
    <div class="gap-2 p-2">
      <h1 class="text-xl font-bold">hello, world!</h1>
      {
        // Client-Only components with fetching state
        // might not be recommended to pass a `fallback` prop.
        // Because when fetching is in progress, another fallback
        // component will be rendered, which causes double-loading,
        // or simply a flicker.
      }
      <VersionButton />
    </div>
  )
}
