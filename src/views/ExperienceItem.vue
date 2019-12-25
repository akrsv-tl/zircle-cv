<template>
  <z-view>
    <span>{{ items }}</span>
    <ul>
      <li>React</li>
      <li>Ext.js</li>
      <li>Vue</li>
    </ul>
  </z-view>
</template>

<script>
import { store } from "../store";

export default {
  name: "experienceitem",
  data() {
    return {
      sharedState: store.state,
      items: store.state.ecosystem[1].elements
    };
  },
  methods: {
  }
};
</script>