
import { ref } from 'vue'
import Main from './Main.js';
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  components: {
    Main
  },
  template: `<div id="AppChild"><Main /></div>`
}