<template>
    <SectionLayout class="justify-between text-center">
        <template #title>
            <h1 class="text-primary align-text-top text-3xl font-bold">Aalok Shashidhar Gokhale</h1>
        </template>
        <template #default>
            <div
                class="flex h-auto w-full grow flex-col justify-between gap-2 overflow-y-auto p-4 sm:gap-4"
            >
                <TextChain
                    v-for="(para, index) in paras"
                    :key="`bio-text-para-${index}`"
                    :texts="para"
                />
                <TextChain
                    v-for="(para, index) in previousExperiences"
                    :key="`bio-text-previous-experiences-${index}`"
                    :texts="para"
                />

                <div class="flex w-full items-center justify-center gap-8 pb-8">
                    <div class="align-center flex flex-col justify-center gap-4">
                        <HyperlinkText
                            variant="simple"
                            url="https://www.linkedin.com/in/aalok-gokhale-b2031560/"
                        >
                            <MDIcon :icon="LinkedinIcon" class="h-10 w-10 text-inherit" />
                        </HyperlinkText>
                        <HyperlinkText variant="simple" url="mailto:aaloksg@gmail.com">
                            <MDIcon :icon="MailIcon" class="h-10 w-10 text-inherit" />
                        </HyperlinkText>
                        <HyperlinkText
                            variant="simple"
                            url="https://instagram.com/aaloksg?igshid=ZGUzMzM3NWJiOQ=="
                        >
                            <MDIcon :icon="InstagramIcon" class="h-10 w-10 text-inherit" />
                        </HyperlinkText>
                    </div>
                    <div class="max-h-52 w-[40vw]">
                        <img
                            class="border-primary h-auto max-h-full rounded-full border-4 border-solid object-cover align-bottom"
                            src="../../assets/images/bio-image.png"
                        />
                    </div>
                </div>
            </div>
        </template>
    </SectionLayout>
</template>

<script setup lang="ts">
import HyperlinkText from '../../components/HyperlinkText.vue';
import TextChain, { type TextChainPart } from '../../components/TextChain.vue';
import SectionLayout from './SectionLayout.vue';

import MailIcon from '@material-symbols/svg-600/rounded/mail.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

import MDIcon from '@/components/MDIcon.vue';

defineOptions({
    name: 'BioSection',
});

const paras: TextChainPart[][] = [
    [
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
            text: ' of experience, and a passion for Virtual Reality, Visualization, JavaScript, and creating innovative and interactive digital solutions that enhance user experience and satisfaction.',
            link: '',
            bold: false,
        },
    ],
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
            text: 'Human Computer Interaction',
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

const previousExperiences: TextChainPart[][] = [
    [
        {
            text: 'Former web developer at',
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
            text: 'Former Software Developer at Siemens, where I built real-time SCADA web applications, picking up data visualization concepts and skills in building responsive cross-device and cross-browser web UI.',
            link: '',
            bold: false,
        },
    ],
];
</script>
