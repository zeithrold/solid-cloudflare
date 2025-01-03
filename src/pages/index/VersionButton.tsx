import { createResource, Show } from 'solid-js'
import { getVersion } from './fetcher'
import LoadingButton from './LoadingButton'

export default function VersionButton() {
  const [version] = createResource(getVersion)
  return (
    <Show
      when={version.state === 'ready'}
      fallback={<LoadingButton />}
    >
      <label class="btn btn-primary">
        <span>
          Version:
          {' '}
          {version()?.version}
        </span>
      </label>
    </Show>
  )
}
