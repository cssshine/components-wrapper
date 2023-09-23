<template>
  <component :is="el" v-on="events">
    <slot></slot>
  </component>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';

export default {
  props: {
    tag: {
      type: String,
      required: true
    },
  },
  setup(props, {attrs,emit}) {
    const {tag} = props
    const el = ref(tag);
    const events = {}

    for(let prop in attrs){
      if(/^on/.test(prop)){
        events[prop] = function (ev, payload ){
          console.log("ev ==>",arguments)
          emit(ev.type, payload)
        }
      }
    }
    return {
      el,
      events,
    };
  },
};
</script>