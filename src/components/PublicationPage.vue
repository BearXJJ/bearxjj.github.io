<template>
  <div class="publication">
    <h1 class="title">Publications</h1>
    <div class="content">
      <div class="paper">
        <img class="system-image" src="../assets/images/cluecart.png" alt="">
        <div class="system-name">ClueCart</div>
        <div class="info">
          <div class="name">ClueCart: Supporting Game Story Interpretation and Narrative Inference from Fragmented Clues</div>
          <div class="author">Xiyuan Wang, Yifan Cao, <strong>Junjie Xiong</strong>, Sizhe Chen, Wenxuan Li, Junjie Zhang, Quan Li</div>
          <div class="acceptby">CHI 2025</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

  import { onMounted } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';

  onMounted(()=>{

    ScrollReveal().reveal('.content .paper', {
      ...revealConfig,
      interval: 500,
      origin: 'top',
    });

  })

</script>

<style lang="less" scoped>
  .publication{
    width: calc(100% - 300px);
    margin-left: 150px;
    padding-top: 100px;
    text-align: center;
    .title{
      display: inline-block;
      width: auto;
      font-size: 30px;
      color: @first-color;
      border-bottom: 2px solid @first-color;
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
          color: @gray-1;
        }
        .info{
          position: absolute;
          width: 45%;
          right: 0;
          top: 30%;
          background-color: #82a2f4;
          padding: 30px 30px;
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
          transition: 0.3s ease;
          color: @gray-1;
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
        }
      }
    }
  }
</style>
