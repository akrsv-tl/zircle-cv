<template>
  <z-view>
    <h1>Qsoft</h1>
    <p>Разработка/доработка функционала сайтов: Ренессанс-кредит, Respect, Oodji, проекты Ростелеком, ФК "Локомотив" и многие другие.
</p>
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