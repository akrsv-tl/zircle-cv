<template>
  <div id="app">
    <z-canvas :views='$options.components'>
    </z-canvas>
  </div>
</template>

<script>
  import Home from '@/views/Home';
  import Links from '@/views/Links';
  import Settings from '@/views/Settings';
  import Experience from '@/views/Experience';
  export default {
    name: 'App',
    components: {
      Home,
      Links,
      Settings,
      Experience
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
