<template>
    <div
        class="flex h-full w-full snap-mandatory snap-start flex-col overflow-y-clip text-relative-xl xs:text-relative-lg sm:pt-4 md:text-relative-xs"
    >
        <div v-if="!isLargeScreen" class="py-3 pl-8">
            <slot name="title">
                <h2 class="text-2xl">{{ title }}</h2>
            </slot>
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import useIsLargeScreen from '@/composables/useIsLargeScreen';

defineOptions({
    name: 'SectionLayout',
});

type SectionLayoutProps = {
    title?: string;
};
withDefaults(defineProps<SectionLayoutProps>(), {
    title: '',
});

const { isLargeScreen } = useIsLargeScreen();
</script>
