<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import Button from "$lib/components/ui/Button.svelte"
  import Card from "$lib/components/ui/Card.svelte"
  import ContactInfo from "./ContactInfo.svelte"

  let formData = $state({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    contactMethod: "email" as "email" | "phone",
  })

  type Status = "success" | "error" | null
  let isSubmitting: boolean = $state(false)
  let submitStatus: Status = $state(null)
  let errorMessage: string = $state("")
  let successMessage: string = $state("")

  const resetForm = () => {
    formData = {
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      contactMethod: "email",
    }
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    isSubmitting = true
    submitStatus = null
    errorMessage = ""
    successMessage = ""

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        submitStatus = "success"
        successMessage =
          result.message || "Your message has been sent successfully!"
        resetForm()

        console.log("Form submitted successfully:", result.data)
      } else {
        submitStatus = "error"
        errorMessage = result.error || "Something went wrong. Please try again."
        console.error("Form submission error:", result)
      }
    } catch (error) {
      submitStatus = "error"
      errorMessage =
        "Network error. Please check your connection and try again."
      console.error("Network error:", error)
    } finally {
      isSubmitting = false

      setTimeout(() => {
        submitStatus = null
        errorMessage = ""
        successMessage = ""
      }, 5000)
    }
  }
</script>

<section class="pb-32 px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <div class="grid mt-4 mb-10 lg:grid-cols-1 gap-12">
      <!-- Contact Form -->
      <div class="lg:col-span-2">
        <Card className="p-8">
          <form onsubmit={handleSubmit} class="space-y-6">
            <!-- Personal Information -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  {m.contact_form_fullname()} *
                </label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="..."
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  {m.contact_form_email()} *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="..."
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  {m.contact_form_company()}
                </label>
                <input
                  type="text"
                  id="company"
                  bind:value={formData.company}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="..."
                />
              </div>

              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  {m.contact_form_phone()}
                </label>
                <input
                  type="tel"
                  id="phone"
                  bind:value={formData.phone}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <!-- Project Details -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="projectType"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  {m.contact_form_project_type()} *
                </label>
                <select
                  id="projectType"
                  bind:value={formData.projectType}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">{m.contact_form_project_type_v0()}</option>
                  <option value="web-development"
                    >{m.contact_form_project_type_v1()}</option
                  >
                  <option value="mobile-app"
                    >{m.contact_form_project_type_v2()}</option
                  >
                  <option value="data-analysis"
                    >{m.contact_form_project_type_v3()}</option
                  >
                  <option value="consulting"
                    >{m.contact_form_project_type_v4()}</option
                  >
                  <option value="automation"
                    >{m.contact_form_project_type_v5()}</option
                  >
                  <option value="other"
                    >{m.contact_form_project_type_v6()}</option
                  >
                </select>
              </div>

              <div>
                <label
                  for="budget"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  {m.contact_form_budget_range()}
                </label>
                <select
                  id="budget"
                  bind:value={formData.budget}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">{m.contact_form_budget_range_v0()}</option>
                  <option value="under-10k"
                    >{m.contact_form_budget_range_v1()}</option
                  >
                  <option value="10k-25k"
                    >{m.contact_form_budget_range_v2()}</option
                  >
                  <option value="25k-50k"
                    >{m.contact_form_budget_range_v3()}</option
                  >
                  <option value="50k-100k"
                    >{m.contact_form_budget_range_v4()}</option
                  >
                  <option value="over-100k"
                    >{m.contact_form_budget_range_v5()}</option
                  >
                </select>
              </div>
            </div>

            <div>
              <label
                for="timeline"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                {m.contact_form_timeline()}
              </label>
              <select
                id="timeline"
                bind:value={formData.timeline}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                <option value="">{m.contact_form_timeline_v0()}</option>
                <option value="asap">{m.contact_form_timeline_v1()}</option>
                <option value="1-3-months"
                  >{m.contact_form_timeline_v2()}</option
                >
                <option value="3-6-months"
                  >{m.contact_form_timeline_v3()}</option
                >
                <option value="6-12-months"
                  >{m.contact_form_timeline_v4()}</option
                >
                <option value="flexible">{m.contact_form_timeline_v5()}</option>
              </select>
            </div>

            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                {m.contact_form_project_desc()} *
              </label>
              <textarea
                id="description"
                bind:value={formData.description}
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                placeholder={m.contact_form_project_desc_placeholder()}
              ></textarea>
            </div>

            <!-- Contact Preference -->
            <div>
              <span class="block text-sm font-medium text-gray-700 mb-3">
                {m.contact_form_preferred_contact()}
              </span>
              <div class="flex gap-6">
                <label class="flex items-center">
                  <input
                    type="radio"
                    bind:group={formData.contactMethod}
                    value="email"
                    class="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span class="ml-2 text-gray-700"
                    >{m.contact_form_preferred_contact_email()}</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    bind:group={formData.contactMethod}
                    value="phone"
                    class="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span class="ml-2 text-gray-700"
                    >{m.contact_form_preferred_contact_phone()}</span
                  >
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              {#if submitStatus === "success"}
                <div
                  class="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p class="text-green-800">
                    {m.contact_form_final_thankyou()}
                  </p>
                </div>
              {/if}

              {#if submitStatus === "error"}
                <div
                  class="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p class="text-red-800">
                    {m.contact_form_final_error()}
                  </p>
                </div>
              {/if}

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? `${m.contact_form_final_awaiting()}`
                  : `${m.contact_form_final_button()}`}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
    <ContactInfo />
  </div>
</section>
