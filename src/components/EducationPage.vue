<template>
  <div class="education">
    <h1 class="title">{{ text.education }}</h1>
    <div class="content">
      <a class="school-box" href="https://cqyz.cn/" target="_blank">
        <div class="stage">{{ text.highSchool[0] }}</div>
        <img class="image" src="../assets/images/cqyz.png" alt="">
        <div class="name">{{ text.highSchool[1] }}</div>
        <div class="time">{{ text.highSchool[2] }}</div>
      </a>
      <a class="school-box" href="https://www.shanghaitech.edu.cn/" target="_blank">
        <div class="stage">{{ text.bachelor[0] }}</div>
        <img class="image" src="../assets/images/shanghaitech.png" alt="">
        <div class="name">{{ text.bachelor[1] }}</div>
        <div class="major">{{ text.bachelor[2] }}<br> {{ text.bachelor[3] }}</div>
        <div class="time">{{ text.bachelor[4] }}</div>
      </a>
      <a class="school-box" href="https://www.shanghaitech.edu.cn/" target="_blank">
        <div class="stage">{{ text.master[0] }}</div>
        <img class="image" src="../assets/images/shanghaitech.png" alt="">
        <div class="name">{{ text.master[1] }}</div>
        <div class="major">{{ text.master[2] }}</div>
        <div class="time">{{ text.master[3] }}</div>
      </a>
    </div>
  </div>

</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';
  import { useLanguageStore } from '@/stores/language';

  onMounted(()=>{

    ScrollReveal().reveal('.title', {
      ...revealConfig,
      origin: 'top',
    });
    ScrollReveal().reveal('.content .school-box', {
      ...revealConfig,
      interval: 200,
      origin: 'top',
    });

  })

  // 文字内容获取
  const languageStore = useLanguageStore();
  const text = computed(() => languageStore.text[languageStore.languageClass])
</script>

<style lang="less" scoped>
  .education{
    width: calc(100% - 16%);
    max-width: 1500px;
    margin: auto;
    padding-top: 100px;
    text-align: center;
    .title{
      display: inline-block;
      width: auto;
      font-size: 30px;
      color: @theme-color;
      border-bottom: 2px solid @theme-color;
      padding-bottom: 3px;
    }
    .content{
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-top: 20px;
      .school-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 360px;
        width: 360px;
        color: @text-color-1;
        border: 3px solid @theme-color;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(146, 161, 176, 0.6);
        margin-top: 30px;
        padding: 20px 0;
        transition: ease 0.3s;
        &:hover{
          margin-top: 25px;
          box-shadow: @text-color-2 0px 4px 32px 0px;
        }
        .stage{
          color: @theme-color;
          font-size: 22px;
          font-weight: 600;
        }
        .image{
          width: 160px;
          margin-top: 15px;
        }
        .name{
          margin-top: 20px;
          font-size: 20px;
          font-weight: 600;
        }
        .major{
          margin-top: 15px;
          font-size: 18px;
        }
        .time{
          margin-top: 15px;
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 1000px){
      .education{
        width: 90%;
        margin-left: 5%;
        .content{
          .school-box{
            height: auto;
            .image{
              display: none;
            }
            .name{
              font-size: 20px;
            }
          }
        }
      }
    }
</style>
