<template>
    <SectionLayout title="Publication">
        <TextChain class="sticky top-0 w-full bg-white py-1 text-lg" :texts="publicationPara" />

        <div class="flex w-full flex-col gap-4 overflow-y-auto pb-8">
            <div
                class="flex w-full flex-col gap-4 sm:flex-row-reverse sm:items-start sm:pr-4 sm:pt-2"
            >
                <ImageModaller
                    image-src="src/assets/images/SimultaneousTech.png"
                    v-slot="{ onClick }"
                    caption="A still of the Simultaneous technique in use"
                >
                    <img
                        class="w-90vw h-auto max-h-full cursor-pointer object-cover text-center align-bottom sm:h-64 sm:w-auto sm:grow"
                        src="../../assets/images/SimultaneousTech.png"
                        v-on:click="onClick"
                    />
                </ImageModaller>
                <div class="flex shrink flex-col gap-4">
                    <TextChain
                        v-for="(para, index) in paras"
                        :key="`publication-text-para-${index}`"
                        :texts="para"
                        class="text-lg sm:text-base"
                    />
                </div>
            </div>

            <div class="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:pr-4 sm:pt-2">
                <ImageModaller
                    image-src="src/assets/images/3DJumping.png"
                    v-slot="{ onClick }"
                    caption="A still of the Anchor Ray technique in use"
                >
                    <img
                        class="w-90vw h-auto max-h-full cursor-pointer object-cover text-center align-bottom sm:h-64 sm:w-auto"
                        src="@/assets/images/3DJumping.png"
                        v-on:click="onClick"
                    />
                </ImageModaller>
                <div class="flex shrink flex-col gap-4">
                    <TextChain
                        v-for="(para, index) in paras2"
                        :key="`publication-text-para-${index}`"
                        :texts="para"
                        class="text-lg sm:text-base"
                    />
                </div>
            </div>
        </div>
    </SectionLayout>
</template>

<script setup lang="ts">
import TextChain, { type TextChainPart } from '../../components/TextChain.vue';
import ImageModaller from '@/components/ImageModaller.vue';
import SectionLayout from './SectionLayout.vue';

defineOptions({
    name: 'PublicationsSection',
});

const publicationPara: TextChainPart[] = [
    {
        text: 'Gaining the High Ground: Teleportation to Mid-Air Targets in Immersive Virtual Environments',
        link: 'https://doi.org/10.1109/TVCG.2023.3247114',
        bold: true,
    },
];

const paras: TextChainPart[][] = [
    [
        {
            text: `Three adaptations of the classic teleportation metaphor that enable the user to travel to mid-air targets are presented. The three techniques differ in the extent to which elevation changes are integrated into the conventional target selection process. Elevation can be specified either simultaneously, as a connected second step, or separately from horizontal movements. From the results of a user study with 30 participants, initial design guidelines for mid-air navigation techniques were defined.`,
            link: '',
            bold: false,
        },
    ],
    [
        {
            text: 'This work received an ',
            link: '',
            bold: false,
        },
        {
            text: 'Honourable Mention for the Best Paper',
            link: 'https://ieeevr.org/2023/awards/conference-awards/#conference-honorable',
            bold: false,
            italic: true,
        },
        {
            text: ' at the ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'IEEE VR 2023 Conference Awards',
            link: 'https://ieeevr.org/2023/awards/conference-awards/',
            bold: false,
            italic: true,
        },
        {
            text: '.',
            link: '',
            bold: false,
            italic: false,
        },
    ],
];

const paras2: TextChainPart[][] = [
    [
        {
            text: `The body of work that went into my Master's thesis - `,
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'Mid-Air Jumping through Immersive Virtual Environments',
            link: '',
            bold: true,
            italic: false,
        },
        {
            text: ' laid the foundation for this research paper.',
            link: '',
            bold: true,
            italic: false,
        },
    ],
    [
        {
            text: 'My thesis investigated how common jumping implementations can be extended to integrate the specification of height as an additional degree of freedom in target specification. Based on related research, I created ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'three novel mid-air jumping techniques',
            link: 'https://www.youtube.com/playlist?list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y',
            bold: false,
            italic: true,
        },
        {
            text: ' to realize mid-air jumping – the Elevator Ray, the Anchor Ray and the Height Ray.',
            link: '',
            bold: false,
            italic: false,
        },
    ],
    [
        {
            text: 'An exploratory study was designed and conducted with 15 participants to evaluate and compare the three techniques for various quality factors. The results of the study indicated that all techniques performed adequately and successfully kept simulator sickness and feelings of vertigo or fear of heights to a minimum, and encouraged the investigation of a combination of the Anchor Ray and the Elevator Ray as a mid-air jumping technique.',
            link: '',
            bold: false,
            italic: false,
        },
    ],
];
</script>
