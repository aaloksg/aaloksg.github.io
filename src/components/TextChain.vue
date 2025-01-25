<template>
    <component :is="as" class="leading-6 text-secondary dark:text-white">
        <template v-for="(textPart, index) in texts" :key="`text-${index}`">
            <HyperlinkText
                v-if="textPart.link"
                :text="textPart.text"
                :url="textPart.link"
                :url-hint="textPart.linkHint"
                :class="{ 'font-bold': textPart.bold, italic: textPart.italic }"
            />
            <component
                v-else
                :is="textPart.type ?? 'span'"
                :class="{ 'font-bold': textPart.bold, italic: textPart.italic }"
            >
                {{ textPart.text }}
            </component>
        </template>
    </component>
</template>

<script setup lang="ts">
import HyperlinkText from './HyperlinkText.vue';

type HtmlElementTagNames = keyof HTMLElementTagNameMap;

type TextType = Extract<HtmlElementTagNames, 'li' | 'span'>;

export type TextChainPart = {
    text: string;
    link?: string;
    linkHint?: string;
    bold?: boolean;
    italic?: boolean;
    type?: TextType;
};

type TextChainProps = {
    texts: TextChainPart[];
    as?: HtmlElementTagNames;
};

withDefaults(defineProps<TextChainProps>(), {
    as: 'p',
});
</script>
