<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>

:root {
  --blockquote-border-color: #87d1ffaa !important;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

foreignObject * {
  user-select: text;
}

foreignObject *:not(a) {
  color: inherit;
}

h1 {
  font-size: 16pt;
  margin-bottom: 5px;
}

ul {
  margin-left: 15px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
