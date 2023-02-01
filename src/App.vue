<script setup lang="ts">
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="w-screen h-screen p-5 2xl:p-10">
        <div class="w-full h-full border-2 border-solid border-primary rounded-3xl overflow-hidden p-5">
            <RouterView />
        </div>
    </div>
</template>