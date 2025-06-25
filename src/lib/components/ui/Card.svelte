<script lang="ts">
  import type { Snippet } from "svelte"

  interface CardProps {
    className?: string
    hover?: boolean
    children: Snippet
  }

  let { className = "", hover = true, children }: CardProps = $props()

  let hoverEffect = $derived(
    hover ? "hover:shadow-2xl hover:-translate-y-1" : "",
  )
</script>

<div
  class="bg-white rounded-2xl shadow-lg transition-all duration-300 {hoverEffect} {className}"
>
  {@render children()}
</div>
