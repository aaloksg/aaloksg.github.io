const template = /*html*/`
<i :class="[muted ? 'icons fa fa-volume-off' : 'icons fa fa-volume-up']"
    style="font-size:36px"
    @click.stop="toggleMute"></i>
<svg ref="svgElement" id="circle-threader-svg" width="100%" height="100%">
</svg>
`;
import { ref, defineComponent, onMounted, onUnmounted, defineProps, watch } from 'vue'
import { CircleThreader } from '../CircleThreader/scripts/circleThreader.js';

export default defineComponent({
    name: 'CircleThreader',
    setup() {
        const svgElement = ref(null);
        const muted = ref(false);
        const circleThreader = ref(null);
        const toggleMute = () => {
            if (muted.value) {
                muted.value = false;
                circleThreader.value.unmute();
            } else {
                muted.value = true;
                circleThreader.value.mute();
            }
        };
        watch(() => svgElement.value, () => {
            if (svgElement.value) {
                circleThreader.value = new CircleThreader(svgElement.value);
                circleThreader.value.unmute();

                svgElement.value.addEventListener('click', () => {
                    circleThreader.value.toggle();
                });
                svgElement.value.addEventListener('dblclick', () => {
                    // Reset
                    circleThreader.value.stop();
                    circleThreader.value.cleanUp();
                    circleThreader.value = new CircleThreader(svgElement.value);
                });

            }
        });
        
        onUnmounted(() => {
            circleThreader.value?.cleanUp();
        });

        return {
            svgElement,
            muted,
            toggleMute,
        }
    },
    template
});