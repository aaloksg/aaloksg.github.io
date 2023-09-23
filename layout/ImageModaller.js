const template = /*html*/`
<div>
    <Teleport to="body">
        <div v-if="open" class="modal" v-on:click="open = false">
            <div class="modal-image-parent">
                <img :src="imageSrc" class="modal-image"
                    :style="[ imageDimensionStyle,
                                marginAdjustmentStyle,
                                isRotated ? 'transform: rotate(90deg)' : '']"
                    v-on:click.stop=""
                />
                <p class="caption"> {{caption}} </p>
                <i v-if="isRotated" class="fa fa-rotate-left rotate-icons" 
                    style="font-size:1em"
                    v-on:click.stop="isRotated=false"></i>
                <i v-else class="fa fa-rotate-right rotate-icons"
                    style="font-size:1em"
                    v-on:click.stop="isRotated=true"></i>
            </div>
        </div>
    </Teleport>
    <div style="cursor: pointer;" >
        <slot v-if="!open" :onClick="onClick" />
    </div>
</div>
`;
import { defineComponent, ref, inject, computed } from 'vue'

const IMAGE_MARGINS = 20; // in px
export default defineComponent({
    name: 'Modaller',
    props: {
        imageSrc: {
            type: String,
            default: ''
        },
        caption: {
            type: String,
            default: ''
        }
    },
    setup() {
        const isPortraitMode = inject('isPortraitMode');
        const open = ref(false);
        const isRotated = ref(false);
        const windowHeight = ref(0);
        const windowWidth = ref(0);
        const setDimensions = () => {
            windowHeight.value = window.innerHeight - IMAGE_MARGINS;
            windowWidth.value = window.innerWidth - IMAGE_MARGINS;
        };
        const height = computed(() => isRotated.value ? windowWidth.value : windowHeight.value);
        const width = computed(() => isRotated.value ? windowHeight.value : windowWidth.value);
        const onClick = () => {
            setDimensions();
            open.value = true;
        };
        const imageDimensionStyle = computed(() => {
            return (isPortraitMode.value && !isRotated.value) || 
            (!isPortraitMode.value && isRotated.value) 
            ? 'width:' + width.value + 'px' 
            : 'height:' + height.value + 'px';
        });

        const marginAdjustmentStyle = computed(() => {
            return isPortraitMode.value
            ? 'margin-top: -15%' 
            : 'margin-left: -15%';
        });

        return {
            onClick,
            imageDimensionStyle,
            marginAdjustmentStyle,
            open,
            isPortraitMode,
            height,
            width,
            isRotated,
        };
    },
    template
});