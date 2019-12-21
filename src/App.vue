<template>
  <div id="app">
    <z-canvas :views='$options.components'>
    </z-canvas>
  </div>
</template>

<script>
  export default {
    components: {
      Home: () => import('./views/Home'),
      Links: () => import('./views/Links'),
      Settings: () => import('./views/Settings')
    },
    mounted() {
      this.$zircle.config({
        style: {
          theme: 'blue',
          mode: 'dark'
        }
      })
      this.$zircle.setView('Home');
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
