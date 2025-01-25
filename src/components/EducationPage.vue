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

</script>

<style lang="less" scoped>
  .education{
    width: calc(100% - 300px);
    margin-left: 150px;
    margin-bottom: 150px;
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
      margin-top: 50px;
      .school-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 360px;
        width: 330px;
        border: 3px solid @first-color;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(146, 161, 176, 0.6);
        .stage{
          color: @primary-color;
          font-size: 20px;
          font-weight: 600;
          margin-top: 20px;
        }
        .image{
          width: 150px;
          margin-top: 15px;
        }
        .name{
          margin-top: 20px;
          font-size: 18px;
          font-weight: 600;
        }
        .major{
          margin-top: 10px;
          font-size: 16px;
        }
        .time{
          margin-top: 10px;
          font-size: 16px;
        }
      }

    }
  }
</style>
