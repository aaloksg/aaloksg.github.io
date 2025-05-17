<template>
    <img
        class="h-auto max-h-full cursor-pointer rounded-md object-cover text-center align-bottom sm:w-auto"
        :class="{
            'self-center': centerVertically,
            'w-[90vw] sm:h-64 lg:h-80': size === 'medium',
            'w-[50vw] sm:h-40 lg:h-48': size === 'small',
        }"
        :src="src"
        @click.stop="onClick"
    />
    <Teleport to="#modal-container">
        <div
            v-if="open"
            class="fixed top-0 left-0 z-1000 h-screen w-screen bg-black/80"
            v-on:click="open = false"
        >
            <div class="flex h-full w-full flex-col items-center justify-center">
                <img
                    ref="imageRef"
                    :src="src"
                    :style="[
                        imageDimensionStyle,
                        marginAdjustmentStyle,
                        isRotated ? 'transform: rotate(90deg)' : '',
                    ]"
                    class="rounded-md"
                    v-on:click.stop="showCaption = !showCaption"
                />
                <Transition>
                    <p
                        v-if="showCaption"
                        class="fixed bottom-4 rounded-2xl bg-black/50 p-4 text-center text-white"
                        :class="[
                            isPortraitMode
                                ? 'text-relative-base xs:text-relative-sm md:text-relative-xxs'
                                : 'text-xs',
                        ]"
                    >
                        {{ caption }}
                    </p>
                </Transition>
                <MDIcon
                    :icon="CloseIcon"
                    class="text-light fixed top-4 right-4 h-4 w-4 cursor-pointer hover:opacity-60"
                    v-on:click.stop="open = false"
                />
                <MDIcon
                    :icon="isRotated ? RotateLeftIcon : RotateRightIcon"
                    class="text-light fixed right-4 bottom-4 h-4 w-4 cursor-pointer hover:opacity-60"
                    v-on:click.stop="isRotated = !isRotated"
                />
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useScreenOrientation } from '@vueuse/core';
import { ref, computed, onMounted } from 'vue';

import CloseIcon from '@material-symbols/svg-600/rounded/close.svg';
import RotateLeftIcon from '@material-symbols/svg-600/rounded/rotate_left.svg';
import RotateRightIcon from '@material-symbols/svg-600/rounded/rotate_right.svg';
import MDIcon from './MDIcon.vue';

const IMAGE_MARGINS = 20; // in px
defineOptions({
    name: 'ImageModaller',
});

type ImageModallerProps = {
    src: string;
    caption?: string;
    centerVertically?: boolean;
    size?: 'small' | 'medium';
};

withDefaults(defineProps<ImageModallerProps>(), {
    caption: '',
    size: 'medium',
});

const { orientation } = useScreenOrientation();
const isPortraitMode = computed(
    () =>
        orientation.value && ['portrait-primary', 'portrait-secondary'].includes(orientation.value)
);

const imageRef = ref<HTMLImageElement>();
const showCaption = ref(true);
const open = ref(false);
const isRotated = ref(false);
const windowHeight = ref(0);
const windowWidth = ref(0);
const setDimensions = () => {
    windowHeight.value = window.innerHeight - IMAGE_MARGINS;
    windowWidth.value = window.innerWidth - IMAGE_MARGINS;
};
const height = computed(() => (isRotated.value ? windowWidth.value : windowHeight.value));
const width = computed(() => (isRotated.value ? windowHeight.value : windowWidth.value));
const onClick = () => {
    setDimensions();
    open.value = true;
    showCaption.value = true;
    isRotated.value = false;
};
const imageDimensionStyle = computed(() => {
    if ((isPortraitMode.value && !isRotated.value) || (!isPortraitMode.value && isRotated.value)) {
        // returning width.
        let widthToSet = width.value;
        if (imageRef.value) {
            const imageHeight = imageRef.value.naturalHeight;
            const imageWidth = imageRef.value.naturalWidth;
            const newHeight = (imageHeight / imageWidth) * widthToSet;
            if (newHeight > height.value) {
                widthToSet = (imageWidth / imageHeight) * height.value;
            }
        }
        return 'width:' + widthToSet + 'px';
    } else {
        // returning height
        let heightToSet = height.value;
        if (imageRef.value) {
            const imageHeight = imageRef.value.naturalHeight;
            const imageWidth = imageRef.value.naturalWidth;
            const newWidth = (imageWidth / imageHeight) * heightToSet;
            if (newWidth > width.value) {
                heightToSet = (imageHeight / imageWidth) * width.value;
            }
        }
        return 'height:' + heightToSet + 'px';
    }
});

const marginAdjustmentStyle = computed(() => {
    return isPortraitMode.value ? 'margin-top: -15%' : '';
});

onMounted(() => {
    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'escape' && open.value) {
            open.value = false;
        }
    });
});
</script>
