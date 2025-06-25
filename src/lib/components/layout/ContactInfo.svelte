<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import Card from "$lib/components/ui/Card.svelte"
</script>

<div class="space-y-8">
  <!-- Contact Information Card -->
  <Card className="p-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">
      {m.contact_info_title()}
    </h3>
    <div class="space-y-6">
      <!-- Email -->
      <div class="flex items-start">
        <div
          class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-1">
            {m.contact_info_email()}
          </h4>
          <p class="text-gray-600 mb-2">{m.contact_info_email_msg()}</p>
          <a
            href="mailto:contact@greencrest.com.br"
            class="text-green-600 hover:text-green-700 font-medium"
          >
            contact@greencrest.com.br
          </a>
        </div>
      </div>

      <!-- Phone -->
      <div class="flex items-start">
        <div
          class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-1">
            {m.contact_info_phone()}
          </h4>
          <p class="text-gray-600 mb-2">
            {m.contact_info_phone_msg()} (UTC-3)
          </p>
          <a
            href="tel:+5519999999999"
            class="text-green-600 hover:text-green-700 font-medium"
          >
            +55 (19) 99999-9999
          </a>
        </div>
      </div>

      <!-- Location -->
      <div class="flex items-start">
        <div
          class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-1">
            {m.contact_info_location()}
          </h4>
          <p class="text-gray-600 mb-2">{m.contact_info_location_msg()}</p>
          <p class="text-gray-700">
            Indaiatuba, São Paulo<br />
            {m.contact_info_location_country()}
          </p>
        </div>
      </div>
    </div>
  </Card>
</div>
