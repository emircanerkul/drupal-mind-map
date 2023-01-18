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

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e4f5ff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0077c0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #005285;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

foreignObject {
  overflow: initial;
  padding: 5px 10px;
  color: rgb(86, 86, 86);
}

foreignObject * {
  user-select: text;
}

foreignObject *:not(a) {
  color: inherit;
}

foreignObject>div {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

foreignObject>div>div {
  flex: 1;
  overflow: hidden auto;
  padding-right: 10px;
}



foreignObject svg.view {
  fill: #0077c0;
  background: #fff;
  padding: 3px;
  border-radius: 4px;
  position: fixed;
  right: -10px;
  top: -10px;
}

h1 {
  font-size: 16pt;
  margin-bottom: 5px;
}

ul {
  margin-left: 15px;
}

input:not([type=checkbox], [type=radio]) {
  margin-bottom: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
