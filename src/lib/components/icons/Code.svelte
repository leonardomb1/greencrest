<script lang="ts">
  interface CodeProps {
    className?: string
    size?: number
  }

  let { className = "", size = 24 }: CodeProps = $props()
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
  <polyline points="16,18 22,12 16,6" />
  <polyline points="8,6 2,12 8,18" />
</svg>
