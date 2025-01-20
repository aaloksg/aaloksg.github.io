<template>
    <SectionLayout title="Projects">
        <div class="flex flex-col gap-8 overflow-y-auto pb-8 sm:pr-2">
            <div ref="moInVizBody" class="flex flex-col gap-4 pr-2">
                <TextChain
                    class="text-lg"
                    :class="[
                        currentStickyTitle === 'MoInViz' ? 'sticky top-0 w-full bg-white py-1' : '',
                    ]"
                    :texts="moInVizTitle"
                />
                <div class="flex flex-col gap-4 sm:flex-row-reverse">
                    <ImageModaller
                        :src="MoInVizImage"
                        center-vertically
                        caption="Visualizing waste generation with Parallel Coordinates on mobile devices"
                    />

                    <div class="flex flex-col gap-4 text-justify">
                        <TextChain :texts="moInVizPara1" class="text-lg sm:text-base" />
                        <TextChain
                            as="ul"
                            :texts="moInVizList"
                            class="list-disc pl-2 text-base sm:text-sm"
                        />

                        <TextChain :texts="moInVizPara2" class="text-lg sm:text-base" />
                    </div>
                </div>
            </div>

            <div ref="dataVizBody" class="flex flex-col gap-4 pr-2">
                <TextChain
                    class="text-lg"
                    :class="[
                        currentStickyTitle === 'DataViz' ? 'sticky top-0 w-full bg-white py-1' : '',
                    ]"
                    :texts="dataVizTitle"
                />
                <div class="flex flex-col gap-4 sm:flex-row">
                    <ImageModaller
                        :src="F1VizImage"
                        center-vertically
                        caption="A visualisation of the trajectory of the 2004 Monaco Grand Prix"
                    />
                    <div class="flex flex-col gap-4 text-justify">
                        <TextChain :texts="dataVizPara" class="text-lg sm:text-base" />
                    </div>
                </div>
            </div>

            <div ref="techInHomeBody" class="flex flex-col gap-4 pr-2">
                <TextChain
                    class="text-lg"
                    :class="[
                        currentStickyTitle === 'TechInHome'
                            ? 'sticky -top-0.5 w-full bg-white py-1'
                            : '',
                    ]"
                    :texts="techInHomeTitle"
                />
                <div class="flex flex-col gap-4 sm:flex-row-reverse">
                    <ImageModaller
                        :src="SpiritualityPoster"
                        caption="A poster summarising the study"
                    />

                    <div class="flex flex-col gap-4">
                        <TextChain :texts="techInHomePara" class="text-lg sm:text-base" />
                    </div>
                </div>
            </div>
        </div>
    </SectionLayout>
</template>

<script setup lang="ts">
import TextChain, { type TextChainPart } from '@/components/TextChain.vue';
import ImageModaller from '@/components/ImageModaller.vue';
import SectionLayout from './layout/SectionLayout.vue';
import { computed, ref, type Ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';

import MoInVizImage from '@/assets/images/MoInViz-Waste-Paracoords.png';
import F1VizImage from '@/assets/images/F1Viz.png';
import SpiritualityPoster from '@/assets/images/ModernTech-Spirituality-Poster.png';

defineOptions({
    name: 'PublicationsSection',
});

type Titles = 'MoInViz' | 'DataViz' | 'TechInHome';
type ItemInView = {
    title: Titles;
    elementRef: Ref<HTMLElement | undefined>;
    visibility: Ref<boolean>;
};

const moInVizBody = ref<HTMLElement>();
const dataVizBody = ref<HTMLElement>();
const techInHomeBody = ref<HTMLElement>();

const projectItems: ItemInView[] = [
    {
        title: 'MoInViz',
        elementRef: moInVizBody,
        visibility: useElementVisibility(moInVizBody),
    },
    {
        title: 'DataViz',
        elementRef: dataVizBody,
        visibility: useElementVisibility(dataVizBody),
    },
    {
        title: 'TechInHome',
        elementRef: techInHomeBody,
        visibility: useElementVisibility(techInHomeBody),
    },
];

const currentStickyTitle = computed(
    () => projectItems.find((item) => item.visibility.value)?.title
);

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
        text: '- using large interactable areas and staggered handles to combat fat finger problems',
        link: '',
        bold: false,
        italic: false,
        type: 'li',
    },
    {
        text: '- using tabs instead of menu buttons and using portrait mode to use space efficiently',
        link: '',
        bold: false,
        italic: false,
        type: 'li',
    },
    {
        text: '- designing to avoid interference with screen-edge gestures',
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
        link: 'https://moin.vrsys.org/MoInVisApp.apk',
        linkHint: 'Download the app - https://moin.vrsys.org/MoInVisApp.apk',
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
        text: 'Check it out with a mobile browser here!',
        link: 'https://moin.vrsys.org/',
        bold: false,
        italic: true,
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
        link: '@/projects/F1DataVis/index.html',
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
        text: 'We collected in-depth information that can guide future designs for spirituality-relevant applications.',
        link: '',
        bold: false,
        italic: false,
    },
];
</script>
