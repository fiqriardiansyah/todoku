<script setup lang="ts">
    import { defineProps, withDefaults } from 'vue';
    const sizes = [
        { small: "w-7 h-7" },
        { middle: "w-10 h-10" },
        { large: "w-14 h-14" },
    ]
    interface Props {
        iconName: string;
        size: "small" | "middle" | "large"
    }
    const props = withDefaults(defineProps<Props>(), {
        iconName: "",
        size: "middle"
    })

    const size = sizes.find((sz) => Object.keys(sz)[0] === props.size)![props.size];

</script>
<template>
    <button class="rounded-full bg-transparent-5" :class="size">
        <v-icon :name="props.iconName" class="text-primary" />
    </button>
</template>