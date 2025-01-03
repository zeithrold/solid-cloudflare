import { createResource, Show } from 'solid-js'
import { getVersion } from './fetcher'

export default function VersionButton() {
  const [version] = createResource(getVersion)
  return (
    <label class="btn btn-primary">
      <Show when={version.loading}>
        <span class="loading loading-spinner" />
      </Show>
      <Show
        when={version.state === 'ready'}
        fallback={<span>Loading...</span>}
      >
        <span>
          Version:
          {' '}
          {version()?.version}
        </span>
      </Show>
    </label>
  )
}
