<script lang="ts">
  interface BrazilFlagProps {
    className?: string
    size?: number
  }

  let { className = "", size = 20 }: BrazilFlagProps = $props()
</script>

<svg
  width={size}
  role="img"
  aria-label="Brazil Flag"
  height={size}
  viewBox="0 0 24 18"
  fill="none"
  class={`rounded-sm ${className}`}
>
  <rect width="24" height="18" fill="#009b3a" rx="1" />

  <polygon points="12,3 19,9 12,15 5,9" fill="#fedf00" />

  <circle cx="12" cy="9" r="3.2" fill="#002776" />

  <ellipse cx="12" cy="8.5" rx="2.5" ry="0.8" fill="#ffffff" />

  <circle cx="10.5" cy="7.5" r="0.3" fill="white" />
  <circle cx="13.5" cy="7" r="0.25" fill="white" />
  <circle cx="11" cy="10.5" r="0.2" fill="white" />
  <circle cx="13.2" cy="10.8" r="0.2" fill="white" />
  <circle cx="14.5" cy="8.5" r="0.15" fill="white" />
  <circle cx="9.5" cy="8.8" r="0.15" fill="white" />
</svg>
