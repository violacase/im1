<template>
  <!-- Outermost page container with global theme styles -->
  <div class="bg-background text-foreground min-h-screen">
    <!-- SECTION 1: HERO -->
    <section class="w-full py-16 md:py-24 lg:py-32 bg-muted/20">
      <!-- Full-width background -->
      <!-- Custom 'content-container' class styled by media queries -->
      <div class="content-container">
        <div class="text-center">
          <!-- Tailwind for text alignment -->
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary"
          >
            Dé zorgverzekering voor je huisdier
          </h1>
          <p
            class="text-md sm:text-lg md:text-xl mb-8 max-w-xl mx-auto text-muted-foreground"
          >
            Best beoordeelde huisdierenverzekeraar op Trustpilot. Standaard de
            meest complete dekking.
          </p>
          <Button size="lg" variant="default"> Ontdek jouw premie </Button>
        </div>
      </div>
    </section>

    <!-- SECTION 2: PET SELECTION -->
    <section class="w-full py-12 md:py-16 bg-card text-card-foreground">
      <!-- Full-width background -->
      <!-- Custom 'content-container' class -->
      <div class="content-container">
        <h2
          class="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12"
        >
          Welk huisdier heb je?
        </h2>
        <!-- Tailwind for internal grid layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            size="lg"
            class="w-full justify-start py-6 text-base"
          >
            <span class="mr-3 text-xl">🐶</span> Ik heb een hond
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="w-full justify-start py-6 text-base"
          >
            <span class="mr-3 text-xl">🐱</span> Ik heb een kat
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="w-full justify-start py-6 text-base"
          >
            <span class="mr-3 text-xl">🐰</span> Ik heb een konijn
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="w-full justify-start py-6 text-base"
          >
            <span class="mr-3 text-xl">🦜</span> Ik heb een papegaai
          </Button>
        </div>
        <p class="text-center mt-10 text-sm text-muted-foreground">
          Nederlands best beoordeelde huisdierenverzekeraar op
          <span class="font-semibold text-primary">⭐ Trustpilot</span>
        </p>
      </div>
    </section>

    <!-- SECTION 3: "WHAT IS INSURED?" -->
    <section class="w-full py-16 md:py-24 bg-muted/20">
      <!-- Full-width background -->
      <!-- Custom 'content-container' class -->
      <div class="content-container">
        <Card class="w-full shadow-xl bg-card text-card-foreground">
          <!-- Shadcn Card takes full width of its parent -->
          <CardHeader class="pb-4">
            <CardTitle class="text-2xl sm:text-3xl font-semibold text-center">
              Wat is er verzekerd?
            </CardTitle>
            <CardDescription
              class="mt-2 text-center max-w-2xl mx-auto text-muted-foreground"
            >
              Onze zorgverzekering is met de grootste liefde door onze
              huisdierspecialisten samengesteld.
            </CardDescription>
          </CardHeader>
          <CardContent class="p-6 pt-2 space-y-6">
            <!-- Tailwind for internal grid layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-accent p-5 rounded-lg text-accent-foreground">
                <h3 class="font-semibold text-lg mb-2">
                  Consulten & Onderzoeken
                </h3>
                <ul class="space-y-1 text-sm list-disc list-inside pl-1">
                  <li>Consulten, medicatie & diagnostische onderzoeken</li>
                  <li>Medische noodzakelijke behandelingen & operaties</li>
                  <li>Specialistische zorg</li>
                </ul>
              </div>
              <div class="bg-accent p-5 rounded-lg text-accent-foreground">
                <h3 class="font-semibold text-lg mb-2">
                  Wat is er nog meer verzekerd?
                </h3>
                <ul class="space-y-1 text-sm list-disc list-inside pl-1">
                  <li>Behandelingen tegen kanker</li>
                  <li>Gebitsbehandelingen bij ongevallen</li>
                  <li>Fysiotherapie en hydrotherapie</li>
                </ul>
              </div>
            </div>
            <div class="text-center pt-4">
              <Button size="lg" variant="default"
                >Bekijk alle vergoedingen</Button
              >
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- FOOTER SECTION -->
    <footer class="w-full py-10 bg-background border-t border-border">
      <!-- Full-width background -->
      <!-- Custom 'content-container' class -->
      <div class="content-container">
        <p class="text-center text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} My Awesome Pet Insurance. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Shadcn UI components are auto-imported by Nuxt 3.
// Ensure you've added them: `npx shadcn-nuxt add button card`
</script>

<style>
/* Global CSS with explicit media queries for the .content-container */
/* These styles will create the centered column with margins on larger screens. */

.content-container {
  /* Default mobile styles: full width with some padding */
  width: 100%;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  margin-left: auto; /* Center the block */
  margin-right: auto; /* Center the block */
  box-sizing: border-box; /* Ensure padding is included in width calculations */
}

/* Small devices (landscape phones, Tailwind 'sm' breakpoint is 640px) */
@media (min-width: 640px) {
  .content-container {
    max-width: 600px; /* Content area slightly narrower than the breakpoint */
    padding-left: 1.5rem; /* 24px */
    padding-right: 1.5rem; /* 24px */
  }
}

/* Medium devices (tablets, Tailwind 'md' breakpoint is 768px) */
@media (min-width: 768px) {
  .content-container {
    max-width: 728px; /* Content area slightly narrower */
  }
}

/* Large devices (desktops, Tailwind 'lg' breakpoint is 1024px) */
/* This is where the prominent "margins" on the sides will appear on your large monitor. */
@media (min-width: 1024px) {
  .content-container {
    max-width: 960px; /* A common comfortable reading width, creates visible side margins */
    /* Adjust this value to make it narrower or wider as per your preference. */
  }
}

/* Extra large devices (large desktops, Tailwind 'xl' breakpoint is 1280px) */
@media (min-width: 1280px) {
  .content-container {
    /* You can make it wider here, or keep it the same as 'lg'
       if you prefer a consistent content width for very large screens. */
    max-width: 1140px;
  }
}

/* 2xl: Even larger screens (Tailwind '2xl' breakpoint is 1536px) */
@media (min-width: 1536px) {
  .content-container {
    /* Adjust if needed, or maintain width from 'xl' */
    max-width: 1280px;
  }
}

/* Optional: General body styles for smooth scrolling */
html,
body,
#__nuxt {
  scroll-behavior: smooth;
}
</style>
