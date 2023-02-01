import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

export function useClickOutside(element: Ref<HTMLElement>, handler: (e: MouseEvent) => void) {
    const listener = (e: MouseEvent) => {
        if(!element.value || element.value.contains(e.target as Node)) return;
        handler(e);
    }

    onMounted(() => document.addEventListener("mousedown", listener));
    onUnmounted(() => document.addEventListener("mousedown", listener));
}