<template>
    <div ref="sectionRef" class="group relative h-full w-full snap-center">
        <slot />
        <ButtonItem
            variant="generic"
            class="absolute top-3 right-3 z-20 rounded-full bg-orange-300/50 p-3 group-first:hidden hover:bg-orange-300/100 active:bg-orange-300/100"
            @click.stop="scrollUp"
        >
            <MDIcon :icon="ArrowUpIcon" class="h-6 w-6 text-black" />
        </ButtonItem>
        <ButtonItem
            variant="generic"
            class="absolute right-3 bottom-3 z-20 rounded-full bg-orange-300/50 p-3 group-last:hidden hover:bg-orange-300/100 active:bg-orange-300/100"
            @click.stop="scrollDown"
        >
            <MDIcon :icon="ArrowDownIcon" class="h-6 w-6 text-black" />
        </ButtonItem>
    </div>
</template>

<script setup lang="ts">
import { useElementSize, useScroll } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import ButtonItem from '@/components/ButtonItem.vue';
import MDIcon from '@/components/MDIcon.vue';
import ArrowUpIcon from '@material-symbols/svg-600/rounded/arrow_upward.svg';
import ArrowDownIcon from '@material-symbols/svg-600/rounded/arrow_downward.svg';

type SnapSectionEmits = {
    scrolledTo: [];
};

defineOptions({
    name: 'SnapSection',
});

const emits = defineEmits<SnapSectionEmits>();

const sectionRef = ref<HTMLDivElement>();

const { height } = useElementSize(sectionRef);

const parentElement = computed(() => sectionRef.value?.parentElement);

const { y: scrollY } = useScroll(parentElement, { behavior: 'smooth' });

const scrollUp = () => {
    scrollY.value = scrollY.value - height.value;
};
const scrollDown = () => {
    scrollY.value = scrollY.value + height.value;
};

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            emits('scrolledTo');
        }
    },
    {
        threshold: 0.6,
    }
);

onMounted(() => {
    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});

onUnmounted(() => {
    observer.disconnect();
});
</script>
