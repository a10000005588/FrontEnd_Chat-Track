<template>
  <div id="app">
    <h1> Chat&Track開發平台 </h1>

    <img src="./assets/logo.png">

    <router-link :to="{path: '/'}">引用Element</router-link>
    <router-link :to="{path: '/counter'}">增加或減少變數(Counter)</router-link>
    <router-link :to="{path: '/todolist'}">Todolist範例(練習CRUD)</router-link>
    <router-link :to="{path: '/chart'}">Chart圖表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
