<template>
    <a
        class="transition-all duration-500"
        :class="VARIANTS[variant]"
        :title="urlHint || url"
        :href="url"
        target="_blank"
    >
        <slot>
            {{ text }}
        </slot>
    </a>
</template>
<script setup lang="ts">
const VARIANTS = {
    simple: 'text-muted hover:text-accent',
    decorated:
        'hover:bg-accent/40 rounded-lg p-1 text-muted decoration-primary underline decoration-dotted hover:decoration-solid',
};

type HyperlinkTextProps = {
    text?: string;
    url: string;
    urlHint?: string;
    variant?: keyof typeof VARIANTS;
};

defineOptions({
    name: 'HyperlinkText',
});

withDefaults(defineProps<HyperlinkTextProps>(), { text: '', urlHint: '', variant: 'decorated' });
</script>
