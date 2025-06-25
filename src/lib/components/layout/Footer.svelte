<script lang="ts">
  import { m } from "$lib/paraglide/messages"

  let currentYear = $derived(new Date().getFullYear())
</script>

<footer class="bg-gray-900 text-white py-16">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-6 md:mb-0">
        <a href="/">
          <img
            src="/logo.png"
            alt="Green Crest"
            width={180}
            height={90}
            class="h-16 w-auto brightness-0 invert opacity-90"
          />
        </a>
      </div>
      <div class="text-center md:text-right">
        <p class="text-gray-400 text-lg">
          &copy; {currentYear} Green Crest. {m.footer_message()}
        </p>
      </div>
    </div>
  </div>
</footer>
