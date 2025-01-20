<template>
    <component :is="icon" class="mdi-icon" />
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue';

defineOptions({
    name: 'MDIcon',
});

type MDIconType = {
    icon: FunctionalComponent | string;
};

defineProps<MDIconType>();
</script>

<style lang="css" scoped>
svg.mdi-icon {
    fill: currentColor;
}
</style>
