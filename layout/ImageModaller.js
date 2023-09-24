const template = /*html*/`
<div>
    <Teleport to="#modal-container">
        <div v-if="open" class="modal" v-on:click="open = false">
            <div class="modal-image-parent">
                <img ref="image" :src="imageSrc" class="modal-image"
                    :style="[ imageDimensionStyle,
                                marginAdjustmentStyle,
                                isRotated ? 'transform: rotate(90deg)' : '']"
                    v-on:click.stop="showCaption = !showCaption"
                />
                <Transition>
                    <p v-if="showCaption" class="caption in-modal" > {{caption}} </p>
                </Transition>
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
import { defineComponent, ref, inject, computed, onMounted } from 'vue'

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
        const image = ref(null);
        const showCaption = ref(true);
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
            showCaption.value = true;
            isRotated.value = false;
        };
        const imageDimensionStyle = computed(() => {
            if ((isPortraitMode.value && !isRotated.value) || 
            (!isPortraitMode.value && isRotated.value)) {
                // returning width.
                let widthToSet = width.value;
                if (image.value) {
                    const imageHeight = image.value.naturalHeight;
                    const imageWidth = image.value.naturalWidth;
                    const newHeight = imageHeight / imageWidth * widthToSet;
                    if (newHeight > height.value) {
                        widthToSet = imageWidth / imageHeight * height.value;
                    }
                }
                return 'width:' + widthToSet + 'px';
            } else {
                // returning height
                let heightToSet = height.value;
                if (image.value) {
                    const imageHeight = image.value.naturalHeight;
                    const imageWidth = image.value.naturalWidth;
                    const newWidth = imageWidth / imageHeight * heightToSet;
                    if (newWidth > width.value) {
                        heightToSet = imageHeight / imageWidth * width.value;
                    }
                }
                return 'height:' + heightToSet + 'px';
            }
        });

        const marginAdjustmentStyle = computed(() => {
            return isPortraitMode.value
            ? 'margin-top: -15%' 
            : '';
        });

        onMounted( () => {
            window.addEventListener('keydown', (event) => {
                if(event.key.toLowerCase() === 'escape' && open.value) {
                    open.value = false;
                }
            });
        });

        return {
            onClick,
            image,
            imageDimensionStyle,
            marginAdjustmentStyle,
            open,
            showCaption,
            isPortraitMode,
            height,
            width,
            isRotated,
        };
    },
    template
});