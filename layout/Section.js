const template = /*html*/`
<div class="section" :style="['height:' + height]">
    <slot/>
</div>
`;
import { ref, defineComponent, onMounted, defineProps } from 'vue'

export default defineComponent({
    name: 'Section',
    props: {
        height: {
            type: String,
            default: '100vh'
        }
    },
    setup() {
    },
    template
});