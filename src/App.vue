<template>
  <main class="container">
    <HeaderNav />
    <section class="section">
      <div class="container">
        <h1 class="title">VUE3</h1>
        <h2 class="subtitle">功能测试</h2>
      </div>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderNav from "./components/HeaderNav";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
