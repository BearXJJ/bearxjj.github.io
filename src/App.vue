<template>
  <div class="homepage" @touchstart="touchPlayColor" @click="playColor">
    <header class="header">
        <img class="logo" src="./assets/icons/logo.png" @click="scrollToSection('about')" alt="">
        <div class="menu" id="menu">
          <button class="mybutton link" @click="scrollToSection('about')">About</button>
          <button class="mybutton link" @click="scrollToSection('educations')">Educations</button>
          <button class="mybutton link" @click="scrollToSection('publications')">Publications</button>
          <button class="mybutton link" @click="scrollToSection('honors')">Honors</button>
        </div>
    </header>

    <AboutPage id="about"></AboutPage>
    <EducationPage id="educations"></EducationPage>
    <PublicationPage id="publications"></PublicationPage>
    <HonorPage id="honors"></HonorPage>

  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import AboutPage from './components/AboutPage.vue';
  import EducationPage from './components/EducationPage.vue';
  import PublicationPage from './components/PublicationPage.vue';
  import HonorPage from './components/HonorPage.vue';
  import { revealConfig } from './utils/config';

  onMounted(()=>{
    document.documentElement.classList.add('hide-scrollbar');

    ScrollReveal().reveal('.menu .link', {
      ...revealConfig,
      origin: 'top',
      interval: 200,
      reset: false,
    });

  })

  // 点击跳转到对应组件位置
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

  };

  // 点击事件
  const playColor = (e) => {
    // console.log(e);
    const color = new window.colorBall();
    color.fly(e.clientX, e.clientY);
  }

  // 触摸事件
  const touchPlayColor = (e) => {
    const color = new window.colorBall();
    color.fly(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    e.stopPropagation();
    e.preventDefault();
  }

  //移动端禁用滚动动画
  ScrollReveal({ mobile: false });

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
        margin-left: 8%;
        transition: transform 0.3s ease;
        &:hover{
          transform: rotate(360deg);
        }
      }
      .menu{
        display: flex;
        flex: 1;
        justify-content: flex-end;
        font-size: 20px;
        font-weight: 600;
        .link{
          position: relative;
          height: 65px;
          color: @gray-1;
          margin-right: 40px;
          &::after{
            position: absolute;
            content: '';
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 3px;
            background-color: @first-color;
            transition: width 0.3s ease;
            transform: translateX(-50%);
          }
          &:hover::after {
            width: 100%;
          }
        }
        .link-active{
          border-bottom: 2px solid @primary-color;
        }
        margin-right: 8%;
      }
    }
  }

  @media screen and (max-width: 1000px){
    .homepage{
      .header{
        .menu{
          display: none;
        }
      }
    }
  }

</style>
