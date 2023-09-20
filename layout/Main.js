const template = /*html*/`
<div class="mainDiv">
<PortraitApp class="only-in-portrait" />
<LandscapeApp class="only-in-landscape" />
<div>
`
import { ref, defineComponent } from 'vue'
import PortraitApp from './PortraitApp.js';
import LandscapeApp from './LandscapeApp.js';
export default defineComponent({
    name: 'Main',
    components: {
        PortraitApp,
        LandscapeApp
    },
    setup() {
    },
    template
});