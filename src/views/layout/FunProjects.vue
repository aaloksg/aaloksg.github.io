<template>
    <SectionLayout title="Projects for fun">
        <CircleThreader />
    </SectionLayout>
</template>

<script setup lang="ts">
import SectionLayout from './SectionLayout.vue';

import CircleThreader from '../../../projects/CircleThreader/CircleThreader.vue';

defineOptions({
    name: 'FunProjects',
});
</script>
