<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import Energy from "../icons/Energy.svelte"
  import Globe from "../icons/Globe.svelte"
  import Shield from "../icons/Shield.svelte"

  interface Feature {
    icon: any
    title: string
    description: string
  }

  let features: Feature[] = $derived([
    {
      icon: Energy,
      title: `${m.features_energy()}`,
      description: `${m.features_energy_desc()}`,
    },
    {
      icon: Shield,
      title: `${m.features_shield()}`,
      description: `${m.features_shield_desc()}`,
    },
    {
      icon: Globe,
      title: `${m.features_globe()}`,
      description: `${m.features_globe_desc()}`,
    },
  ])
</script>

<section class="py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-bold text-gray-900 mb-6">
        {m.features_why()} Green Crest?
      </h2>
      <p class="text-2xl text-gray-600 font-light">
        {m.features_excel()}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-12">
      {#each features as feature}
        <div class="text-center group">
          <div
            class="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
          >
            <feature.icon class="h-12 w-12 text-green-600" size={48} />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
          <p class="text-gray-600 leading-relaxed text-lg">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
