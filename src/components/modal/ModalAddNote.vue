<script lang="ts" setup>
    import { ref } from 'vue';
    import ModalTemplate from './ModalTemplate.vue';
    const show = ref(false);

    const onCloseModal = () => {
        show.value = false;
    }

    const onOpenModal = () => {
        show.value = true;
    }

</script>
<template>
    <ModalTemplate :show="show" :on-close="onCloseModal">
        add notes
    </ModalTemplate>
    <slot :on-close-modal="onCloseModal" :on-open-modal="onOpenModal"></slot>
</template>