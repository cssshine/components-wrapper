import {ref, defineProps, withDefaults, defineComponent, h } from 'vue'


export default defineComponent({
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {tag} = props
    return {tag}
  },
  render(){
    const Tag = this.tag
    return h(Tag, 'test')
  }
})