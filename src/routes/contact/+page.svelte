<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import Navigation from "$lib/components/layout/Navigation.svelte"
  import Footer from "$lib/components/layout/Footer.svelte"
  import ContactHero from "$lib/components/layout/ContactHero.svelte"
  import ContactForm from "$lib/components/layout/ContactForm.svelte"
</script>

<svelte:head>
  <title>{m.meta_contact_title()}</title>
  <meta name="description" content={m.meta_contact_desc_content()} />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <Navigation />
  <ContactHero />
  <ContactForm />
  <Footer />
</div>
