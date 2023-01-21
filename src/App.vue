<script setup lang="ts">
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="w-screen h-screen p-5">
        <div class="w-full h-full border-2 border-solid border-primary rounded-3xl">
            <RouterView />
        </div>
    </div>
</template>