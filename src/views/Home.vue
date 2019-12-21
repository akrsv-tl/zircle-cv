<template>
    <z-view style="background-color: white">
      <span><img src="../assets/lynx.png" width="150" /></span><br>
      <h1><strong>First name </strong></h1>
      <h2> Second name </h2>
      <section slot="extension">
        <z-spot 
          label="Опыт"
          label-pos="right"
          :angle="45"
          :distance="120"
          size="s">
          <i class="fas fa-user-tie"></i>
        </z-spot>
        <z-spot 
          label="Ссылки"
          label-pos="left"
          :angle="135"
          :distance="120"
          size="s"
          to-view="links">
          <i class="fas fa-link"></i>
        </z-spot>
        <z-spot
          label="Проекты"
          label-pos="left"
          :angle="225"
          :distance="120"
          size="s"
          to-view="mix">
          <i class="fas fa-project-diagram"></i>
        </z-spot>
        <z-spot
          :angle="315"
          :distance="120"
          size="s"
          label="Настройки"
          label-pos="right"
          to-view="settings">
          <i class="fas fa-sliders-h"></i>
        </z-spot>
      </section>
    </z-view>
</template>

<script>
export default {
    
}
</script>