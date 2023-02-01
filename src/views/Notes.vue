<script lang="ts" setup>
    import CardNote from '@/components/common/CardNote.vue';
    import { useNotesStore } from '@/store/notes';
    const { notes } = useNotesStore();
</script>
<template>
    <div class="w-full h-[500px] 2xl:h-[760px]">
        <div class="grid grid-cols-3 gap-4">
            <CardNote v-for="note in notes" :note="note" />
        </div>
    </div>
</template>