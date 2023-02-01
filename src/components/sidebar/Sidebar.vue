<script lang="ts" setup>
    import { ref } from 'vue';
    import Tag from '../common/Tag.vue';
    import type { Tag as TagProps } from '../common/Tag.vue';
    const tags = ref<TagProps[]>([
        { iconName: 'io-add', color: '#F8EDE3', label: "tambah" },
        { iconName: 'md-addiccall', color: '#F5F5DC', label: "telpon" },
        { iconName: 'md-sportskabaddi-round', color: '#F1F7B5', label: "sdfsdfs" },
    ]); 
</script>

<template>
    <div class="w-[250px] h-[500px] 2xl:h-[760px] flex flex-col gap-3">
        <Tag v-for="tag in tags" :icon-name="tag.iconName" :color="tag.color" :label="tag.label" />
    </div>
</template>