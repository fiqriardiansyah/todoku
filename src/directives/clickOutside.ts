import type { Directive } from "vue";

const clickOutSide: Directive<any, any> = {
    beforeMount: (el, binding) => {
        el.clickOutside = (event: MouseEvent) => {
            if(!(el === event.target || el.contains(event.target as Node))) {
                binding.value();
            }
        }
        document.addEventListener("click", el.clickOutside)
    },
    unmounted: (el) => {
        document.removeEventListener("click", el.clickOutside)
    }
}

export default clickOutSide;