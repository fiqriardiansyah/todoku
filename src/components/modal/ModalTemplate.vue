<script lang="ts" setup>
    import { defineProps } from 'vue';
    import ButtonIcon from '../common/ButtonIcon.vue';

    type Props = {
        show?: boolean;
        onClose: () => void;
    };

    defineProps<Props>()
    
</script>
<template>
    <div v-if="show" @click="onClose" class="w-screen h-screen z-10 absolute top-0 left-0 bg-transparent-20"></div>
    <div v-if="show" className="min-w-[500px] max-w-[90%] bg-white rounded-lg p-4 absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="w-full flex items-center justify-between mb-2">
            <p class="font-medium text-xl capitalize text-primary">title</p>
            <ButtonIcon icon-name="io-close" @click="onClose" />
        </div>
        <slot></slot>
    </div>
</template>