<script setup lang="ts">
    import { defineProps } from 'vue';
    import ButtonIcon from './ButtonIcon.vue';
    import Tag from './Tag.vue';

    export interface Props {
        note?: Note;
    }
    export interface Note {
        title?: string;
        description?: any;
        tags?: string[];
        done?: boolean;
    }
    const props = defineProps<Props>()
</script>
<template>
    <div class="bg-cream rounded p-4 min-w-[350px] flex flex-col gap-3">
        <div class="w-full flex items-center justify-between">
            <p class="capitalize font-medium text-primary m-0">
                {{ note?.title }}
            </p>
            <ButtonIcon icon-name="hi-dots-horizontal" size="small" />
        </div>
        <div v-html="note?.description" class="text-primary capitalize text-xs"></div>
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Tag icon-name="bi-bank" :color="`#FFFFFF`" />
                <Tag icon-name="bi-bank" :color="`#FFFFEE`" />
                <Tag icon-name="bi-bank" :color="`#FFFFFF`" />
            </div>
            <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-primary bg-primary rounded focus:ring-primary">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-primary">Done</label>
            </div>
        </div>
    </div>
</template>