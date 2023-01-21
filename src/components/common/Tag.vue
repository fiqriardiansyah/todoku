<script setup lang="ts">
    import { defineProps, ref, withDefaults, computed } from 'vue';
    const sizes = [
        { small: "w-7 h-7" },
        { middle: "w-10 h-10" },
        { large: "w-14 h-14" },
    ]
    interface Props {
        iconName: string;
        size: "small" | "middle" | "large",
        color: string;
    }
    const props = withDefaults(defineProps<Props>(), {
        iconName: "",
        size: "middle",
        color: "",
    })

    const size = sizes.find((sz) => Object.keys(sz)[0] === props.size)![props.size];

</script>
<template>
    <button class="rounded-full cursor-auto flex items-center justify-center" :class="[size]" :style="{ backgroundColor: props.color }">
        <v-icon :name="props.iconName" class="text-primary" />
    </button>
</template>