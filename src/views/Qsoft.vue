<template>
  <z-view>
    <h1>Qsoft</h1>
    <p>Лейтенант шел по желтому строительному песку, нагретому дневным палящим солнцем. Он был мокрым от кончиков пальцев до кончиков волос, все его тело было усеяно царапинами от острой колючей проволоки и ныло от сводящей с ума боли, но он был жив и направлялся к командному штабу, который</p>
  </z-view>
</template>

<script>
import { store } from "../store";

export default {
  name: "qsoft",
  data() {
    return {
      sharedState: store.state,
      items: store.state.ecosystem[1].elements
    };
  }
};
</script>