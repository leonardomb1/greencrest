<script lang="ts">
  interface ChevronDownProps {
    className?: string
    size?: number
  }

  let { className = "", size = 16 }: ChevronDownProps = $props()
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
>
  <path d="m6 9 6 6 6-6" />
</svg>
