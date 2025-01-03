import { clientOnly } from 'vike-solid/clientOnly'
import LoadingButton from './LoadingButton'

const VersionButton = clientOnly(async () => import('./VersionButton'))

export default function IndexPage() {
  return (
    <div class="gap-2 p-2">
      <h1 class="text-xl font-bold">hello, world!</h1>
      <VersionButton fallback={<LoadingButton />} />
    </div>
  )
}
