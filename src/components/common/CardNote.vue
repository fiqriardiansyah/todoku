<script setup lang="ts">
    import { useClickOutside } from '@/composable/useClickOutside';
    import { defineProps, ref } from 'vue';
    import ButtonIcon from './ButtonIcon.vue';
    import Tag from './Tag.vue';
    export interface Props {
        note?: Note;
        onlyView?: boolean;
    }
    export interface Note {
        title?: string;
        description?: any;
        tags?: number[];
        done?: boolean;
    }
    const showAction = ref(false);
    const menuRef = ref<HTMLElement | null>(null);
    defineProps<Props>()

    useClickOutside(menuRef as any, (e) => {
        showAction.value = false
    });

    const onFocusAction = () => {
        showAction.value = true
    }

    const onEdit = () => {
        console.log("edit")
    }

    const onDelete = () => {
        console.log("delete")
    }

</script>
<template>
    <div class="bg-cream rounded p-4 min-w-[350px] flex flex-col gap-3 h-fit relative" :class="{ 'pointer-events-none': onlyView }">
        <div ref="menuRef" v-if="showAction" class="bg-white p-1 rounded-md w-[100px] absolute top-3 right-3">
            <button @click="onEdit" class="capitalize text-primary font-medium bg-white border-none px-2 py-1">edit...</button>
            <button @click="onDelete" class="capitalize text-primary font-medium bg-white border-none px-2 py-1 hover:text-red-400">delete</button>
        </div>
        <div class="w-full flex items-center justify-between">
            <p class="capitalize font-medium text-primary m-0" :class="{ 'line-through' : note?.done }">
                {{ note?.title }}
            </p>
            <ButtonIcon @click="onFocusAction" icon-name="hi-dots-horizontal" size="small" class="trigger" />
        </div>
        <div v-html="note?.description" class="text-primary capitalize text-xs" :class="{ 'line-through' : note?.done }"></div>
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Tag icon-name="bi-bank" :color="`#FFFFFF`" title="nyapu" />
                <Tag icon-name="bi-bank" :color="`#FFFFEE`" title="pussy" />
                <Tag icon-name="bi-bank" :color="`#FFFFFF`" title="todoku" />
            </div>
            <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" :checked="note?.done" class="w-4 h-4 text-primary bg-primary rounded focus:ring-primary">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-primary">Done</label>
            </div>
        </div>
    </div>
</template>