<template>
  <z-view>
    <h1>Pixmove</h1>
    <p>Разработка, поддержка, усовершенствование админ-панели, которая сосредотачивала в себе все логи, ставки, игры, терминалы, клиентов, узлы и многое другое. Использовалась схема MVC.</p>
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