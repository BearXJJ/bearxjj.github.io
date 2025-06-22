<template>
  <div class="publication">
    <h1 class="title">{{ text.publication }}</h1>
    <div class="content">
      <div class="paper">
        <img class="system-image" src="../assets/images/cluecart.png" alt="">
        <div class="system-name">ClueCart</div>

        <div class="info">
          <div class="name">ClueCart: Supporting Game Story Interpretation and Narrative Inference from Fragmented Clues</div>
          <div class="author">Xiyuan Wang, Yifan Cao, <strong>Junjie Xiong</strong>, Sizhe Chen, Wenxuan Li, Junjie Zhang, Quan Li</div>
          <div class="acceptby">CHI 2025</div>
          <div class="best-paper">🏆 Best Paper Award</div>
        </div>
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

    ScrollReveal().reveal('.content .paper', {
      ...revealConfig,
      interval: 500,
      origin: 'top',
    });

  })

  // 文字内容获取
  const languageStore = useLanguageStore();
  const text = computed(() => languageStore.text[languageStore.languageClass])

</script>

<style lang="less" scoped>
  .publication{
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
      align-items: center;
      .paper{
        position: relative;
        height: 500px;
        width: 80%;
        // border: 2px solid;
        margin-top: 20px;
        .system-image{
          position: absolute;
          height: 90%;
          top: 5%;
          left: 0;
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
          transition: 0.3s ease;
          &:hover{
            box-shadow: 8px 15px 15px rgba(0, 0, 0, 0.3);
          }
        }
        .system-name{
          position: absolute;
          right: 0;
          top: 15%;
          font-size: 30px;
          font-weight: 700;
          color: @text-color-1;
        }
        .info{
          position: absolute;
          width: 45%;
          right: 0;
          top: 30%;
          background-color: @card-color;
          padding: 30px 30px;
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
          transition: 0.3s ease;
          color: @text-color-1;
          &:hover{
            box-shadow: 8px 15px 15px rgba(0, 0, 0, 0.3);
          }
          .name{
            font-size: 20px;
            font-weight: 600;
            font-style: italic;
          }
          .author{
            font-size: 18px;
            margin-top: 25px;
            // padding-left: 10%;
          }
          .acceptby{
            font-size: 18px;
            margin-top: 25px;
          }
          .best-paper{
            position: absolute;
            left: 30px;
            bottom: 30px;
            font-size: 18px;
            font-weight: 600;
            color: #b90b0b;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px){
    .publication{
      width: 90%;
      margin-left: 5%;
      .content{
        .paper{
          height: 400px;
          width: 100%;
          .system-image{
            display: none;
          }
          .info{
            padding: 20px;
            width: calc(100% - 40px);
            left: 0;
            background-image: url('../assets/images/cluecart.png');
            background-size: cover;
            background-position: center;
            color: @text-color-1;
            z-index: 0;
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(110, 161, 233, 0.8);
              z-index: 1;
            }
            .name{
              z-index: 2;
            }
            .author{
              z-index: 2;
            }
            .acceptby{
              z-index: 2;
            }
            .best-paper{
              z-index: 2;
            }
          }
        }
      }
    }
  }
</style>
