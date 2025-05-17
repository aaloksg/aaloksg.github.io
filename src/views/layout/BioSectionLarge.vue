<template>
    <div class="flex h-full w-full items-start overflow-y-auto px-8 pt-4 lg:px-20 lg:pt-8">
        <div
            class="flex h-full w-full flex-col items-center gap-4 pr-4 text-center lg:gap-16 lg:pr-8"
        >
            <h1 class="text-primary text-3xl font-bold lg:text-4xl">Aalok Shashidhar Gokhale</h1>
            <div class="flex w-full flex-col items-center gap-2 text-center lg:grow lg:gap-4">
                <TextChain
                    v-for="(para, index) in descriptionPara"
                    :key="`bio-text-para-description-${index}`"
                    :texts="para"
                    class="self-start text-lg text-pretty sm:text-base"
                />
            </div>
        </div>
        <div class="flex w-full flex-col items-center gap-4 pl-4">
            <img
                class="border-primary aspect-square h-64 rounded-full border-4 border-solid object-cover align-bottom"
                src="../../assets/images/bio-image.png"
            />
            <div class="flex items-center justify-center gap-10 text-center">
                <HyperlinkText
                    variant="simple"
                    url="https://www.linkedin.com/in/aalok-gokhale-b2031560/"
                >
                    <MDIcon :icon="LinkedinIcon" class="h-6 w-6 text-inherit" />
                </HyperlinkText>
                <HyperlinkText variant="simple" url="mailto:aaloksg@gmail.com">
                    <MDIcon :icon="MailIcon" class="h-8 w-8 text-inherit" />
                </HyperlinkText>
                <HyperlinkText
                    variant="simple"
                    url="https://instagram.com/aaloksg?igshid=ZGUzMzM3NWJiOQ=="
                >
                    <MDIcon :icon="InstagramIcon" class="h-6 w-6 text-inherit" />
                </HyperlinkText>
            </div>
            <TextChain
                v-for="(para, index) in aboutParas"
                :key="`bio-text-para-about-${index}`"
                :texts="para"
                class="text-center"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import HyperlinkText from '../../components/HyperlinkText.vue';
import TextChain, { type TextChainPart } from '../../components/TextChain.vue';

import MailIcon from '@material-symbols/svg-600/rounded/mail.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

import MDIcon from '@/components/MDIcon.vue';

defineOptions({
    name: 'BioSectionLarge',
});

const descriptionPara: TextChainPart[][] = [
    [
        {
            text: 'I am a ',
            link: '',
            bold: false,
        },
        {
            text: 'Frontend Web Developer',
            link: '',
            bold: true,
        },
        {
            text: ' with ',
            link: '',
            bold: false,
        },
        {
            text: '10+ years',
            link: '',
            bold: true,
        },
        {
            text: ' of experience. I completed my Master’s degree in Human-Computer Interaction at Bauhaus-Universität, Germany, where I worked on projects in the fields of Virtual Reality, Visualization, and UCD & qualitative and quantitative research.',
            link: '',
            bold: false,
        },
    ],
    [
        {
            text: ' I am particularly interested in and enjoy working on/with Virtual Reality, Visualization and JavaScript, and am passionate about creating innovative and interactive digital solutions that enhance user experience and satisfaction.',
            link: '',
            bold: false,
        },
    ],
    [
        {
            text: 'Former Web Developer at',
            link: '',
            bold: false,
        },
        {
            text: 'rooom AG',
            link: 'https://www.rooom.com/',
            bold: false,
        },
        {
            text: 'working on Frontend UI, and building 3D and virtual web experiences for the rooom',
            link: '',
            bold: false,
        },
        {
            text: 'Spaces',
            link: 'https://www.rooom.com/rooom-spaces',
            bold: false,
        },
        {
            text: 'and',
            link: '',
            bold: false,
        },
        {
            text: 'Products',
            link: 'https://www.rooom.com/rooom-products',
            bold: false,
        },
        {
            text: 'team.',
            link: '',
            bold: false,
        },
    ],
    [
        {
            text: 'Former Software Developer at Siemens, where I built real-time SCADA web applications and picked up data visualization concepts and skills in building responsive, cross-device and cross-browser web UIs.',
            link: '',
            bold: false,
        },
    ],
];

const aboutParas: TextChainPart[][] = [
    [
        {
            text: 'MSc',
            link: '',
            bold: true,
        },
        {
            text: ' in ',
            link: '',
            bold: false,
        },
        {
            text: 'Human-Computer Interaction',
            link: '',
            bold: true,
        },
        {
            text: ', Bauhaus Universität, Weimar, Germany.',
            link: '',
            bold: false,
        },
    ],
    [
        {
            text: 'B.E.',
            link: '',
            bold: true,
        },
        {
            text: ' in ',
            link: '',
            bold: false,
        },
        {
            text: 'Electronics and Communication Engineering',
            link: '',
            bold: true,
        },
        {
            text: ', Visvesvaraya Technological University, India.',
            link: '',
            bold: false,
        },
    ],
];
</script>
