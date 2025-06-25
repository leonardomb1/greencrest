<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import BarChart from "../icons/BarChart.svelte"
  import Code from "../icons/Code.svelte"
  import Card from "../ui/Card.svelte"

  let services: string[] = $derived([
    `${m.services_s1()}`,
    `${m.services_s2()}`,
    `${m.services_s3()}`,
  ])

  let dataServices: string[] = $derived([
    `${m.services_data_s1()}`,
    `${m.services_data_s2()}`,
    `${m.services_data_s3()}`,
  ])
</script>

<section id="services" class="py-32 bg-gray-50/30">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-bold text-gray-900 mb-6">
        {m.services_our_expertise()}
      </h2>
      <p class="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
        {m.services_solutions()}
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <Card hover className="p-12">
        <div
          class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-8"
        >
          <Code className="h-10 w-10 text-green-600" size={40} />
        </div>
        <h3 class="text-3xl font-bold text-gray-900 mb-6">
          {m.services_software_title()}
        </h3>
        <p class="text-gray-600 mb-8 leading-relaxed text-lg">
          {m.services_software_desc()}
        </p>
        <div class="space-y-4">
          {#each services as service}
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
              <span class="text-gray-700 text-lg">{service}</span>
            </div>
          {/each}
        </div>
      </Card>

      <Card hover className="p-12">
        <div
          class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-8"
        >
          <BarChart className="h-10 w-10 text-green-600" size={40} />
        </div>
        <h3 class="text-3xl font-bold text-gray-900 mb-6">
          {m.services_data_title()}
        </h3>
        <p class="text-gray-600 mb-8 leading-relaxed text-lg">
          {m.services_data_desc()}
        </p>
        <div class="space-y-4">
          {#each dataServices as dataService}
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
              <span class="text-gray-700 text-lg">{dataService}</span>
            </div>
          {/each}
        </div>
      </Card>
    </div>
  </div>
</section>
