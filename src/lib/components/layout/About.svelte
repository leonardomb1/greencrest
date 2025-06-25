<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import Card from "../ui/Card.svelte"

  const teamValues = [
    {
      title: `${m.about_values_title_1()}`,
      description: `${m.about_values_1()}`,
    },
    {
      title: `${m.about_values_title_2()}`,
      description: `${m.about_values_2()}`,
    },
    {
      title: `${m.about_values_title_3()}`,
      description: `${m.about_values_3()}`,
    },
  ]
</script>

<section id="about" class="py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Values Section -->
    <div class="text-center mb-16">
      <h3 class="text-4xl font-bold text-gray-900 mb-6">
        {m.about_our_core_values()}
      </h3>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto font-light">
        {m.about_principles()}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mb-24">
      {#each teamValues as value}
        <Card hover className="p-8 text-center">
          <div
            class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <div class="w-8 h-8 bg-green-600 rounded-lg"></div>
          </div>
          <h4 class="text-2xl font-bold text-gray-900 mb-4">
            {value.title}
          </h4>
          <p class="text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </Card>
      {/each}
    </div>

    <!-- Mission Statement -->
    <div class="text-center">
      <Card
        className="p-12 bg-gradient-to-br from-green-50 to-green-100 border-green-200"
      >
        <h3 class="text-3xl font-bold text-gray-900 mb-6">
          {m.about_our_mission_title()}
        </h3>
        <p
          class="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
        >
          {m.about_mission_statement()}
        </p>
      </Card>
    </div>
  </div>
</section>
<!-- End of About Section -->
