<template>
  <z-view>
    <h1>Stoloto</h1>
    <p>Разработка/доработка проектов компании как с нуля, так и доработка уже существующих (stoloto.ru, 888.ru, интерактивные витрины, административные панели, интерфейс шины данных, экспериментальные проекты и т.д.);</p>
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