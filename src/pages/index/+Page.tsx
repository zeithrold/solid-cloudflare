import { BiSolidInfoCircle } from 'solid-icons/bi'

export default function IndexPage() {
  return (
    <div class="gap-2 p-2">
      <h1 class="text-xl font-bold">hello, world!</h1>
      <label class="btn btn-primary btn-sm">
        {/* <span class="loading loading-spinner loading-sm" /> */}
        <BiSolidInfoCircle />
        Click me
      </label>
    </div>
  )
}
