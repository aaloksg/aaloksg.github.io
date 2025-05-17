<template>
    <SectionLayout title="Projects">
        <div class="h-full w-full snap-y snap-mandatory overflow-y-auto">
            <SnapSection>
                <div class="flex h-full flex-col">
                    <TextChain
                        class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg font-bold lg:px-20"
                        :texts="moInVizTitle"
                    />
                    <div
                        class="flex h-full flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20"
                    >
                        <PhotoRoll
                            :images="[
                                {
                                    src: MoInVizImage,
                                    alt: 'Visualizing waste generation with Parallel Coordinates on mobile devices',
                                },
                            ]"
                        />
                        <div class="flex flex-col gap-4">
                            <TextChain :texts="moInVizPara1" class="text-lg sm:text-base" />
                            <TextChain
                                as="ul"
                                :texts="moInVizList"
                                class="flex list-disc flex-col gap-2 pl-4 text-base sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </SnapSection>
            <SnapSection>
                <div class="flex h-full flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20">
                    <PhotoRoll
                        :images="[
                            {
                                src: MoInVizQR,
                                alt: 'QR code with a link to the visualization',
                            },
                        ]"
                    />
                    <TextChain :texts="moInVizPara2" class="text-lg sm:text-base" />
                </div>
            </SnapSection>

            <SnapSection>
                <div class="flex h-full flex-col">
                    <TextChain
                        class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg font-bold lg:px-20"
                        :texts="dataVizTitle"
                    />
                    <div
                        class="flex h-full flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20"
                    >
                        <PhotoRoll
                            :images="[
                                {
                                    src: F1VizImage,
                                    alt: 'A visualization of the trajectory of the 2004 Monaco Grand Prix',
                                },
                            ]"
                            class="h-90"
                        />
                        <div class="flex flex-col gap-4 text-justify">
                            <TextChain :texts="dataVizPara" class="text-lg sm:text-base" />
                        </div>
                    </div>
                </div>
            </SnapSection>
            <SnapSection>
                <div class="flex h-full flex-col gap-4">
                    <TextChain
                        class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg font-bold lg:px-20"
                        :texts="techInHomeTitle"
                    />
                    <div
                        class="flex grow flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20"
                    >
                        <PhotoRoll
                            :images="[
                                {
                                    src: SpiritualityPoster,
                                    alt: 'A poster summarising the study',
                                },
                            ]"
                        />

                        <div class="flex flex-col gap-4 text-justify">
                            <TextChain :texts="techInHomePara" class="text-lg sm:text-base" />
                        </div>
                    </div>
                </div>
            </SnapSection>
        </div>
    </SectionLayout>
</template>

<script setup lang="ts">
import TextChain, { type TextChainPart } from '@/components/TextChain.vue';
import SectionLayout from './layout/SectionLayout.vue';

import MoInVizImage from '@/assets/images/MoInViz-Waste-Paracoords.png';
import MoInVizQR from '@/assets/images/qrcode_moinviz.png';
import F1VizImage from '@/assets/images/F1Viz.png';
import SpiritualityPoster from '@/assets/images/ModernTech-Spirituality-Poster.png';
import SnapSection from './layout/SnapSection.vue';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

defineOptions({
    name: 'PublicationsSection',
});

const moInVizTitle: TextChainPart[] = [
    {
        text: 'Mobile Information Visualization Project',
        link: '',
        bold: true,
    },
];
const moInVizPara1: TextChainPart[] = [
    {
        text: `In a team of four, we researched common mobile problems faced such as the 'fat finger problem', limited space and lack of hover states. A UI/UX style-guide for mobile visualizations was designed, incorporating solutions such as `,
        link: '',
        bold: false,
        italic: false,
    },
];
const moInVizList: TextChainPart[] = [
    {
        text: 'using large interactive/touchable areas and staggered handles to combat fat finger problems',
        link: '',
        bold: false,
        italic: false,
        type: 'li',
    },
    {
        text: 'using tabs instead of menu buttons and using portrait mode to utilize space efficiently',
        link: '',
        bold: false,
        italic: false,
        type: 'li',
    },
    {
        text: 'designing to avoid interference with screen-edge gestures',
        link: '',
        bold: false,
        italic: false,
        type: 'li',
    },
];
const moInVizPara2: TextChainPart[] = [
    {
        text: 'We ',
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: 'built an app',
        link: 'https://github.com/aaloksg/moin/blob/main/MoInVisApp.apk',
        linkHint: 'Download the app - https://github.com/aaloksg/moin/blob/main/MoInVisApp.apk',
        bold: false,
        italic: true,
    },
    {
        text: ' that visualized the amounts of different kinds of waste generated by European countries,  using a parallel coordinates visualization. ',
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: 'Check it out on a mobile browser here',
        link: 'https://aaloksg.github.io/moin/',
        bold: false,
        italic: true,
    },
    {
        text: ', or scan the QR code.',
        link: '',
        bold: false,
        italic: false,
    },
];

const dataVizTitle: TextChainPart[] = [
    {
        text: 'F1 Data Visualization with ParaCoords',
        link: '',
        bold: true,
    },
];
const dataVizPara: TextChainPart[] = [
    {
        text: 'In a team of two, I created an ',
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: 'interactive parallel coordinates visualization',
        link: 'https://aaloksg.github.io/f1-data-viz/',
        bold: false,
        italic: true,
    },
    {
        text: ' visualizing more than 20 years of Formula1 data. From 1996 to 2017, the journeys of Formula1 teams in each season, and the stories of F1 drivers in each grand prix was visualised.',
        link: '',
        bold: false,
        italic: false,
    },
];

const techInHomeTitle: TextChainPart[] = [
    {
        text: 'Technology in the Home – ',
        link: '',
        bold: true,
        italic: false,
    },
    {
        text: 'Modern Technology and Spirituality',
        link: '',
        bold: true,
        italic: true,
    },
];

const techInHomePara: TextChainPart[] = [
    {
        text: `In a team of 3, I used qualitative research methods to study how modern technology influences one’s spiritual practices in the home. `,
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: `Technological improvements have impacted the way we do everyday activities at home, including one's spiritual practices. We conducted ten semi-structured interviews with Christian (Protestant and Catholic), Islamic, and Hindu participants from various age groups, with various levels of expertise in technological use. `,
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: 'We collected in-depth information that can guide future designs for spirituality-related applications.',
        link: '',
        bold: false,
        italic: false,
    },
];
</script>
