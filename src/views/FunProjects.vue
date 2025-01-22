<template>
    <SectionLayout title="Projects for fun">
        <div class="flex h-auto w-full grow flex-col overflow-hidden px-4 pb-8 lg:px-20">
            <CircleThreader />
        </div>
    </SectionLayout>
</template>

<script setup lang="ts">
import SectionLayout from './layout/SectionLayout.vue';

import CircleThreader from '@/components/CircleThreader.vue';

defineOptions({
    name: 'FunProjects',
});
</script>
