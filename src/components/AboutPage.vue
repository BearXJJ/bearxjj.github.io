<template>
  <div class="about">

    <div class="left">
      <div class="prologue">
        <h1>{{ text.hi }}<br>{{ text.im }} <span class="name">{{ text.name }}</span></h1>
        <div class="about-text" v-html="text.intro"></div>
        <div class="slogan">{{ text.slogan }}</div>
      </div>

      <div class="social">
        <a href="https://github.com/BearXJJ" class="social-icon"><box-icon type='logo' name='github' size='36px' :color="themeClass === 'themeLight' ? 'black' : 'white'" ></box-icon></a>
        <a href="mailto:xiongjj@shanghaitech.edu.cn" class="social-icon"><box-icon name='envelope' size='36px' :color="themeClass === 'themeLight' ? 'black' : 'white'" ></box-icon></a>
      </div>
    </div>

    <div class="profile">
      <svg class="blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <mask id="mask" mask-type="alpha">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
        </mask>
        <g mask="url(#mask)">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
          <image class="image" x="85" y="85" :href="photo_url" />
        </g>
      </svg>
    </div>

    <div class="down-icon">
      <box-icon name='chevrons-down' animation='flashing' flip='horizontal' size='100px' color='#6b6b6b'></box-icon>
    </div>

  </div>
</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';
  import { useLanguageStore } from '@/stores/language';

  import lightPhoto from '@/assets/images/light-photo.jpeg';
  import darkPhoto from '@/assets/images/dark-photo.jpeg';

  const props = defineProps(['themeClass']);

  const photo_url = computed(() => {
    return props.themeClass === 'themeLight' ? lightPhoto : darkPhoto;
  });

  onMounted(() => {
    ScrollReveal().reveal('.prologue', {
      ...revealConfig,
      delay: 1000,
      origin: 'left',
      reset: false,
    });
    ScrollReveal().reveal('.social .social-icon', {
      ...revealConfig,
      delay: 1200,
      interval: 200,
      origin: 'top',
      reset: false,
    });
    ScrollReveal().reveal('.profile', {
      ...revealConfig,
      delay: 1200,
      origin: 'right',
      reset: false,
    });
  })

  // 文字内容获取
  const languageStore = useLanguageStore();
  const text = computed(() => languageStore.text[languageStore.languageClass])
</script>

<style lang="less" scoped>
  .about{
    display: flex;
    position: relative;
    height: calc(100vh - 80px);
    width: calc(100% - 16%);
    max-width: 1500px;
    padding-top: 80px;
    margin: auto;
    .left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 30px;
      flex: 1;
      height: 100%;
      .prologue{
        font-size: clamp(20px, 2vw, 36px);
        color: @text-color-1;
        .name{
          color: @theme-color;
        }
        .about-text{
          color: @text-color-2;
          margin-top: 10px;
          font-size: clamp(15px, 1.5vw, 25px);
          line-height: 1.5;
          :deep(.name){
            color: @theme-color;
          }
          :deep(.link){
            position: relative;
            text-decoration: none;
            &::after{
              position: absolute;
              content: '';
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              background-color: @theme-color;
              transition: width 0.5s ease;
            }
            &:hover::after {
              width: 100%;
            }
          }
        }
        .slogan{
          color: @text-color-2;
          margin-top: 20px;
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 600;
        }
      }
      .social{
        margin-top: 20px;
        margin-bottom: 50px;
        .social-icon{
          margin-right: 10px;
        }
      }
    }
    .profile{
      width: 50%;
      height: 100%;
      text-align: right;
      .blob{
        width: 85%;
        fill: @theme-color;
        margin-top: calc(15%);
        .image{
          width: 300px;
          transition: transform 0.3s ease;
          transform-origin: 50% 50%;
          transform: scale(1.8);
          object-fit: fill;
          &:hover{
            transform: scale(1.9);
          }
        }
      }
    }
    .down-icon{
      position: absolute;
      bottom: 5%;
      left: calc(50% - 50px);
    }
  }

  @media screen and (max-width: 1000px){
    .about{
      width: 90%;
      margin-left: 5%;
      .profile{
        display: none;
      }
    }
  }
</style>
