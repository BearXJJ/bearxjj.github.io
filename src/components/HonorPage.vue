<template>
  <div class="honor">
    <h1 class="title">Honors</h1>
    <div class="content">
      <div class="bubble">
        <div class="year">2022 2023 2024</div>
        <div class="level">ShanghaiTech University</div>
        National Encouragement Scholarship
      </div>
      <div class="bubble">
        <div class="year">2024</div>
        <div class="level">ShanghaiTech University</div>
        Outstanding Student
      </div>
      <div class="bubble">
        <div class="year">2023</div>
        <div class="level">ShanghaiTech University</div>
        Outstanding Industrial Practice Member
      </div>
      <div class="bubble">
        <div class="year">2022</div>
        <div class="level">ShanghaiTech University</div>
        Outstanding Student Union Offcer
      </div>
    </div>
  </div>

</template>

<script setup>

  import { onMounted } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';

  onMounted(()=>{

    ScrollReveal().reveal('.content .bubble', {
      ...revealConfig,
      interval: 300,
      origin: 'top',
    });

  })

</script>

<style lang="less" scoped>
  .honor{
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
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 50px;
      .bubble{
        display: inline-block;
        position: relative;
        width: auto;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 2px solid @first-color;
        border-radius: 30px;
        padding: 0 10px;
        box-shadow: 2px 2px 4px #888;
        margin-top: 40px;
        font-size: 20px;
        font-weight: 600;
        .year{
          position: absolute;
          color: @first-color;
          font-size: 26px;
          font-weight: 600;
          left: 20px;
          top: -15px;
          background-color: #fff;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
        }
        .level{
          position: absolute;
          color: @first-color;
          font-size: 20px;
          font-weight: 600;
          right: 20px;
          bottom: -15px;
          background-color: #fff;
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
          border-color: @first-color transparent transparent  @first-color;
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
          border-color: @first-color  @first-color transparent transparent;
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
</style>
