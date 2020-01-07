<template>
  <z-view>
    <h1>Pixmove</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ab unde qui nobis corporis dolorem ea magni numquam dignissimos ad voluptates, facere nostrum, earum sit aspernatur iste. Suscipit, officia velit.</p>
  </z-view>
</template>

<script>
import { store } from "../store";

export default {
  name: "pixmove",
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