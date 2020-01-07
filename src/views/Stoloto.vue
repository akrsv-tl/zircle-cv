<template>
  <z-view>
    <h1>Stoloto</h1>
    <p>Варенька, такая милая, добродушная и отзывчивая девушка, глаза которой всегда лучились добротой и теплом, с невозмутимым видом сущего демона шла к бару «Гадкий Гарри» с автоматом Томпсона наперевес, готовая укатать в асфальт этих мерзких, грязных, вонючих и скользких типов, посмевших пялиться на ее прелести и пускать похотливые слюни.</p>
  </z-view>
</template>

<script>
import { store } from "../store";

export default {
  name: "stoloto",
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