<script lang="ts">
  interface USFlagProps {
    className?: string
    size?: number
  }

  let { className = "", size = 20 }: USFlagProps = $props()
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 18"
  fill="none"
  class={`rounded-sm ${className}`}
>
  <rect width="24" height="18" fill="#B22234" />
  <rect width="24" height="1.38" y="1.38" fill="white" />
  <rect width="24" height="1.38" y="4.15" fill="white" />
  <rect width="24" height="1.38" y="6.92" fill="white" />
  <rect width="24" height="1.38" y="9.69" fill="white" />
  <rect width="24" height="1.38" y="12.46" fill="white" />
  <rect width="24" height="1.38" y="15.23" fill="white" />
  <rect width="9.6" height="9.69" fill="#3C3B6E" />
  <g fill="white">
    <circle cx="1.6" cy="1.38" r="0.35" />
    <circle cx="3.2" cy="1.38" r="0.35" />
    <circle cx="4.8" cy="1.38" r="0.35" />
    <circle cx="6.4" cy="1.38" r="0.35" />
    <circle cx="8" cy="1.38" r="0.35" />
    <circle cx="2.4" cy="2.77" r="0.35" />
    <circle cx="4" cy="2.77" r="0.35" />
    <circle cx="5.6" cy="2.77" r="0.35" />
    <circle cx="7.2" cy="2.77" r="0.35" />
    <circle cx="1.6" cy="4.15" r="0.35" />
    <circle cx="3.2" cy="4.15" r="0.35" />
    <circle cx="4.8" cy="4.15" r="0.35" />
    <circle cx="6.4" cy="4.15" r="0.35" />
    <circle cx="8" cy="4.15" r="0.35" />
    <circle cx="2.4" cy="5.54" r="0.35" />
    <circle cx="4" cy="5.54" r="0.35" />
    <circle cx="5.6" cy="5.54" r="0.35" />
    <circle cx="7.2" cy="5.54" r="0.35" />
    <circle cx="1.6" cy="6.92" r="0.35" />
    <circle cx="3.2" cy="6.92" r="0.35" />
    <circle cx="4.8" cy="6.92" r="0.35" />
    <circle cx="6.4" cy="6.92" r="0.35" />
    <circle cx="8" cy="6.92" r="0.35" />
    <circle cx="2.4" cy="8.31" r="0.35" />
    <circle cx="4" cy="8.31" r="0.35" />
    <circle cx="5.6" cy="8.31" r="0.35" />
    <circle cx="7.2" cy="8.31" r="0.35" />
  </g>
</svg>
