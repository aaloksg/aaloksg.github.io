declare module '*.svg' {
    import { VueInstance } from '@vueuse/core';
    const content: VueInstance;
    export default content;
}
