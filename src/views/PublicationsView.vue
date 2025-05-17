<template>
    <SectionLayout title="Publication">
        <div class="h-full w-full snap-y snap-mandatory overflow-y-auto">
            <SnapSection>
                <div class="flex h-full flex-col">
                    <TextChain
                        class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg lg:px-20"
                        :texts="publicationPara"
                    />
                    <div
                        class="flex h-full flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20"
                    >
                        <PhotoRoll
                            :images="[
                                {
                                    src: SimultaneousTechImage,
                                    alt: 'A still of the Simultaneous technique in use',
                                },
                            ]"
                        />
                        <div class="flex flex-col gap-4">
                            <TextChain
                                v-for="(para, index) in paras"
                                :key="`publication-text-para-1-${index}`"
                                :texts="para"
                                class="text-lg sm:text-base"
                            />
                        </div>
                    </div>
                </div>
            </SnapSection>
            <SnapSection>
                <div class="flex h-full flex-col justify-center gap-10 px-4 sm:pb-4 lg:px-20">
                    <TextChain
                        v-for="(para, index) in paras2"
                        :key="`publication-text-para-2-${index}`"
                        :texts="para"
                        class="text-lg sm:text-base"
                    />
                </div>
            </SnapSection>
            <SnapSection>
                <div class="flex h-full flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20">
                    <div
                        class="aspect-video h-auto w-[90vw] grow self-center sm:h-40 md:h-60 lg:h-80"
                    >
                        <iframe
                            class="h-full w-full"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/videoseries?si=kxhMz-36Mkb1tW9p&amp;list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div class="flex shrink flex-col gap-4">
                        <TextChain
                            v-for="(para, index) in paras3"
                            :key="`publication-text-para-3-${index}`"
                            :texts="para"
                            class="text-lg sm:text-base"
                        />
                    </div>
                </div>
            </SnapSection>
        </div>
    </SectionLayout>
</template>

<script setup lang="ts">
import TextChain, { type TextChainPart } from '@/components/TextChain.vue';
import SectionLayout from './layout/SectionLayout.vue';
import SnapSection from './layout/SnapSection.vue';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

import SimultaneousTechImage from '@/assets/images/SimultaneousTech.png';

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
];

const paras2: TextChainPart[][] = [
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
            // link: 'https://www.youtube.com/playlist?list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y',
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
];

const paras3: TextChainPart[][] = [
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
