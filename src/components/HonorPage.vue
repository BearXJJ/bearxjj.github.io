<template>
  <div class="honor">
    <h1 class="title">{{ text.honor }}</h1>
    <div class="content">
      <div class="bubble">
        <div class="year">2022 2023 2024</div>
        <div class="level">{{ text.shanghaitech }}</div>
        {{ text.honorList[0] }}
      </div>
      <div class="bubble">
        <div class="year">2024</div>
        <div class="level">{{ text.shanghaitech }}</div>
        {{ text.honorList[1] }}
      </div>
      <div class="bubble">
        <div class="year">2023</div>
        <div class="level">{{ text.shanghaitech }}</div>
        {{ text.honorList[2] }}
      </div>
      <div class="bubble">
        <div class="year">2022</div>
        <div class="level">{{ text.shanghaitech }}</div>
        {{ text.honorList[3] }}
      </div>
    </div>
  </div>

</template>

<script setup>

  import { onMounted, computed } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';
  import { useLanguageStore } from '@/stores/language';

  onMounted(()=>{

    ScrollReveal().reveal('.content .bubble', {
      ...revealConfig,
      interval: 300,
      origin: 'top',
    });

  })

  // 文字内容获取
  const languageStore = useLanguageStore();
  const text = computed(() => languageStore.text[languageStore.languageClass])

</script>

<style lang="less" scoped>
  .honor{
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
      flex-direction: column;
      justify-content: flex-start;
      padding-bottom: 200px;
      .bubble{
        display: inline-block;
        position: relative;
        width: auto;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 2px solid @theme-color;
        border-radius: 30px;
        padding: 0 10px;
        box-shadow: 2px 2px 4px #888;
        margin-top: 40px;
        font-size: 20px;
        font-weight: 600;
        color: @text-color-1;
        .year{
          position: absolute;
          color: @theme-color;
          background-color: @bg-color;
          font-size: 26px;
          font-weight: 600;
          left: 20px;
          top: -15px;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
        }
        .level{
          position: absolute;
          color: @theme-color;
          background-color: @bg-color;
          font-size: 20px;
          font-weight: 600;
          right: 20px;
          bottom: -15px;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
        }
      }
      .bubble-left{
        &::before{
          content: ' ';
          position: absolute;
          width: 0;
          height: 0;
          left: 30px;
          top: 50px;
          border: 15px solid;
          border-color: @theme-color transparent transparent  @theme-color;
        }
        &::after{
          content: ' ';
          position: absolute;
          width: 0;
          height: 0;
          left: 32px;
          top: 50px;
          border: 12px solid;
          border-color: #fff transparent transparent #fff;
        }
      }
      .bubble-right{
        &::before{
          content: ' ';
          position: absolute;
          width: 0;
          height: 0;
          right: 30px;
          top: 50px;
          border: 15px solid;
          border-color: @theme-color  @theme-color transparent transparent;
        }
        &::after{
          content: ' ';
          position: absolute;
          width: 0;
          height: 0;
          right: 32px;
          top: 50px;
          border: 12px solid;
          border-color: #fff #fff transparent transparent ;
        }
      }
    }
  }

  @media screen and (max-width: 1000px){
    .honor{
      width: 90%;
      margin-left: 5%;
      .content{
        .bubble{
          font-size: 14px;
          .year{
            height: 20px;
            line-height: 20px;
            font-size: 15px;
            top: -10px;
          }
          .level{
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            bottom: -10px;
          }
        }
      }
    }
  }
</style>
