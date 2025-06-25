<script>
  import { m } from "$lib/paraglide/messages"
  import ArrowRight from "../icons/ArrowRight.svelte"
  import Button from "../ui/Button.svelte"
</script>

<section
  class="pt-40 pb-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white"
>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight">
      <span class="text-green-600">{m.hero_title_w1()}</span>
      <span class="text-gray-900">{m.hero_title_w2()}</span>
      <br />
      <span class="text-gray-900">{m.hero_title_w3()}</span>
      <span class="text-green-600">{m.hero_title_w4()}</span>
    </h1>

    <p
      class="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
    >
      {m.hero_message()}
    </p>

    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a href="/#services">
        <Button size="lg" className="group cursor-pointer">
          {m.hero_explore()}
          <ArrowRight
            className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </a>
      <a href="/#about">
        <Button variant="secondary" size="lg" className="cursor-pointer"
          >{m.hero_learn()}</Button
        >
      </a>
    </div>
  </div>
</section>
