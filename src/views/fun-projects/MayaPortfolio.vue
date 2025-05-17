<template>
    <!-- Maya's Site -->
    <SnapSection>
        <div class="flex h-full flex-col gap-4">
            <TextChain
                class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg font-bold lg:px-20"
                :texts="title"
                as="h2"
            />
            <div class="flex grow flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20">
                <div class="flex flex-col gap-4 text-justify">
                    <TextChain
                        v-for="(para, index) in paras1"
                        :key="`mayas-work-para-1-${index}`"
                        :texts="para"
                        class="text-lg sm:text-base"
                    />
                </div>
                <PhotoRoll
                    :images="[
                        {
                            src: MayaPortfolio,
                            alt: `Maya Balasubramanya's website`,
                        },
                    ]"
                />
                <div class="flex flex-col gap-4 text-justify">
                    <TextChain
                        v-for="(para, index) in paras2"
                        :key="`mayas-work-para-2-${index}`"
                        :texts="para"
                        class="text-lg sm:text-base"
                    />
                </div>
            </div>
        </div>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/views/layout/SnapSection.vue';
import TextChain, { type TextChainPart } from '@/components/TextChain.vue';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

import MayaPortfolio from '@/assets/images/maya-portfolio.png';

defineOptions({
    name: 'FunProjects',
});

const title: TextChainPart[] = [
    {
        text: `Maya Balasubramanya's Website`,
        link: 'https://b-maya.github.io/',
        bold: true,
        italic: false,
    },
];
const paras1: TextChainPart[][] = [
    [
        {
            text: 'I made this website for my amazing and talented wife, Maya Balasubramanya. A woman of many trades, she is a qualitative researcher, writer, content designer & strategist, and a UX researcher, to mention a few. This site is a work in progress, and I am still updating it with her many works and projects.',
            link: '',
            bold: false,
            italic: false,
        },
    ],
];
const paras2: TextChainPart[][] = [
    [
        {
            text: 'If you are interested in collaborating with her, please reach out to her via the contact information on her site ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'here',
            link: 'https://b-maya.github.io/',
            bold: false,
            italic: false,
        },
        {
            text: '.',
            bold: false,
            italic: false,
        },
    ],
    [
        {
            text: 'VueJs, TailwindCSS',
            link: '',
            bold: false,
            italic: true,
        },
    ],
];
</script>
