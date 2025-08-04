<template>
    <div class="min-h-screen bg-background flex items-center justify-center p-8">
        <div class="text-center space-y-8 max-w-md">
            <h1 class="text-4xl font-bold text-foreground">Welkom</h1>
            <p class="text-muted-foreground">Dit is de home pagina van uw Vue 3 applicatie.</p>
            <router-link to="/about" class="text-primary hover:underline"> Ga naar About </router-link>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
