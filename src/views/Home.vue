<template>
    <z-view style="background-color: white">
      <!-- <span><img src="../assets/lynx.png" width="150" /></span><br> -->
      <h1><strong>First name </strong></h1>
      <h2> Second name </h2>
      <section slot="extension">
        <z-spot
          v-for="(element, index) in ecosystem"
          class="inactive"
          :angle="(360 / ecosystem.length * index) + sharedState.ang * 5"
          :distance="135"
          size="medium"
          :to-view="element.viewName"
          @mouseover.native="active"
          @touchstart.native="active"
          @mouseout.native="inactive"
          @touchend.native="inactive"
          :label="element.name"
          :key="index"
        >
          <i class="fa" :class="element.icon"></i>

          <section slot="extension">
            <z-spot
              v-for="(subelement, index) in element.elements"
              :angle="(360 / element.elements.length * index) - sharedState.ang1 * 11"
              :distance="132"
              size="xxs"
              :key="index"
            ></z-spot>
          </section>
        </z-spot>
      </section>
    </z-view>
</template>

<script>
  import { store } from '../store';

  export default {
      data() {
        return {
          sharedState: store.state,
          ecosystem: store.state.ecosystem
        };
      },
      methods: {
      active(event) {
        var target = event.target.parentElement;
        if (target.classList.contains("inactive")) {
          target.classList.remove("inactive");
          target.classList.add("active");
          this.sharedState.mov.pause();
        }
      },
      inactive(event) {
        var target = event.target.parentElement;
        if (target.classList.contains("active")) {
          target.classList.remove("active");
          target.classList.add("inactive");
          this.sharedState.mov.play();
        }
      }
    },
    updated() {
      var vm = this;
      this.$nextTick(function() {
        if (
          vm.$el.classList.contains("is-previous-view") ||
          vm.$el.classList.contains("is-past-view")
        ) {
          vm.sharedState.mov.pause();
        }
      });
    }
}
</script>