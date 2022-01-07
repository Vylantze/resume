<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 700px;
  margin: auto;
  text-align: left;
}

@media (max-width: 700px) {
  #app {
    width: 100%;
  }
}
</style>
