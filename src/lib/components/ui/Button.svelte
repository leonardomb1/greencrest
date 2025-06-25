<script lang="ts">
  import type { Snippet } from "svelte"

  interface ButtonProps {
    variant?: "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
    className?: string
    onclick?: () => void
    type?: "button" | "submit" | "reset" | null
    disabled?: boolean | null
    children: Snippet
  }

  let {
    variant = "primary",
    size = "md",
    className = "",
    onclick,
    type = null,
    disabled = null,
    children,
  }: ButtonProps = $props()

  let variants = $derived({
    primary:
      "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 focus:ring-gray-500 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent hover:bg-green-50 text-green-600 border border-green-600 focus:ring-green-500",
  })

  let sizes = $derived({
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
  })

  let finalClass = $derived(
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" +
      ` ${variants[variant]} ${sizes[size]} ${className}`,
  )
</script>

<button class={finalClass} {onclick} {type} {disabled}>
  {@render children()}
</button>
