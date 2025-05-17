<template>
    <div
        ref="parentRef"
        class="absolute top-0 left-0 flex h-full max-h-full w-full max-w-full items-center justify-center"
    >
        <div
            class="outline-muted flex h-full rounded-lg outline-2 transition-all duration-500 dark:bg-gray-950/50 dark:outline-white"
            :style="{ width: albumDim.width }"
        >
            <div
                ref="albumRef"
                class="flex h-full w-full snap-x snap-mandatory items-center gap-5 overflow-x-auto overflow-y-hidden"
                :class="{ 'justify-center': images.length === 1 }"
            >
                <PhotoImage
                    v-for="(image, index) in images"
                    ref="photosRef"
                    :key="`photo-roll-image-${image}`"
                    :image="image"
                    :parent-height="parentHeight - 10"
                    :parent-width="parentWidth"
                    :album-buffer="ALBUM_BUFFER_WIDTH"
                    @scrolled-to="(...args) => setAlbumDim(index, ...args)"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, useTemplateRef, watch } from 'vue';
import PhotoImage, { type ImageDetails, type PhotoDim } from './PhotoImage.vue';
import { useElementSize, useElementVisibility } from '@vueuse/core';

const ALBUM_BUFFER_WIDTH = 100; // px

type PhotoRollProps = {
    images: ImageDetails[];
};

defineProps<PhotoRollProps>();

const parentRef = ref<HTMLDivElement>();

const albumRef = useTemplateRef('albumRef');

const isAlbumVisible = useElementVisibility(albumRef);

const photosRef = ref<InstanceType<typeof PhotoImage>[]>([]);

const { width: parentWidth, height: parentHeight } = useElementSize(parentRef);

const albumDim = reactive({ height: '100%', width: '100%' });

const currentPhotoIndex = ref(0);

const setAlbumDim = (index: number, { height, width }: PhotoDim): void => {
    currentPhotoIndex.value = index;
    albumDim.width = `${width + ALBUM_BUFFER_WIDTH}px`;
    albumDim.height = `${height}px`;
};

watch(
    () => isAlbumVisible.value,
    (isVisible) => {
        if (!isVisible) return;
        const photoDim = photosRef.value?.[currentPhotoIndex.value]?.photoDim;
        if (!photoDim) return;
        setAlbumDim(currentPhotoIndex.value, photoDim);
    }
);
</script>
