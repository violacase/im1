<template>
  <MyHero />
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">Basic Carousel</h2>
    <!-- <div class="max-w-4xl">
      <EmblaCarousel />
    </div> -->
  </section>
  <!-- <Carousel /> -->
  <!-- AppLogo or other global components can go here -->
  <div class="flex justify-center h-screen overflow-x-hidden no-scrollbar">
    <!-- <EmblaCarousel /> -->
    <section class="container flex justify-center bg-muted/20 w-full">

      <!-- Full-width background -->
      <div class="content-container w-full max-w-full">

        <Card class="shadow-xl bg-card text-card-foreground w-full max-w-full">
          <!-- Shadcn Card takes full width of its parent -->
          <!-- <MobileNavButton /> -->
          <EmblaCarousel />
          <CardHeader class="pb-4">
            <CardTitle class="text-2xl sm:text-3xl font-semibold text-center">
              Wat is er verzekerd?
            </CardTitle>
            <CardDescription class="mt-2 text-center max-w-2xl mx-auto text-muted-foreground">
              Onze zorgverzekering is met de grootste liefde door onze
              huidspecialisten samengesteld.
            </CardDescription>
          </CardHeader>

          <CardContent class="p-6 pt-2 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-accent p-5 rounded-lg text-accent-foreground">
                <h3 class="font-semibold text-lg mb-2">
                  Consulten &amp; Onderzoeken
                </h3>
                <ul class="space-y-1 text-sm list-disc list-inside pl-1">
                  <li>Consulten, medicatie &amp; diagnostische onderzoeken</li>
                  <li>Medische noodzakelijke behandelingen &amp; operaties</li>
                  <li>Specialistische zorg</li>
                </ul>
              </div>
              <div class="bg-accent p-5 rounded-lg text-accent-foreground">
                <h3 class="font-semibold text-lg mb-2">
                  Wat is er nog meer verzekerd?
                </h3>
                <ul class="space-y-1 text-sm list-disc list-inside pl-1">
                  <li>Behandelingen tegen kanker</li>
                  <li>Gebitbehandelingen bij ongevallen</li>
                  <li>Fysiotherapie en hydrotherapie</li>
                </ul>
              </div>
            </div>
            <div class="text-center pt-4">
              <Button size="lg" variant="default">
                Bekijk alle vergoedingen
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts"></script>
