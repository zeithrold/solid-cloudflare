import { BiSolidInfoCircle } from 'solid-icons/bi'

export default function IndexPage() {
  return (
    <div class="gap-2 p-2">
      <h1 class="text-xl font-bold">hello, world!</h1>
      <button type="button" class="btn btn-primary">
        <BiSolidInfoCircle class="text-lg" />
        Click me
      </button>
    </div>
  )
}
