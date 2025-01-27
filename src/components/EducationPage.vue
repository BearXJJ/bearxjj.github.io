<template>
  <div class="education">
    <h1 class="title">Educations</h1>
    <div class="content">
      <div class="school-box">
        <div class="stage">High School</div>
        <img class="image" src="../assets/images/cqyz.png" alt="">
        <div class="name">Chongqing No.1 Middle School</div>
        <div class="major"> <br> <br> </div>
        <div class="time">2018.9 - 2021.6</div>
      </div>
      <div class="school-box">
        <div class="stage">Bachelor</div>
        <img class="image" src="../assets/images/shanghaitech.png" alt="">
        <div class="name">ShanghaiTech University</div>
        <div class="major">Computer Science and Technology<br> Minored in Finance</div>
        <div class="time">2021.9 - present</div>
      </div>
      <div class="school-box"></div>
    </div>
  </div>

</template>

<script setup>
  import { onMounted } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';

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
</script>

<style lang="less" scoped>
  .education{
    width: calc(100% - 16%);
    margin-left: 8%;
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
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-top: 20px;
      .school-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 400px;
        width: 360px;
        border: 3px solid @first-color;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(146, 161, 176, 0.6);
        margin-top: 30px;
        .stage{
          color: @primary-color;
          font-size: 22px;
          font-weight: 600;
          margin-top: 22px;
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
</style>
