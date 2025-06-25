<script lang="ts">
  interface BrazilFlagProps {
    className?: string
    size?: number
  }

  let { className = "", size = 20 }: BrazilFlagProps = $props()
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 18"
  fill="none"
  class={`rounded-sm ${className}`}
>
  <rect width="24" height="18" fill="#009739" />
  <polygon points="12,2 20,9 12,16 4,9" fill="#FEDD00" />
  <circle cx="12" cy="9" r="3.5" fill="#012169" />
  <path
    d="M9 7.5 C10 6.5, 14 6.5, 15 7.5 C14.5 8.5, 13.5 9, 12 9 C10.5 9, 9.5 8.5, 9 7.5 Z"
    fill="white"
  />
  <path
    d="M9.5 10 C10.5 11, 13.5 11, 14.5 10"
    stroke="white"
    stroke-width="0.3"
    fill="none"
  />
</svg>
