<script setup lang="ts">
    import { defineProps, withDefaults } from 'vue';
    export interface Tag {
        iconName: string;
        size?: "small" | "middle" | "large",
        color: string;
        title?: string;
        label?: string;
    }

    const sizes = [
        { small: "w-7 h-7" },
        { middle: "w-10 h-10" },
        { large: "w-14 h-14" },
    ]

    const props = withDefaults(defineProps<Tag>(), {
        size: "middle",
    })

    const size = sizes.find((sz) => Object.keys(sz)[0] === props.size)![props.size];

</script>
<template>
    <div class="flex items-center">
        <button :title="title || label" class="rounded-full flex items-center justify-center" :class="[size]" :style="{ backgroundColor: props.color }">
            <v-icon :name="props.iconName" class="text-primary" />
        </button>
        <p v-if="label" class="capitalize text-primary ml-2">{{ label }}</p>
    </div>
</template>