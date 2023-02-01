<script setup lang="ts">
    import Button from '@/components/common/Button.vue';
    import CardNote from '@/components/common/CardNote.vue';
    import type { Note } from '@/components/common/CardNote.vue';
    import ImageChar1 from '../assets/images/char1.png';
    import ImageChar2 from '../assets/images/char2.png';
    import ImageChar3 from '../assets/images/char3.png';
    import { HOME_PATH } from '@/utils/constant';

    const characters = [ImageChar1, ImageChar2, ImageChar3];

    const note: Note = {
        title: "Todoku",
        description: "the first step for better life",
        done: true,
    }

</script>
<template>
    <div class="w-full h-full flex items-center flex-col justify-center gap-8">
        <p class="text-6xl font-semibold">
            <span class="text-blue-light">t</span>
            <span class="text-red-light">o</span>
            <span class="text-green-light">d</span>
            <span class="text-purple-light">o</span>
            <span class="text-red-light">k</span>
            <span class="text-blue-light">u</span>
        </p>
        <p class="text-primary text-center max-w-[40%] text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ab repellat sunt odit harum eos a sapiente aspernatur, tempore dolore minus est dolores.</p>
        <RouterLink :to="HOME_PATH" >
            <Button >
                get started
            </Button>
        </RouterLink>
        <div class="">
            <div class="flex items-center gap-1">
                <img v-for="img in characters" :src="img" class="w-28">
            </div>
            <CardNote :note="note" :only-view="true" />
        </div>
    </div>
</template>
