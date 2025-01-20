<template>
    <div
        ref="menuRef"
        class="flex h-full select-none flex-col bg-primary/90 shadow-md transition-all duration-200"
    >
        <div
            :class="{
                '-translate-x-40vw': side === 'left' && collapsed,
                'translate-x-full': side === 'right' && collapsed,
            }"
        >
            <slot />
        </div>

        <ButtonItem
            class="absolute left-0 top-1 p-3"
            :variant="collapsed ? 'ghost-inverse' : 'ghost'"
            @click="emits('toggleCollapsed')"
            :class="[
                {
                    'rotate-90': !collapsed,
                },
            ]"
        >
            <MDIcon :icon="collapsed ? MenuIcon : CloseIcon" class="h-6 w-6 text-inherit" />
        </ButtonItem>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import ButtonItem from './ButtonItem.vue';

import MenuIcon from '@material-symbols/svg-600/rounded/menu.svg';
import CloseIcon from '@material-symbols/svg-600/rounded/close.svg';

import MDIcon from './icons/MDIcon.vue';

type MenuSidebarProps = {
    collapsed: boolean;
    side?: 'left' | 'right';
};

type MenuSidebarEmits = {
    close: [];
    toggleCollapsed: [];
};

defineOptions({
    name: 'MenuSidebar',
});

withDefaults(defineProps<MenuSidebarProps>(), {
    side: 'left',
});

const emits = defineEmits<MenuSidebarEmits>();

const menuRef = ref();

onClickOutside(menuRef, () => {
    emits('close');
});
</script>
