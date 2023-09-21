const template = /*html*/`
<div class="mainDiv">
<PortraitApp v-if="isPortraitMode" />
<LandscapeApp v-else />
</div>
`
import { computed, defineComponent, inject } from 'vue'
import PortraitApp from './PortraitApp.js';
import LandscapeApp from './LandscapeApp.js';
export default defineComponent({
    name: 'Main',
    components: {
        PortraitApp,
        LandscapeApp
    },
    setup() {
        const isPortraitMode = inject('isPortraitMode');
        return {
            isPortraitMode,
        }
    },
    template
});