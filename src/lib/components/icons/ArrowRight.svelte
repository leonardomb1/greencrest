<script lang="ts">
  interface ArrowRightProps {
    className?: string
    size?: number
  }

  let { className = "", size = 24 }: ArrowRightProps = $props()
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="4"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
>
  <path d="M8 24h32M28 12l12 12-12 12" />
</svg>
