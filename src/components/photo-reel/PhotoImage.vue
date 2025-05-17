<template>
    <div ref="photoRef" class="relative shrink-0 snap-center first:ml-10 last:mr-10">
        <ImageModaller :src="image.src" :alt="image.alt">
            <template #default="{ showModal }">
                <img
                    ref="imageRef"
                    class="shrink-0 cursor-pointer rounded-lg object-contain"
                    :src="image.src"
                    :alt="image.alt"
                    :style="photoStyle"
                    @click="showModal"
                />
            </template>
        </ImageModaller>
        <RespText
            v-if="image.withCaption"
            size="xs"
            class="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-t-lg bg-orange-200/80 py-1 text-center leading-5 text-black"
        >
            {{ image.alt }}
        </RespText>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import ImageModaller from './ImageModaller.vue';
import RespText from '../RespText.vue';

export type ImageDetails = {
    src: string;
    alt: string;
    withCaption?: boolean;
};

type PhotoImageProps = {
    image: ImageDetails;
    parentHeight: number;
    parentWidth: number;
    albumBuffer: number;
};

export type PhotoDim = { width: number; height: number };

type PhotoImageEmits = {
    scrolledTo: [PhotoDim];
};

defineOptions({
    name: 'PhotoImage',
});

const emits = defineEmits<PhotoImageEmits>();

const props = defineProps<PhotoImageProps>();

const photoRef = ref<HTMLDivElement>();

const imageRef = ref<HTMLImageElement>();

const aspectRatio = computed(() =>
    imageRef.value ? imageRef.value.naturalWidth / imageRef.value.naturalHeight : 1
);

const photoDim = computed(() => {
    if (!props.parentHeight || !props.parentWidth || !imageRef.value)
        return { height: 0, width: 0 };

    let width = (props.parentHeight - 20) * aspectRatio.value;

    if (width + props.albumBuffer > props.parentWidth) {
        width = props.parentWidth - props.albumBuffer;
        return { height: width / aspectRatio.value, width: width };
    }
    return { height: props.parentHeight, width: width };
});

const photoStyle = computed(() =>
    !photoDim.value.width && !photoDim.value.height
        ? { height: '100%', width: '100%' }
        : { height: `${photoDim.value.height}px`, width: `${photoDim.value.width}px` }
);

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting && imageRef.value) {
            emits('scrolledTo', photoDim.value);
        }
    },
    {
        threshold: 0.5,
    }
);

defineExpose({
    photoDim,
});

onMounted(() => {
    if (photoRef.value) {
        observer.observe(photoRef.value);
    }
});

onUnmounted(() => {
    observer.disconnect();
});
</script>
