<template>
  <z-view>
    <span>
      <strong>{{ ecosystem.name }}</strong>
    </span>
    <br>
    <span>Ecosystem</span>

    <section slot="extension">
      <z-spot
        v-for="(element, index) in ecosystem.elements"
        class="inactive"
        :angle="(360 / ecosystem.elements.length * index) - sharedState.ang1 * 11"
        :distance="130"
        size="medium"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
        @click.native.prevent="window.open(element.url, '_blank')"
        :label="element.name"
        :key="index"
      >
        <i :class="element.icon"></i>
      </z-spot>
    </section>
  </z-view>
</template>

<script>
import { store } from "../store";

export default {
  name: "stack",
  data() {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[2]
    };
  },
  methods: {
    active(event) {
      var target = event.target.parentElement;
      if (target.classList.contains("inactive")) {
        target.classList.remove("inactive");
        target.classList.add("active");
        this.sharedState.mov1.pause();
      }
    },
    inactive(event) {
      var target = event.target.parentElement;
      if (target.classList.contains("active")) {
        target.classList.remove("active");
        target.classList.add("inactive");
        this.sharedState.mov1.play();
      }
    }
  },
  destroyed() {
    this.sharedState.mov.play();
  }
};
</script>