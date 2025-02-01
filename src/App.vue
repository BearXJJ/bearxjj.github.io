<template>
  <!-- <div class="homepage" @touchstart="touchPlayColor" @click="playColor"> -->
  <div class="homepage" @click="playColor">
    <header class="header">
        <img class="logo" src="./assets/icons/logo.png" @click="scrollToSection('about')" alt="">
        <div class="menu">
          <button class="mybutton link" @click="scrollToSection('about')">About</button>
          <button class="mybutton link" @click="scrollToSection('educations')">Educations</button>
          <button class="mybutton link" @click="scrollToSection('publications')">Publications</button>
          <button class="mybutton link" @click="scrollToSection('honors')">Honors</button>
        </div>
        <box-icon class="menu-icon" name='menu' size="40px" @click="changeMenuState" v-if="menuActive === false"></box-icon>
        <box-icon class="menu-icon" name='x' size="40px" @click="changeMenuState" v-if="menuActive === true"></box-icon>
    </header>

    <AboutPage id="about"></AboutPage>
    <EducationPage id="educations"></EducationPage>
    <PublicationPage id="publications"></PublicationPage>
    <HonorPage id="honors"></HonorPage>

    <div class="drawer" v-if="menuActive === true">
      <div class="profile">
        <svg class="blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask-mobile" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
          </mask>
          <g mask="url(#mask-mobile)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            <image class="image" x="0" y="50" href="@/assets/images/1.png"/>
          </g>
        </svg>
      </div>
      <div class="menu-mobile">
          <button class="mybutton link" @click="scrollToSection('about')">About</button>
          <button class="mybutton link" @click="scrollToSection('educations')">Educations</button>
          <button class="mybutton link" @click="scrollToSection('publications')">Publications</button>
          <button class="mybutton link" @click="scrollToSection('honors')">Honors</button>
        </div>
    </div>

  </div>
</template>

<script setup>
  import { onMounted, ref, nextTick} from 'vue';
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

    changeMenuState();

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
  // ScrollReveal({ mobile: false });


  //移动端折叠menu
  let menuActive = ref(false);
  const changeMenuState = ()=>{
    menuActive.value = !menuActive.value;

    if (menuActive.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    nextTick(() => {

      ScrollReveal().reveal('.profile', {
        ...revealConfig,
        origin: 'top',
        interval: 200,
        delay: 200,
        reset: false,
      });
      ScrollReveal().reveal('.menu-mobile .link', {
        ...revealConfig,
        origin: 'top',
        interval: 200,
        delay: 400,
        reset: false,
      });

      //调整menu位置
      const scrollTop = window.scrollY;
      const menu = document.querySelector('.drawer');
      if (menu) {
        menu.style.top = scrollTop + 80 + 'px';
      }
    });
  }


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
      .menu-icon{
        display: none;
        line-height: 110px;
        margin-right: 20px;
      }
    }
    .drawer{
      display: none;
    }
  }

  @media screen and (max-width: 1000px){
    .homepage{
      .header{
        .menu{
          display: none;
        }
        .menu-icon{
          display: block;
        }
      }
      .drawer{
        display: flex;
        flex-direction: column;
        position: absolute;
        height: calc(100% - 80px);
        width: 100%;
        left: 0;
        top: 80px;
        background-color: #ffffff;
        .profile{
          height: 40%;
          text-align: center;
          .blob{
            width: 60%;
            fill: @first-color;
            margin-top: calc(5%);
            .image{
              width: 420px;
            }
          }
        }
        .menu-mobile{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          padding-bottom: 30px;
          .link{
            position: relative;
            height: 50px;
            color: @gray-1;
            &::after{
              position: absolute;
              content: '';
              bottom: -1px;
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
        }
      }
    }
  }

</style>
