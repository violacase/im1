<!-- ./pages/locations-carousel.vue -->
<script setup lang="ts">
// 1. Import all the necessary components from shadcn-vue
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// 2. Import the data
import locationsData from '@/assets/images/pics_dj.json'



</script>

<template>
  <!-- Main container to center the carousel on the page -->
  <div class="w-full max-w-4xl mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold text-center mb-10">
      Locations Carousel
    </h1>

    <!--
      4. The Carousel component is the main wrapper.
      It handles the Embla Carousel instance.
      We add ml-2 to the content to provide some spacing from the left edge.
    -->
    <Carousel class="relative w-full" :opts="{
      align: 'start',
      loop: true,
    }">
      <!-- CarouselContent is the scrollable container -->
      <CarouselContent class="-ml-2">
        <!--
          5. We loop over our data here, creating a CarouselItem for each location.
          The Tailwind classes here are key for responsiveness:
          - basis-full: Each slide takes up the full width on small screens.
          - md:basis-1/2: Two slides are visible on medium screens.
          - lg:basis-1/3: Three slides are visible on large screens.
          - The pl-2 provides the gutter/spacing between slides.
        -->
        <CarouselItem v-for="location in locationsData" :key="location.id"
          class="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
          <!--
            6. Inside each slide, we place our Card component.
            The p-1 on the parent div is a small trick to add a visual container.
          -->
          <div class="p-1">
            <Card class="overflow-hidden flex flex-col h-full">
              <CardHeader class="p-0">
                <img :src="location.image" :alt="location.title" class="w-full aspect-[4/3] object-cover" />
              </CardHeader>
              <CardContent class="p-6 flex-grow">
                <CardTitle class="text-xl font-bold mb-2">
                  {{ location.title }}
                </CardTitle>
                <CardDescription>
                  {{ location.description }}
                </CardDescription>
              </CardContent>
              <CardFooter class="p-6 pt-0">
                <Button as-child class="w-full">
                  <a href="#">Learn More</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <!-- 7. These are the navigation buttons. They automatically link to the carousel instance. -->
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
