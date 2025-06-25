<script>
  import About from "$lib/components/layout/About.svelte"
  import Call from "$lib/components/layout/Call.svelte"
  import Features from "$lib/components/layout/Features.svelte"
  import Footer from "$lib/components/layout/Footer.svelte"
  import Hero from "$lib/components/layout/Hero.svelte"
  import Navigation from "$lib/components/layout/Navigation.svelte"
  import Services from "$lib/components/layout/Services.svelte"
  import { m } from "$lib/paraglide/messages"
</script>

<svelte:head>
  <title>{m.meta_main_title()}</title>
  <meta name="description" content={m.meta_main_desc()} />
  <meta name="keywords" content={m.meta_main_keywords()} />
  <meta name="author" content="Green Crest Ltd." />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="64x64" href="/favicon-96x96.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="min-h-screen bg-white">
  <Navigation />
  <Hero />
  <Services />
  <Features />
  <About />
  <Call />
  <Footer />
</div>
