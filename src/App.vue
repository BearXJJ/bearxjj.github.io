<template>
  <div class="homepage">
    <header class="header">
        <img class="logo" src="./assets/icons/logo.png" alt="">
        <div class="menu" id="menu">
          <a href="#home" class="link link-active">About</a>
          <a href="#about" class="link">Educations</a>
          <a href="#skills" class="link">Publications</a>
          <a href="#work" class="link">Honors</a>
          <!-- <a href="#contact" class="link">Contact</a> -->
        </div>
        <!-- <div class="toggle" id="toggle">
          <box-icon name='menu'></box-icon>
        </div> -->
    </header>

    <Home></Home>
    <EducationPage></EducationPage>
    <PublicationPage></PublicationPage>
    <HonorPage></HonorPage>

  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import Home from './components/HomePage.vue';
  import EducationPage from './components/EducationPage.vue';
  import PublicationPage from './components/PublicationPage.vue';
  import HonorPage from './components/HonorPage.vue';

  onMounted(()=>{
    document.documentElement.classList.add('hide-scrollbar');
  })



</script>

<style lang="less" scoped>
  .homepage{
    height: 100vh;
    width: 100vw;
    .header{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10010;
      display: flex;
      justify-content: space-between;
      height: 80px;
      width: 100%;
      line-height: 80px;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
      .logo{
        width: 50px;
        height: 55px;
        margin: auto;
        margin-left: 150px;
        font-size: 20px;
      }
      .menu{
        display: flex;
        flex: 1;
        justify-content: flex-end;
        font-size: 20px;
        font-weight: 600;
        .link{
          height: 65px;
          color: @gray-1;
          margin-right: 40px;
        }
        .link-active{
          border-bottom: 2px solid @primary-color;
        }
        margin-right: 110px;
      }
    }
  }
</style>
