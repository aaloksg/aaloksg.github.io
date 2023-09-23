const template = /*html*/`
<div class="scroll-controls">
    <div class="scroll-controls-container">
        <i v-if="sections.length" class="fa fa-arrow-left icons" 
            :class="[hasPagesBehind ? '' : 'disabled']"
            style="font-size:30px"
            v-on:click="goToPreviousSection"></i>
        <div class="dot-container">
            <div v-for="(dot, index) in sections" class="dot-div" 
            :class="[index === activeDotIndex ? 'active' : '']" 
                v-on:click="goToSection(index)">
            </div>
        </div>
        <i v-if="sections.length" class="fa fa-arrow-right icons" 
            :class="[hasPagesAhead ? '' : 'disabled']"
            style="font-size:30px"
            v-on:click="goToNextSection"></i>
    </div>
</div>
`;
import { ref, defineComponent, onMounted } from 'vue'

const TRANSLATE_X = 1;
const ACTIVE_DOT_LAG = 200;
const INTERSECTION_OPTIONS = {
    threshold: 0.7,
  };

export default defineComponent({
    name: 'ScrollControls',
    setup() {
        const hasPagesBehind = ref(false);
        const hasPagesAhead = ref(false);
        const activeDotIndex = ref(0);
        const sections = ref([]);
        let activeDotTimer = 0;
        let nextActiveDot = 0;
        
        const goToSection = (dotIndex) => {
            setActiveDot(dotIndex);
            sections.value[dotIndex].scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
            });
        };
        const setActiveDot = (dotIndex) => {
            nextActiveDot = dotIndex;
            if (activeDotTimer) {
                clearTimeout(activeDotTimer);
            }
            activeDotTimer = setTimeout(() => {
                activeDotIndex.value = nextActiveDot;
                hasPagesBehind.value = activeDotIndex.value > 0;
                hasPagesAhead.value = activeDotIndex.value < sections.value.length - 1;
            }, ACTIVE_DOT_LAG);
        };

        const goToPreviousSection = () => {
            if (hasPagesBehind.value) {
                goToSection(activeDotIndex.value - 1);
            }
        };

        const goToNextSection = () => {
            if (hasPagesAhead.value) {
                goToSection(activeDotIndex.value + 1);
            }
        };

        onMounted(() => {
            sections.value = document.getElementsByClassName('section');
                
            const {length} = sections.value;
            for (let index = 0; index < length; index++) {
                const section = sections.value[index];        
                new IntersectionObserver(() => {
                    setActiveDot(index);
                }, INTERSECTION_OPTIONS).observe(section);
            }
            setTimeout(() => {
                goToSection(0);
            }, 200);
        });

        return {
            activeDotIndex,
            hasPagesAhead,
            hasPagesBehind,
            sections,

            goToSection,
            goToPreviousSection,
            goToNextSection,

        }
    },
    template
});