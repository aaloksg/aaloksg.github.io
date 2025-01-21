<template>
    <div class="flex items-center gap-1">
        <h2 class="text-xl text-muted">Circle Threader</h2>
        <MDIcon
            :icon="muted ? VolumeOffIcon : VolumeUpIcon"
            class="h-9 w-9 cursor-pointer text-primary hover:text-accent"
            @click.stop="toggleMute"
        />
    </div>
    <p class="text-sm text-muted">Hit the ball against the boundary.</p>
    <svg ref="svgElementRef" id="circle-threader-svg" class="h-full w-full"></svg>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue';
import CircleThreader from './scripts/circle-threader/index';
import VolumeOffIcon from '@material-symbols/svg-600/rounded/volume_off.svg';
import VolumeUpIcon from '@material-symbols/svg-600/rounded/volume_up.svg';

import MDIcon from '@/components/icons/MDIcon.vue';

defineOptions({
    name: 'CircleThreader',
});

const svgElementRef = ref();
const muted = ref(false);
const circleThreader = ref<CircleThreader>();

const toggleMute = () => {
    if (muted.value) {
        muted.value = false;
        circleThreader.value?.unmute();
    } else {
        muted.value = true;
        circleThreader.value?.mute();
    }
};

watch(
    () => svgElementRef.value,
    () => {
        if (svgElementRef.value) {
            circleThreader.value = new CircleThreader(svgElementRef.value);
            circleThreader.value.unmute();

            svgElementRef.value.addEventListener('dblclick', () => {
                // Reset
                circleThreader.value?.stop();
                circleThreader.value?.cleanUp();
                circleThreader.value = new CircleThreader(svgElementRef.value);
            });
        }
    }
);

onUnmounted(() => {
    circleThreader.value?.cleanUp();
});
</script>
