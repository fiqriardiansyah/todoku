
<script lang="ts" setup>
    import ButtonIcon from '@/components/common/ButtonIcon.vue';
    import Sidebar from '@/components/sidebar/Sidebar.vue';
    import ModalTemplate from '@/components/modal/ModalTemplate.vue';
    import ModalAddNoteVue from '@/components/modal/ModalAddNote.vue';
    import Notes from './Notes.vue';
    import { ref } from 'vue';
</script>
<template>
    <div class="w-full items-center flex justify-between mb-5">
        <p class="text-primary font-semibold text-4xl">todo</p>
        <ModalAddNoteVue v-slot="props" >
            <ButtonIcon icon-name="io-add" @click="props.onOpenModal" />
        </ModalAddNoteVue>
    </div>
    <div class="w-full flex">
        <Sidebar />
        <Notes />
    </div>
</template>