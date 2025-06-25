<script>
  import { m } from "$lib/paraglide/messages"
  import ArrowRight from "../icons/ArrowRight.svelte"
  import Button from "../ui/Button.svelte"
</script>

<section
  id="call"
  class="py-32 bg-gradient-to-br from-green-300 via-green-600 to-green-900 relative overflow-hidden"
>
  <div class="relative max-w-5xl mx-auto text-center px-6 lg:px-8">
    <h2 class="text-5xl md:text-6xl font-bold text-white mb-8">
      {m.call_ready_future()}
    </h2>
    <p class="text-2xl text-green-100 mb-12 font-light leading-relaxed">
      {m.call_discuss()}
    </p>
    <a href="/contact">
      <Button
        variant="secondary"
        size="lg"
        className="bg-white text-green-600 hover:bg-gray-50 shadow-2xl group cursor-pointer"
      >
        {m.call_start_project()}
        <ArrowRight
          className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </a>
  </div>
</section>
