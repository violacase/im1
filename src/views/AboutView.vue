<template>
    <div class="min-h-screen bg-background flex items-center justify-center p-8">
        <div class="text-center space-y-8 max-w-md">
            <h1 class="text-4xl font-bold text-foreground">Over Ons</h1>

            <Card class="w-full">
                <CardHeader>
                    <CardTitle>Setup Voltooid!</CardTitle>
                    <CardDescription>
                        Uw Vue 3 project is succesvol geconfigureerd met Tailwind CSS v4 en shadcn-vue
                        componenten.
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div class="flex items-center justify-center space-x-4">
                        <Button variant="outline" size="sm" @click="decrement"> - </Button>
                        <span class="text-2xl font-bold min-w-[60px]">{{ count }}</span>
                        <Button variant="outline" size="sm" @click="increment"> + </Button>
                    </div>

                    <div class="text-sm text-muted-foreground space-y-1">
                        <p>Getal is: {{ isEven ? 'even' : 'oneven' }}</p>
                        <p>Getal is: {{ isPositive ? 'positief' : 'negatief of nul' }}</p>
                    </div>

                    <Button variant="default" size="lg" class="w-full" @click="reset"> Reset Counter </Button>
                </CardContent>
            </Card>

            <router-link to="/" class="text-primary hover:underline"> Terug naar Home </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement, reset, isEven, isPositive } = useCounter()
</script>
