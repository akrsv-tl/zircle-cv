<template>
  <z-view>
    <span>Ecosystem</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis, ab, officia non cumque sunt, accusamus unde et repudiandae eveniet dolor. Consectetur inventore quas commodi. Magni optio fuga rerum dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum porro ducimus ea autem vero totam animi inventore! Eum facilis earum, quasi cum pariatur minus aspernatur labore fugit est qui?</p>
  </z-view>
</template>

<script>
import { store } from "../store";

export default {
  name: "experienceitem",
  data() {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[1]
    };
  },
  methods: {
  }
};
</script>