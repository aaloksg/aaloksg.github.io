<template>
    <SectionLayout title="Projects for fun">
        <div class="h-full w-full snap-y snap-mandatory overflow-y-auto">
            <!-- Circle Threader -->
            <SnapSection>
                <div
                    class="flex aspect-square h-full w-full flex-col px-4 pb-8 md:aspect-video lg:px-20"
                >
                    <CircleThreader />
                </div>
            </SnapSection>
            <!-- Fingerprint Aqi -->
            <SnapSection>
                <div class="flex h-full flex-col gap-4">
                    <TextChain
                        class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg font-bold lg:px-20"
                        :texts="aqiTitle"
                        as="h2"
                    />
                    <div
                        class="flex grow flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20"
                    >
                        <PhotoRoll
                            :images="[
                                {
                                    src: AqiVizImage1,
                                    alt: 'Fingerprint visualization of AQI data',
                                },
                                {
                                    src: AqiVizImage2,
                                    alt: 'Fingerprint visualization of AQI data with Ozone levels emphasized',
                                },
                            ]"
                        />

                        <div class="flex flex-col gap-4 text-justify">
                            <TextChain
                                v-for="(aqiPara, index) in aqiParas"
                                :key="`aqi-para-${index}`"
                                :texts="aqiPara"
                                class="text-lg sm:text-base"
                            />
                        </div>
                    </div>
                </div>
            </SnapSection>
            <!-- TicTacToe -->
            <SnapSection>
                <div class="flex h-full flex-col gap-4">
                    <TextChain
                        class="dark:bg-muted sticky top-0 z-10 w-full bg-white px-4 py-1 text-lg font-bold lg:px-20"
                        :texts="ticTacToeTitle"
                        as="h2"
                    />
                    <div
                        class="flex grow flex-col justify-center gap-6 px-4 pb-4 sm:gap-2 lg:px-20"
                    >
                        <TextChain class="text-lg sm:text-base" :texts="ticTacToeIntroPara" />
                        <PhotoRoll
                            :images="[
                                {
                                    src: TictactoeImage,
                                    alt: 'My tic-tac-toe game app',
                                },
                            ]"
                        />
                    </div>
                </div>
            </SnapSection>
            <SnapSection>
                <div
                    class="flex h-full flex-col justify-center gap-4 px-4 pb-4 text-justify lg:px-20"
                >
                    <TextChain
                        v-for="(ticTacToePara, index) in ticTacToeParas1"
                        :key="`tic-tac-toe-para-1-${index}`"
                        :texts="ticTacToePara"
                        class="text-lg sm:text-base"
                    />
                    <PhotoRoll
                        :images="[
                            {
                                src: MicMacMoeImage,
                                alt: 'Computer opponents Mic, Mac, and Moe.',
                            },
                            {
                                src: ticTacToeStats,
                                alt: 'A head to head statistic visualization',
                            },
                        ]"
                    />
                    <TextChain
                        v-for="(ticTacToePara, index) in ticTacToeParas2"
                        :key="`tic-tac-toe-para-2-${index}`"
                        :texts="ticTacToePara"
                        class="text-lg sm:text-base"
                    />
                </div>
            </SnapSection>

            <!-- Maya's Site -->
            <MayaPortfolio />
        </div>
    </SectionLayout>
</template>

<script setup lang="ts">
import SectionLayout from '@/views/layout/SectionLayout.vue';
import SnapSection from '@/views/layout/SnapSection.vue';
import TextChain, { type TextChainPart } from '@/components/TextChain.vue';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';
import MayaPortfolio from './MayaPortfolio.vue';

import AqiVizImage1 from '@/assets/images/AqiFingerprintViz.png';
import AqiVizImage2 from '@/assets/images/AqiFingerprintViz_2.png';
import TictactoeImage from '@/assets/images/TicTacToe.png';
import MicMacMoeImage from '@/assets/images/MicMacMoe.png';
import ticTacToeStats from '@/assets/images/tictactoe-stats.png';

import CircleThreader from '@/components/CircleThreader.vue';

defineOptions({
    name: 'FunProjects',
});

const aqiTitle: TextChainPart[] = [
    {
        text: 'AQI Fingerprint Visualization ',
        link: 'https://aaloksg.github.io/fingerprint-viz-aqi/',
        bold: true,
        italic: false,
    },
];
const aqiParas: TextChainPart[][] = [
    [
        {
            text: 'Conceived as a prototype during the brainstorming phase of the ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'Mobile Information Visualization',
            link: '',
            bold: false,
            italic: true,
        },
        {
            text: ' project, this visualization uses a fingerprint metaphor to compare the AQI data of two locations. Each path of the fingerprint denotes the level of a pollutant, and the colour of the path represents the severity of the pollution.',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'Check it out here!',
            link: 'https://aaloksg.github.io/fingerprint-viz-aqi/',
            bold: false,
            italic: false,
        },
    ],
    [
        {
            text: 'ReactJs, D3.js, TailwindCSS',
            link: '',
            bold: false,
            italic: true,
        },
    ],
];

const ticTacToeTitle: TextChainPart[] = [
    {
        text: 'Tic-Tac-Toe',
        link: 'https://aaloksg.github.io/tic-tac-toe/',
        bold: true,
        italic: false,
    },
];

const ticTacToeIntroPara: TextChainPart[] = [
    {
        text: 'I created this game while tinkering with ',
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: 'ReactJs',
        link: '',
        bold: false,
        italic: true,
    },
    {
        text: '. It evolved from a simple game of tic-tac-toe to include the ',
        link: '',
        bold: false,
        italic: false,
    },
    {
        text: 'Tic-Tac-Toe Bolt',
        link: 'https://youtu.be/sOiFPf42gMQ?si=j4SPPFDRiydO_uK5',
        bold: false,
        italic: true,
    },
    {
        text: ' variation, which blew my mind when I first saw a video of it on social media. ',
        link: '',
        bold: false,
        italic: false,
    },
];

const ticTacToeParas1: TextChainPart[][] = [
    [
        {
            text: 'I then expanded the game a little further to include three computer opponents (',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'Mick, Mack,',
            link: '',
            bold: false,
            italic: true,
        },
        {
            text: ' and ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'Moe',
            link: '',
            bold: false,
            italic: true,
        },
        {
            text: ') of varying difficulty levels, using a basic algorithm to implement their behaviors. ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'Mick, the easiest opponent, plays ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'randomly',
            link: '',
            bold: false,
            italic: true,
        },
        {
            text: '. The medium opponent, Mack, also plays randomly but ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'takes opportunities to win',
            link: '',
            bold: false,
            italic: true,
        },
        {
            text: '. Moe, the hardest opponent, ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'additionally blocks the player from winning.',
            link: '',
            bold: false,
            italic: true,
        },
    ],
];
const ticTacToeParas2: TextChainPart[][] = [
    [
        {
            text: 'I also added a statistics element to display the win-draw-loss and also head-to-head stats, combined with some ',
            link: '',
            bold: false,
            italic: false,
        },
        {
            text: 'D3.js',
            link: '',
            bold: false,
            italic: true,
        },
        {
            text: ' visualizations for flair.',
            link: '',
            bold: false,
            italic: false,
        },
    ],
    [
        {
            text: 'Check out the game here!',
            link: 'https://aaloksg.github.io/tic-tac-toe/',
            bold: false,
            italic: false,
        },
    ],
    [
        {
            text: 'ReactJs, D3.js, TailwindCSS',
            link: '',
            bold: false,
            italic: true,
        },
    ],
];
</script>
