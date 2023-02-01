import type { Note } from '@/components/common/CardNote.vue';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotesStore = defineStore('notes', () => {
    const notes = ref<Note[]>([
        {title: 'senin', description: 'cuci piring, makan, tidur', done: true, tags: [1] },
        {title: 'selasa', description: 'belajar bahasa baru', done: false, tags: [2,3] },
        {title: 'rabu', description: 'belum makan dari semalam', done: false, tags: [3] },
    ]);

    return { notes }
})