<template>

  <!--TODO: link to next choosing - found or not logged or not-->
  <!--  <div class="container">-->
  <!--    <find-app></find-app>-->

  <!--  </div>-->
  <router-view></router-view>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import FindApp from "@/components/FindApp";

export default {
  name: 'App',
  // components: {FindApp,},
}
</script>


<style>
body{
  margin: 0;
  padding: 0;
}
</style>


<!--  <div class="container">-->
<!--    <div class="split left" ref="left">-->
<!--      <find-app></find-app>-->
<!--    </div>-->
<!--    <div class="split right" ref="right">-->
<!--      <h1>Xbox Series X</h1>-->
<!--      <a href="#" class="btn">Buy Now</a>-->
<!--    </div>-->
<!--  </div>-->

<!--<style>-->
<!--:root{-->
<!--  &#45;&#45;left-bg-color: rgba(87, 84, 236, 0.7);-->
<!--  &#45;&#45;right-bg-color: rgba(43, 43, 43, 0.8);-->
<!--  &#45;&#45;left-btn-color: rgba(87, 84, 236, 1);-->
<!--  &#45;&#45;right-btn-color: rgba(28, 122, 28, 1);-->
<!--  &#45;&#45;hover-width: 75%;-->
<!--  &#45;&#45;hover-other-width: 25%;-->
<!--}-->
<!--* {-->
<!--  box-sizing: border-box;-->
<!--}-->

<!--body {-->
<!--  font-family: 'Muli', sans-serif;-->
<!--  /*display: flex;*/-->
<!--  /*flex-direction: column;*/-->
<!--  /*align-items: center;*/-->
<!--  /*justify-content: center;*/-->
<!--  height: 100vh;-->
<!--  margin: 0;-->
<!--  /*background-color: aqua;*/-->

<!--  overflow: hidden;-->
<!--}-->

<!--h1 {-->
<!--  font-size: 4rem;-->
<!--  color: rgba(255, 255, 255, 0.9);-->
<!--  position: absolute;-->
<!--  left: 50%;-->
<!--  top: 20%;-->
<!--  transform: translateX(-50%);-->
<!--  white-space: nowrap;-->
<!--  /*TODO: чтобы при расширении иил сужении окна - текст не переходил на новые поля а просто пропадал из поля зрения*/-->
<!--}-->

<!--.btn {-->
<!--  position: absolute;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  left: 50%;-->
<!--  top: 40%;-->
<!--  transform: translateX(-50%);-->
<!--  text-decoration: none;-->
<!--  font-weight: bold;-->
<!--  text-transform: uppercase;-->
<!--  color: rgba(255, 255, 255, 0.9);-->
<!--  border: #ffffff solid 0.2rem;-->
<!--  width: 15rem;-->
<!--  padding: 1.5rem;-->
<!--}-->

<!--.container {-->
<!--  /*position: relative;*/-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->

<!--.left {-->
<!--  left: 0;-->
<!--  position: absolute;-->
<!--  width: 50%;-->
<!--  height: 100%;-->
<!--  overflow: hidden;-->

<!--}-->

<!--.right {-->
<!--  right: 0;-->
<!--  background-color: brown;-->
<!--  position: absolute;-->
<!--  width: 50%;-->
<!--  height: 100%;-->
<!--  overflow: hidden;-->

<!--  background: url("https://image.ceneostatic.pl/data/products/88072703/i-microsoft-xbox-series-x.jpg") no-repeat;-->
<!--  background-size: cover;-->
<!--}-->

<!--.right,-->
<!--.left,-->
<!--.right::before,-->
<!--.left::before {-->
<!--  transition: all 1000ms ease-in-out;-->
<!--}-->

<!--.left::before {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->


<!--.right .btn:hover {-->
<!--  background-color: var(&#45;&#45;right-btn-color);-->
<!--  border-color: var(&#45;&#45;right-btn-color);-->
<!--}-->

<!--.right::before {-->
<!--  content: "";-->
<!--  position: absolute;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  background-color: var(&#45;&#45;right-bg-color);-->
<!--}-->

<!--.hover-left .left {-->
<!--  width: var(&#45;&#45;hover-width);-->
<!--}-->

<!--.hover-left .right {-->
<!--  width: var(&#45;&#45;hover-other-width);-->
<!--}-->

<!--.hover-right .right {-->
<!--  width: var(&#45;&#45;hover-width);-->
<!--}-->

<!--.hover-right .left {-->
<!--  width: var(&#45;&#45;hover-other-width);-->
<!--}-->


<!--</style>-->
