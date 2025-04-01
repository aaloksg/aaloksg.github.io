<template>
    <SectionLayout title="Projects for fun">
        <div class="flex flex-col gap-4 overflow-y-auto px-4 pb-8 lg:px-20">
            <div class="flex aspect-square w-full grow flex-col md:aspect-video">
                <CircleThreader />
            </div>
            <div class="flex w-full grow flex-col gap-2">
                <h2 class="text-xl text-muted dark:text-white">AQI Fingerprint Visualisation</h2>
                <iframe
                    src="https://aaloksg.github.io/fingerprint-viz-aqi/"
                    title="Aqi fingerprint visualisation"
                    class="aspect-[1/2] h-full w-full rounded-xl border-2 border-solid border-primary md:aspect-video md:border-4"
                ></iframe>
            </div>
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
