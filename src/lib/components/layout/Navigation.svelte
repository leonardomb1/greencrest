<script lang="ts">
  import { onMount } from "svelte"
  import { m } from "$lib/paraglide/messages"
  import Button from "../ui/Button.svelte"
  import SwitchLanguage from "../ui/SwitchLanguage.svelte"
  import CompanyLogo from "../icons/CompanyLogo.svelte"

  let isMenuOpen = $state(false)
  let navRef: HTMLElement

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef && !navRef.contains(event.target as Node)) {
        isMenuOpen = false
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  })

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen
  }

  const closeMenu = () => {
    isMenuOpen = false
  }
</script>

<nav
  bind:this={navRef}
  class="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100/50 z-50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16 md:h-20">
      <div class="flex items-center">
        <a href="/">
          <CompanyLogo
            width={180}
            height={90}
            className="h-16 md:h-18 w-auto"
          />
        </a>
      </div>

      <div class="hidden md:flex items-center space-x-8 lg:space-x-12">
        <a
          href="/#services"
          class="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium"
        >
          {m.navigation_services()}
        </a>
        <a
          href="/#about"
          class="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium"
        >
          {m.navigation_about()}
        </a>
        <a
          href="/contact"
          class="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium"
        >
          {m.navigation_contact()}
        </a>
        <div class="flex items-center space-x-4">
          <SwitchLanguage />
          <a href="/#call">
            <Button size="md" disabled={false} className="cursor-pointer"
              >{m.navigation_get_started()}</Button
            >
          </a>
        </div>
      </div>

      <div class="md:hidden flex items-center space-x-2">
        <SwitchLanguage />
        <button
          type="button"
          onclick={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
          {#if !isMenuOpen}
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/  svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {:else}
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if isMenuOpen}
    <div
      class="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
    >
      <div class="px-4 pt-2 pb-3 space-y-1 sm:px-6">
        <a
          href="/#services"
          onclick={closeMenu}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
        >
          {m.navigation_services()}
        </a>
        <a
          href="/#about"
          onclick={closeMenu}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
        >
          {m.navigation_about()}
        </a>
        <a
          href="/contact"
          onclick={closeMenu}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
        >
          {m.navigation_contact()}
        </a>
        <div class="px-3 py-3">
          <a href="/#call" onclick={closeMenu}>
            <Button size="md" className="w-full justify-center cursor-pointer">
              {m.navigation_get_started()}
            </Button>
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>
