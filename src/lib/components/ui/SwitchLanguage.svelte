<script lang="ts">
  import { onMount } from "svelte"
  import type { Component } from "svelte"
  import USFlag from "../icons/USFlag.svelte"
  import BrazilFlag from "../icons/BrazilFlag.svelte"
  import ChevronDown from "../icons/ChevronDown.svelte"
  import { setLocale, getLocale } from "$lib/paraglide/runtime"

  type LanguageCode = "pt-BR" | "en-US"

  interface Language {
    readonly code: LanguageCode
    readonly name: string
    readonly flag: Component
  }

  const LANGUAGES: readonly Language[] = [
    { code: "pt-BR", name: "Português", flag: BrazilFlag },
    { code: "en-US", name: "English", flag: USFlag },
  ] as const

  let currentLanguageCode = $state(getLocale())

  const currentLanguage = $derived(
    LANGUAGES.find((lang) => lang.code === currentLanguageCode) ?? LANGUAGES[0],
  )

  let isOpen = $state(false)
  let dropdownRef: HTMLDivElement

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
        isOpen = false
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  })

  const handleLanguageChange = (language: Language) => {
    if (language.code === currentLanguage.code) return
    setLocale(language.code)
    isOpen = false
  }

  const toggleDropdown = () => {
    isOpen = !isOpen
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      isOpen = false
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleDropdown()
    }
  }

  const handleLanguageKeydown = (event: KeyboardEvent, language: Language) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleLanguageChange(language)
    }
  }
</script>

<div class="relative" bind:this={dropdownRef}>
  <button
    type="button"
    onclick={toggleDropdown}
    onkeydown={handleKeydown}
    class="flex items-center gap-2 px-3 py-2 rounded-lg
           bg-white hover:bg-gray-50 active:bg-gray-100
           border border-gray-200 hover:border-gray-300
           transition-all duration-200 ease-in-out
           focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1
           shadow-sm hover:shadow-md"
    aria-label={`Current language: ${currentLanguage.name}. Click to change language`}
    aria-expanded={isOpen}
    aria-haspopup="listbox"
  >
    <currentLanguage.flag
      size={20}
      class="flex-shrink-0 rounded-sm shadow-sm"
    />

    <span class="text-sm font-medium text-gray-700 hidden sm:block select-none">
      {LANGUAGES.filter((lang) => lang.code === currentLanguage.code)[0].name}
    </span>

    <ChevronDown
      size={14}
      className="text-gray-500 transition-transform duration-200 ease-in-out flex-shrink-0
             {isOpen ? 'rotate-180' : 'rotate-0'}"
    />
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 mt-2 w-44
             bg-white rounded-xl shadow-xl border border-gray-200
             py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
      role="listbox"
      aria-label="Select language"
    >
      {#each LANGUAGES as language (language.code)}
        {@const isSelected = currentLanguage.code === language.code}

        <button
          type="button"
          role="option"
          aria-selected={isSelected}
          onclick={() => handleLanguageChange(language)}
          onkeydown={(e) => handleLanguageKeydown(e, language)}
          class="w-full flex items-center gap-3 px-4 py-3 text-left
                 transition-colors duration-150 ease-in-out
                 hover:bg-gray-50 active:bg-gray-100
                 focus:outline-none focus:bg-gray-50
                 {isSelected
            ? 'bg-green-50 text-green-700 hover:bg-green-100'
            : 'text-gray-700'}"
          disabled={isSelected}
        >
          <language.flag size={20} class="flex-shrink-0 rounded-sm shadow-sm" />

          <span class="text-sm font-medium flex-1 select-none">
            {language.name}
          </span>

          {#if isSelected}
            <div
              class="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"
              aria-hidden="true"
            ></div>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  @keyframes animate-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-in {
    animation: animate-in 0.2s ease-out;
  }
</style>
