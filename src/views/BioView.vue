<template>
    <BioSectionLarge v-if="isLargeScreen" />
    <BioSection v-else />
</template>

<script setup lang="ts">
import useIsLargeScreen from '@/composables/useIsLargeScreen';

import BioSection from './layout/BioSection.vue';
import BioSectionLarge from './layout/BioSectionLarge.vue';

const { isLargeScreen } = useIsLargeScreen();
</script>
